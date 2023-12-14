// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:

import HomePage from './pages/HomePage';
import ClosetPage from './pages/ClosetPage';
import GalleryPage from './pages/GalleryPage';
import TopicsPage from './pages/TopicsPage';
import ContactPage from './pages/ContactPage';
import SubmitPage from './pages/SubmitPage';


// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddPiecePageForm from './pages/AddPiecePageForm';
import EditPiecePageForm from './pages/EditPiecePageForm';

// If your schema requires SHORT data input, then use the TABLE design.
// import EditPiecePageTable from './pages/EditPiecePageTable';
// import AddPiecePageTable from './pages/AddPiecePageTable';


// Define the function that renders the content in Routes, using State.
function App() {

  const [piece, setPieceToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

        <body>

          <header className='App-header' id="grid-child-header">

            <h1>
                <span>E. Alex </span>
                <a href="./index.html" >
                    <img id="headerImg" src="./android-chrome-192x192.png" className="App-logo" alt="logo" />
                </a>
                <span> McIntire</span>
            </h1>
          </header>

          <Navigation id="grid-child-global-nav" />

                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/closet" element={<ClosetPage setPiece={setPieceToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />

                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddPiecePageForm />} /> 
                    <Route path="/update" element={<EditPiecePageForm pieceToEdit={piece} />} />

                    <Route path="/submit" element={<SubmitPage />} />

                </Routes>


        </body>

          <footer>
            <p>© 2023 E. Alex McIntire</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;