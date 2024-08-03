import React, { useState } from 'react';
import "./navbar.css"
// import logo from '../../../public/logo.png'
 import contact from '../../../src/assets/contact.png'
import {Link} from 'react-scroll';

const Navbar= () => {
const[showMenu, setShowMenu]= useState(false);

  return (
    <nav className='navbar'>
        <img src='' alt="" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-500} duration={500}  className='desktopMenuListItem'>Client</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
            <img src={contact} alt="" className='desktopMenuImg' />Contact Me
        </button>

        <img src='' alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} offset={-500} duration={500}  className='listItem'onClick={()=>setShowMenu(false)}>Client</Link>
            <Link activeClass='active' to='contacts' spy={true} offset={-500} duration={500}  className='listItem'onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar