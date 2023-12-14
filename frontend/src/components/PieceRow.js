import React from 'react';


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { TbTrashX } from "react-icons/tb";
import { TbPencil } from "react-icons/tb";


function Piece({ piece, onEdit, onDelete }) {

    // ensure that the date is displayed in a readable format
    // in the case that the date format is coming in as a string,
    // convert it to a Date object and then format it.
    const date = new Date(piece.datePurchased).toLocaleDateString();

    return (
        <tr>
            <td>{piece.brand}</td>
            <td>{piece.color}</td>
            <td>{piece.category}</td>
            <td>{piece.quantity}</td>
            <td>{date}</td>


            {/* Update these icons to something that matches your style. */}
            <td><TbPencil onClick={() => onEdit(piece)} /></td>
            <td><TbTrashX onClick={() => onDelete(piece._id)} /></td>
        </tr>
    );
}

export default Piece;