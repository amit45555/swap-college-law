import React from 'react'

const Header = () => {
  return (
    <header className="top-header">
      <div className="header-inner">
        <div className="logo-left">
          <img src="/assets/images/logo.svg" alt="College Logo" />
        </div>

        <div className="header-title">
          <h1>SWAPNIL COLLEGE OF LAW, KONDHA/KOSARA</h1>
          <div className="sub">Approved by Bar Council of India / RTM Kondha University</div>
        </div>

        <div className="logo-right">
          <img src="/assets/images/logo.svg" alt="Partner Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
