// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <h1>E-Commerce</h1>
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <img 
//         src="https://media.istockphoto.com/id/1012478260/vector/colored-shopping-bags.jpg?b=1&s=170x170&k=20&c=B75BfI2sC-3BnUkW-U8MIO1QtC-Hb92FZ4oVnCZn-Yc=" 
//         alt="Shopping Bags Icon" 
//         style={styles.icon}
//       />
//       <h1 style={styles.title}>ShoppingMall</h1>
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//     </nav>
//   );
// };

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <img 
//         src="https://media.istockphoto.com/id/1012478260/vector/colored-shopping-bags.jpg?b=1&s=170x170&k=20&c=B75BfI2sC-3BnUkW-U8MIO1QtC-Hb92FZ4oVnCZn-Yc=" 
//         alt="Shopping Bags Icon" 
//         style={styles.icon}
//       />
//       <h1 style={styles.title}>ShoppingMall</h1>
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//       <Link to="/cart">Add Cart</Link> {/* Updated Link to point to the Cart page */}
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     backgroundColor: 'blue',
//   },
//   icon: {
//     width: '30px', // Adjust size as needed
//     height: '30px',
//     marginRight: '10px', // Space between icon and title
//   },
//   title: {
//     margin: '0', // Remove default margin
//     fontFamily: 'mon', // Use the imported font
//     fontSize: '24px', // Adjust font size as needed
//     fontWeight: '700', // Make it bold
//   },
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <img 
        src="https://media.istockphoto.com/id/1012478260/vector/colored-shopping-bags.jpg?b=1&s=170x170&k=20&c=B75BfI2sC-3BnUkW-U8MIO1QtC-Hb92FZ4oVnCZn-Yc=" 
        alt="Shopping Bags Icon" 
        style={styles.icon}
      />
      <h1 style={styles.title}>ShoppingMall</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/cart">Add Cart</Link> {/* Updated Link to point to the Cart page */}
      <Link to="/orders">Your Orders</Link> {/* New Link for Your Orders */}
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'blue',
  },
  icon: {
    width: '30px', // Adjust size as needed
    height: '30px',
    marginRight: '10px', // Space between icon and title
  },
  title: {
    margin: '0', // Remove default margin
    fontFamily: 'mon', // Use the imported font
    fontSize: '24px', // Adjust font size as needed
    fontWeight: '700', // Make it bold
  },
};

export default Navbar;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <img 
//         src="https://media.istockphoto.com/id/1012478260/vector/colored-shopping-bags.jpg?b=1&s=170x170&k=20&c=B75BfI2sC-3BnUkW-U8MIO1QtC-Hb92FZ4oVnCZn-Yc=" 
//         alt="Shopping Bags Icon" 
//         style={styles.icon}
//       />
//       <h1 style={styles.title}>ShoppingMall</h1>
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/register">Register</Link>
//       <Link >AddCart</Link>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//     backgroundColor:'blue',
//   },
//   icon: {
//     width: '30px', // Adjust size as needed
//     height: '30px',
//     marginRight: '10px', // Space between icon and title
//   },
//   title: {
//     margin: '0', // Remove default margin
//     fontFamily: 'mon', // Use the imported font
//     fontSize: '24px', // Adjust font size as needed
//     fontWeight: '700', // Make it bold
//     fontfamily: "'Courier New', Courier, monospac"
//   },
// };

// export default Navbar;


// const styles = {
//   nav: {
//     // display: 'flex',
//     // alignItems: 'center',
//     // padding: '10px',
//  backgroundcolor:"blue"
//   },
//   icon: {
//     width: '30px', // Adjust size as needed
//     height: '30px',
//     marginRight: '10px', // Space between icon and title
//   },
//   title: {
//     margin: '0', // Remove default margin
//   },
// };

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from './SearchBar';

// const Navbar = ({ onSearch, suggestions }) => {
//   return (
//     <nav>
//       <h1>E-Commerce</h1>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//       </div>
//       <SearchBar onSearch={onSearch} suggestions={suggestions} />
//     </nav>
//   );
// };

// export default Navbar;

