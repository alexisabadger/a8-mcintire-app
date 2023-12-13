import React from 'react';


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


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
            <td><MdDeleteForever onClick={() => onDelete(piece._id)} /></td>
            <td><MdEdit onClick={() => onEdit(piece)} /></td>
        </tr>
    );
}

export default Piece;