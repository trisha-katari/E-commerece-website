import React from 'react';

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <p>
        <a href="/" style={styles.link}>Go back to Home</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    color: '#666',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
  },
};

export default ErrorPage;
