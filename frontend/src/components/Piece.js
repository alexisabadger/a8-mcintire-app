import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Piece({ piece, onEdit, onDelete }) {
    return (
        <tr>
            <td>{piece.brand}</td>
            <td>{piece.color}</td>
            <td>{piece.category}</td>
            <td>{piece.quantity}</td>
            <td>{piece.datePurchased}</td>


            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(piece._id)} /></td>
            <td><MdEdit onClick={() => onEdit(piece)} /></td>
        </tr>
    );
}

export default Piece;