import React from 'react'
import Header from '../header/Header';

import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbardiv'>
      <Header />
      <div className='navbarInsidediv'>
      <img src="../image/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />

      <ul>
        <li>Home</li>
        <li> About</li>
        <li> Project</li>
        <li> Services</li>
        <li> Blog</li>
        <li> Contact</li>
      </ul>

      <button>Enquire Now</button>
      </div>
    </div>
  )
}

export default Navbar;
