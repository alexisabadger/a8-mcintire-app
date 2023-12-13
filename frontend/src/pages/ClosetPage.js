import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// import components
import PieceTable from '../components/PieceTable';
// ICONS import { FaRunning } from 'react-icons/fa';


function ClosetPage({ setPiece }) {

    // use Navigate for redirection
    const redirect = useNavigate();

    // use state to bring in the data
    const [pieces, setPieces] = useState([]);

    // RETRIEVE the entire list of Pieces
    const loadPieces = async () => {
        const response = await fetch('/piece');
        const pieces = await response.json();
        setPieces(pieces);
    } 
    

    // UPDATE a single Piece
    const onEditPiece = async piece => {
        setPiece(piece);
        redirect("/update");
    }


    // DELETE a single piece  
    const onDeletePiece = async _id => {
        const response = await fetch(`/piece/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/piece');
            const pieces = await getResponse.json();
            setPieces(pieces);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the pieces
    useEffect(() => {
        loadPieces();
    }, []);

    // DISPLAY the pieces
    return (
        <>
            <h2>List of Pieces</h2>
            <p>Paragraph about this page.</p>
            <Link to="/create">Add Piece</Link>
            <PieceTable 
                pieces={pieces} 
                onEdit={onEditPiece} 
                onDelete={onDeletePiece} 
            />
        </>
    );
}

export default ClosetPage;