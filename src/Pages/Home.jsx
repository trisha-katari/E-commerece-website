// import React, { useEffect, useState } from 'react';
// import ProductCard from '../Components/ProductCard';
// import SearchBar from '../Components/SearchBar';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       setProducts(data);
//       setSearchResults(data);
//     };
//     fetchProducts();
//   }, []);

//   const handleSearch = (query) => {
//     const results = products.filter(product =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setSearchResults(results);
//     setSuggestions(results);
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} suggestions={suggestions} />
//       <div className="product-list">
//         {searchResults.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
 import ProductCard from '../Components/ProductCard';
 import SearchBar from '../Components/SearchBar';
 import Backgrd from '../Components/Backgrd';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setSearchResults(data);
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const results = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setSuggestions(results);
  };

  return (
    <div>
        <Backgrd/>
      <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      <div className="product-list">
        {searchResults.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
