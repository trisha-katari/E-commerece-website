// import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const updatedItems = [...storedItems, product];

//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Store product in local storage
//     navigate('/cart'); // Redirect to the cart page
//   };

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button> {/* Updated button to call handleAddToCart */}
//     </div>
//   );
// };

// export default ProductCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedItems = [...storedItems, product];

    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Store product in local storage
    navigate('/cart'); // Redirect to the cart page
  };

  const handleBuyNow = () => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedItems = [...storedItems, product];

    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Store product in local storage
    navigate('/checkout'); // Redirect to the checkout page (you'll need to create this route)
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleBuyNow} style={{marginLeft:"5px"}}>Buy Now</button> {/* New Buy Now button */}
    </div>
  );
};

export default ProductCard;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`}>
//         <img src={product.image} alt={product.title} />
//         <h3>{product.title}</h3>
//         <p>${product.price}</p>
//       </Link>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleAddToCart = () => {
//     const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const updatedItems = [...storedItems, product];
    
//     localStorage.setItem('cart', JSON.stringify(updatedItems)); // Store in local storage
//     navigate('/cart'); // Redirect to the cart page
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="product-details">
//       <h2>{product.title}</h2>
//       <img src={product.image} alt={product.title} />
//       <p style={{ color: 'black' }}>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetails;
