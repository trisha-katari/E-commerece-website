// import React, { useEffect, useState } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Fetch cart items from local storage
//     const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedItems);
//   }, []);

//   const handleRemoveItem = (id) => {
//     const updatedItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedItems);
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); 
//   };

//   if (cartItems.length === 0) {
//     return <div>Your cart is empty.</div>;
//   }

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             <h3>{item.title}</h3>
//             <img src={item.image} alt={item.title} style={{ width: '100px' }} />
//             <p>Price: ${item.price}</p>
//             <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>
//         Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
//       </h3>
//     </div>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedItems);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Update local storage
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} style={{ width: '100px' }} />
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>
        Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
