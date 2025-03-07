import React from 'react'
import './Footer.css'
import r from '../../assets/r.png'
const Footer = () => {
  return (
    <div className='footer-main-container'>
        <div className="footer">
        <img src={r} alt="Profile Picture"/>
        <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <p className="rights">© 2025 Your Name. All Rights Reserved.</p>
    </div>
      
    </div>
  )
}

export default Footer
