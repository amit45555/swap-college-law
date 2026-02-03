import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <ul className="nav-list">
          <li className="active">Home</li>
          <li>About Us ▾</li>
          <li>Academic Programme ▾</li>
          <li>Faculty ▾</li>
          <li>Students Corner ▾</li>
          <li>Infrastructure</li>
          <li>Placement</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-actions">
          <button className="btn-link">FRA-Fee Structure</button>
          <button className="btn-primary">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
