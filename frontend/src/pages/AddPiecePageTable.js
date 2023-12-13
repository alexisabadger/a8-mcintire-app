import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddPiecePageTable = () => {

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
            alert(`helpful adding message`);
        } else {
            alert(`helpful adding message = ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a Piece</h2>
            <p>Paragraph about this page.</p>
            
            <table id="piecesAddTable">
                <caption>Which piece are you adding?</caption>
                <thead>
                    <tr>
                        <th>brand</th>
                        <th>quantity</th>
                        <th>color</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="brand">piece brand</label>
                        <input
                            type="text"
                            placeholder="brand of the piece"
                            value={brand}
                            onChange={e => setBrand(e.target.value)} 
                            id="brand" />
                    </td>

                    <td><label for="quantity">quantity of piece</label>
                        <input
                            type="number"
                            value={quantity}
                            placeholder="quantity of the piece"
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td><label for="color">color</label>
                        <input
                            type="text"
                            placeholder="Primary color of the piece"
                            value={color}
                            onChange={e => setColor(e.target.value)} 
                            id="color" />
                    </td>

                    <td><label for="category">category</label>
                        <input
                            type="text"
                            placeholder="Primary category of the piece"
                            value={category}
                            onChange={e => setCategory(e.target.value)} 
                            id="category" />    
                    </td>

                    <td><label for="datePurchased">date purchased</label>   
                        <input
                            type="date"
                            value={datePurchased}
                            onChange={e => setDatePurchased(e.target.value)} 
                            id="datePurchased" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addPiece}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddPiecePageTable;