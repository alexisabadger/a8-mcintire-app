import React from 'react';
import { NavLink } from 'react-router-dom';
// IMPORT a bunch of icons...

// Menu: allows user to navigate between pages within the application

function Menu() {
  return (
    <nav className="App-nav">

        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <NavLink to="/">Home</NavLink>

        <NavLink to="/closet">Closet</NavLink>

        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
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
