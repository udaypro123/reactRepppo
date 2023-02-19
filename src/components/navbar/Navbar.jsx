import React from 'react'
import Header from '../header/Header';

import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbardiv'>
      <Header />
      <div className='navbarInsidediv'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI3k3GEVnCEXd54ISam3Ix7uwWZtIj1nHg&usqp=CAU" alt="" />

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
