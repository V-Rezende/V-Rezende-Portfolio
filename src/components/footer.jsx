import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-section'>
            <div className='logo'>
                <h1>
                    {'<\\/r>'}
                </h1>
            </div>
            <div className='navigate'>
                <h4>NAVIGATE</h4>
                <ul>
                    <li><Link to='/V-Rezende-Portfolio/' className='nav-item-home'>Home</Link></li>
                    <li> <Link to='/V-Rezende-Portfolio/about' className='nav-item'>About</Link></li>
                    <li><Link to='/V-Rezende-Portfolio/projects' className='nav-item'>Projects</Link></li>
                </ul>
            </div>
            <div className='connect'>
                <h4>CONNECT</h4>
                <ul>
                    <li><a href="https://www.linkedin.com/in/vinni-rezende-00b815b1/" target='blank'>  Linkedin </a></li>
                    <li><a href="https://github.com/V-Rezende" target='blank'> GitHub </a></li>
                </ul>
            </div>
            <div className='contact'>
                <h4>CONTACT</h4>
                <p>vinnirezende@gmail.com</p>
            </div>
        </div>
        <div className='footer-foot'>
            <p>&copy; 2024 V-Rezende. All Rights Reserved / ROOTED IN BRISBANE, AUSTRALIA - COLLABORATING WORLDWIDE</p>
        </div>
    </footer>
  )
}

export default Footer
