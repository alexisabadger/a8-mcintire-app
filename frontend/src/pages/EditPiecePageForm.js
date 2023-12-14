import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPiecePageForm = ({ pieceToEdit }) => {
 
    const [brand, setBrand]       = useState(pieceToEdit.brand);
    const [quantity, setQuantity]         = useState(pieceToEdit.quantity);
    const [category, setCategory] = useState(pieceToEdit.category);
    const [color, setColor] = useState(pieceToEdit.color);
    const [datePurchased, setDatePurchased] = useState(pieceToEdit.datePurchased);
    
    const redirect = useNavigate();

    const editPiece = async () => {
        const response = await fetch(`/piece/${pieceToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                brand: brand, 
                quantity: quantity, 
                category: category,
                color: color,
                datePurchased: datePurchased
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`A ${category} was edited successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`Oh no, there was an error! ${response.status}. ${errMessage.Error}`);
        }
        redirect("/closet");
    }

    return (
        <>
        <main id="index">
        <section>
        <article>
            <h2>Edit a piece</h2>
            <p>Sometimes, we donate, sell, or lose a piece of clothing.
                If that happens, you can edit the piece here.
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which piece are you editing?</legend>
                    <label for="brand">Brand of the piece</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={e => setBrand(e.target.value)} 
                        id="brand" />
                    
                    <label for="quantity">Quantity of the piece</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)} 
                        id="quantity" />

                    <label for="category">Category of the piece</label>
                    <input
                        type="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)} 
                        id="category" />

                    <label for="color">Color of the piece</label>
                    <input
                        type="text"
                        value={color}
                        onChange={e => setColor(e.target.value)} 
                        id="color" />

                    <label for="datePurchased">Date purchased</label>
                    <input
                        type="date"
                        value={datePurchased}
                        onChange={e => setDatePurchased(e.target.value)} 
                        id="datePurchased" />

                    <label for="submit">
                    <button
                        onClick={editPiece}
                        id="submit"
                    >Save</button> updates to the closet</label>
                </fieldset>
                </form>
            </article>
        </section>
        </main>
        </>
    );
}
export default EditPiecePageForm;