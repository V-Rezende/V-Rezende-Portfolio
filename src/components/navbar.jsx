import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/' className='nav-item-home'>Home</Link>
        <Link to='/about' className='nav-item'>About</Link>
        <Link to='/projects' className='nav-item'>Projects</Link>
        <Link to='/contact' className='nav-item'>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar;