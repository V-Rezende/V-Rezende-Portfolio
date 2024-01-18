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
        <div className='nav-icons'>
          <img className='icon-img' src="https://img.icons8.com/ios-filled/50/html-5--v1.png" alt="html"/>
          <img className='icon-img' src="https://img.icons8.com/ios-filled/50/css3.png" alt="css"/>
          <img className='icon-img' src="https://img.icons8.com/ios-filled/50/bootstrap.png" alt="bootstrap"/>
          <img className='icon-img' src="https://img.icons8.com/ios-filled/50/javascript.png" alt="js"/>
          <img className='icon-img' src="https://img.icons8.com/ios-filled/50/react-native.png" alt="react"/>
          <img className='icon-img' src="https://img.icons8.com/glyph-neue/64/github.png" alt="github"/>
        </div>
        <ul className='nav-list'>
          <li><Link to='/V-Rezende-Portfolio/' className='nav-item-home'>Home</Link></li>
          <li><Link to='/V-Rezende-Portfolio/about' className='nav-item'>About</Link></li>
          <li><Link to='/V-Rezende-Portfolio/projects' className='nav-item'>Projects</Link></li>
          <li><Link to='/V-Rezende-Portfolio/contact' className='nav-item'>Contact</Link></li>
        </ul>
      </nav>

      <div className="mobile-menu-icon">
        <button onClick={menuShow} className="menu-icon"><img src="./brands/icons8-hamburger-menu-50.png" alt="icone"/></button>
      </div>
    </div>

    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} >
      <nav>
        <Link to='/V-Rezende-Portfolio/' className='nav-item-home' onClick={menuShow}>Home</Link>
        <Link to='/V-Rezende-Portfolio/about' className='nav-item' onClick={menuShow}>About</Link>
        <Link to='/V-Rezende-Portfolio/projects' className='nav-item' onClick={menuShow}>Projects</Link>
        <Link to='/V-Rezende-Portfolio/contact' className='nav-item' onClick={menuShow}>Contact</Link>
      </nav>
    </div>
 </>
  )
}

export default Navbar;