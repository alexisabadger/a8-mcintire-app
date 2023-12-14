import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPiecePageTable = ({ pieceToEdit }) => {
 
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


    //productTable

    return (
        <>
        <main id="index">
        <section>
        <article>
            <h2>Edit a piece</h2>
            <p>On this page, you can edit the brand, quantity, category,
                color, and date purchased of all of the piece of clothing (and shoes)
                in your closet.</p>
            <table id="productTable">
                <caption>Which piece would you like to edit?</caption>
                <thead>
                    <tr>
                        <th>brand</th>
                        <th>quantity</th>
                        <th>category</th>
                        <th>color</th>
                        <th>date purchased</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="brand">Piece brand</label>
                        <input
                            type="text"
                            placeholder="brand of the Piece"
                            value={brand}
                            onChange={e => setBrand(e.target.value)} 
                            id="brand" />
                    </td>

                    <td><label for="quantity">quantity released</label>
                        <input
                            type="number"
                            value={quantity}
                            placeholder="quantity of the Piece"
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td><label for="category">category</label>
                        <input
                            type="text"
                            placeholder="Primary category of the Piece"
                            value={category}
                            onChange={e => setCategory(e.target.value)} 
                            id="category" />
                    </td>

                    <td><label for="color">color</label>
                        <input
                            type="text"
                            placeholder="Primary color of the Piece"
                            value={color}
                            onChange={e => setColor(e.target.value)} 
                            id="color" />
                    </td>

                    <td><label for="datePurchased">date purchased</label>
                        <input
                            type="text"
                            placeholder="date purchased of the Piece"
                            value={datePurchased}
                            onChange={e => setDatePurchased(e.target.value)} 
                            id="datePurchased" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editPiece}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
            </section>
            </main>
        </>
    );
}
export default EditPiecePageTable;