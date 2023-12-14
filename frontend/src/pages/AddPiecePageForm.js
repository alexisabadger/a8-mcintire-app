import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddMoviePageForm = () => {

    const [brand, setBrand]       = useState('');
    const [quantity, setQuantity]         = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [datePurchased, setDatePurchased] = useState('');
    
    
    const redirect = useNavigate();

    const addPiece = async () => {
        const newPiece = { brand, color, category, quantity, datePurchased };
        const response = await fetch('/piece', {
            method: 'post',
            body: JSON.stringify(newPiece),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`A ${newPiece.color} ${newPiece.brand} ${newPiece.category} was added to the closet.`);
        } else {
            alert(`Oh no, there was an error! = ${response.status}`);
        }
        redirect("/closet");
    };




    return (
        <>
        <main id="index">
        <section>
        <article>
            <h2>Add a piece</h2>
            <p>Got a new pair of shoes, a sweater, or other piece of clothing?
                Great; add it to the closet here.
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which piece are you adding?</legend>
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
                        type="submit"
                        onClick={addPiece}
                        id="submit"
                    >Add</button> the piece to the closet</label>
                </fieldset>
                </form>
            </article>
            </section>
            </main>
        </>
    );
}

export default AddMoviePageForm;