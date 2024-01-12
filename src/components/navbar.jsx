import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  // function menuShow() {
  //   const menuMobile = document.querySelector('.mobile-menu');
  //       if(menuMobile.classList.contains('open')) {
  //           menuMobile.classList.remove('open');
  //       }
  //       else {
  //           menuMobile.classList.add('open')
  //       }
  // }

  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuShow = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
  <>
    <div className={`nav-menu ${isMenuOpen ? 'hide-desktop-menu' : ''}`}>
      <nav className='desktop-menu'>
        <Link to='/' className='nav-item-home'>Home</Link>
        <Link to='/about' className='nav-item'>About</Link>
        <Link to='/projects' className='nav-item'>Projects</Link>
        <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>

      <div className="mobile-menu-icon">
        <button onClick={menuShow} className="menu-icon"><img src="./brands/icons8-hamburger-menu-50.png" alt="icone"/></button>
      </div>
    </div>

    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} >
      <nav>
        <Link to='/' className='nav-item-home' onClick={menuShow}>Home</Link>
        <Link to='/about' className='nav-item' onClick={menuShow}>About</Link>
        <Link to='/projects' className='nav-item' onClick={menuShow}>Projects</Link>
        <Link to='/contact' className='nav-item' onClick={menuShow}>Contact</Link>
      </nav>
    </div>
 </>
  )
}

export default Navbar;