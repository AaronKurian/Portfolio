import React from 'react'
import './contact.css'



const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
<h1 className="conatactPageTitle">My Clients</h1>
<p className="clientDesc">
    sdf xsdcfv dcfvg xcvgb vgbh sdf xsdcfv dcfvg xcvgb vgbh sdf xsdcfv dcfvg xcvgb vgbh
    fvgbh xcfvgbh crfvgbh sdf xsdcfv dcfvg xcvgb vgbh sdf xsdcfv dcfvg xcvgb vgbh
</p>
<div className="clientImgs">
    <img src="" alt="" className="clientImg" />
    <img src="" alt="" className="clientImg" />
    <img src="" alt="" className="clientImg" />
    <img src="" alt="" className="clientImg" />
</div>
        </div>
        <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="conatctDesc">xdcfvg cfvgbh cvgbh cvgbh </span>
   <form  className="contactForm">
    <input type="text" className="name" placeholder='Your Name' />
    <input type="email" className="email" placeholder='Your Email' />
    <textarea name="message"  className="msg" rows="5" placeholder='Your Message'></textarea>
    <button type='submit' value='Send' className="submitBtn">Submit</button>
<div className="links">
    <img src="" alt="" className="link" />
    <img src="" alt="" className="link" />
    <img src="" alt="" className="link" />
    <img src="" alt="" className="link" />
</div>
   </form>
   
        </div>
    </section>
  )
}

export default Contact