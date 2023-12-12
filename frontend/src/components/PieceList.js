import React from 'react';
import Piece from './Piece';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function PieceList({ pieces, onDelete, onEdit }) {
    return (
        <table id="pieces">
            <caption>Add and Edit Pieces</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Language</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {pieces.map((piece, i) => 
                    <Piece 
                        piece={piece} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default PieceList;
