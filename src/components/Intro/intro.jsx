import React from 'react'
import {Link} from 'react-scroll';
import './intro.css';
import pic2 from '../../../src/assets/pic2.png'
import resume from '../../../src/assets/resumeicon.png'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Aaron</span> <br />Website Designer</span>
      <p className="introPara">I'm a skilled Web Designer with experience in creating <br />visually appealing and user friendly website</p> 

      <a href="../../../Aaron-Resume.pdf" target="_blank" rel="noopener noreferrer">
    <button className="btn">
        <img src={resume} alt="Resume" className='btnImg' />
        Resume
    </button>
</a>
        </div>
      
        {/* <Link><button className="btn"><img src={hireme} alt="Hire" className='btnImg' />Resume</button></Link> */}
        <img src={pic2} alt="Profile" className='bg'/>
        
    </section>
  )
}

export default Intro