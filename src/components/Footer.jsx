import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="col">
            <h4>OTHER LINK</h4>
            <ul>
              <li>About Us</li>
              <li>Alumni</li>
              <li>Facilities</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col">
            <h4>IMPORTANT LINK</h4>
            <ul>
              <li>CET</li>
              <li>RTMNU</li>
            </ul>
          </div>

          <div className="col social-col">
            <h4>FOLLOW US</h4>
            <div className="socials">
              <a aria-label="facebook" className="social-btn">f</a>
              <a aria-label="twitter" className="social-btn">t</a>
              <a aria-label="google" className="social-btn">g+</a>
              <a aria-label="linkedin" className="social-btn">in</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Govindrao Wanjari College of Law, Nagpur</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
