import { useNavigate, Link } from "react-router-dom";

import React from 'react';

const HomePage = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    minHeight: '100vh',
  };

  const headingStyle = {
    fontSize: '2em',
    color: 'white',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    color: 'white',
    lineHeight: '1.6',
  };
  const storedUser = JSON.parse(localStorage.getItem('loggedIn'));

  return (
    <div style={containerStyle}>
              <span>
              {storedUser ? (
                    <div>
                        <p style={{ color: 'black' }}>Welcome to the Home Page !</p>
                        <Link style={{ color: 'black' }} to={'/login'}>
                        Logout
                        </Link>
                    </div>
                    ) : (
                    <Link style={{ color: 'black' }} to={'/login'}>
                        Sign In
                    </Link>
                    )}

            </span>
      <h1 style={headingStyle}>Welcome to Our Website</h1>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p style={paragraphStyle}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>


    </div>
  );
};

export default HomePage;
