import React from 'react';
import "./navbar.css"
// import logo from '../../../public/logo.png'
import contactImg from '../../../public/contactImg.jpg'
import {Link} from 'react-scroll';

const Navbar= () => {
  return (
    <nav className='navbar'>
        {/* <img src={logo} alt="logo" /> */}
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Client</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-100} duration={500}  className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView(behavior: 'smooth')
        }}>
            {/* <img src={contactImg} alt="" className='desktopMenuImg' />Contact Me */}
        </button>
    </nav>
  )
}

export default Navbar