import React from 'react'
import {Link} from 'react-scroll';
import './intro.css';
import pic from '../../../src/assets/pic.png'
import hireme from '../../../src/assets/hireme.png'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Smith</span> <br />Website Designer</span>
      <p className="introPara">Im\'m a skilled Web Designer with experience in creating <br />visually appealing and user friendly website</p> 
        </div>
        <Link><button className="btn"><img src={hireme} alt="Hire" className='btnImg' />Hire Me</button></Link><img src={pic} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro