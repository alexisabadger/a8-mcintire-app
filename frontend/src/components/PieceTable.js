import React from 'react';
import Piece from './PieceRow';
import TableHead from './TableHead';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function PieceTable({ pieces, onDelete, onEdit }) {
    return (
        <table id="productTable">
            <caption>List of pieces in the closet...</caption>
            <TableHead />
            <tbody>
                {pieces.map((piece, i) => 
                    // Piece(Row) is a component that displays a single piece
                    <Piece 
                        piece={piece} 
                        key={i}
                        onEdit={onEdit}
                        onDelete={onDelete} 
                    />)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}

export default PieceTable;
