// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import PiecesPage from './pages/PiecesPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddPiecePageForm from './pages/AddPiecePageForm';
import EditPiecePageForm from './pages/EditPiecePageForm';

// If your schema requires SHORT data input, then use the TABLE design.
import EditPiecePageTable from './pages/EditPiecePageTable';
import AddPiecePageTable from './pages/AddPiecePageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [piece, setPieceToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Portfolio</h1>
            <p>Describe this website.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<PiecesPage setPiece={setPieceToEdit}/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddPiecePageTable />} /> 
                    <Route path="/update" element={<EditPiecePageTable pieceToEdit={piece} />} />

                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddPiecePageForm />} />   
                     <Route path="/update" element={<EditPiecePageForm pieceToEdit={piece} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>Copyright statement</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;