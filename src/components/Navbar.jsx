import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="burger" />
        </button>

        <ul className={`nav-list ${open ? 'show' : ''}`} onClick={() => setOpen(false)}>
          <li className="active">Home</li>
          <li>About Us ▾</li>
          <li>Academic Programme ▾</li>
          <li>Faculty ▾</li>
          <li>Students Corner ▾</li>
          <li>Infrastructure</li>
          <li>Placement</li>
          <li>Contact Us</li>
          {/* mobile actions shown inside menu */}
         
        </ul>

       
      </div>
    </nav>
  )
}

export default Navbar
