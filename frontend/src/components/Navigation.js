import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome } from "react-icons/hi2";
import { TbHanger } from "react-icons/tb";
import { VscBook } from "react-icons/vsc";

// IMPORT a bunch of icons...

// Menu: allows user to navigate between pages within the application

function Menu() {
  return (
    <nav className="global">

        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <NavLink to="/"><i><HiHome /></i>Home</NavLink>
        <NavLink to="/closet"><i><TbHanger /></i>Closet</NavLink>
        <NavLink to="/topics"><i><VscBook /></i>Topics</NavLink>
        
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/contact">Contact</NavLink>

    </nav>
  );
}

export default Menu;












// code basement, for old-time's sake...

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// // allows user to navigate between pages within the application

// function Menu() {
//   return (
//     <nav className="App-nav">
//         {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
//         <NavLink to="/">Piece List</NavLink>
//     </nav>
//   );
// }

// export default Menu;
