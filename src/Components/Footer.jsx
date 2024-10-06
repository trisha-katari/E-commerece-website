// import React from 'react';

// const Footer = () => {
//   return (
//     <footer>
//       <p>© 2024 E-Commerce Site</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
// import './Footer.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>ShoppingMall</h2>
        <p>&copy; {new Date().getFullYear()} ShoppingMall. All rights reserved.</p>
        <div className="footer-links">
          <h3>Quick Links</h3>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="" rel="">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
            </li>
            <li>
              <a href=""rel="">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="" rel="">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

