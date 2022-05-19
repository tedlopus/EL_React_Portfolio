import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navigation.css';

const styles = {
    navbar: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: '#9a74db',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
  };

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;