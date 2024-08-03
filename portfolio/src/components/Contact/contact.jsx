import React, {useRef} from 'react'
import './contact.css'
import youtube from '../../../src/assets/youtube.png'
import twitter from '../../../src/assets/twitter.png'
import facebookicon from '../../../src/assets/facebook-icon.png'
import instagram from '../../../src/assets/instagram.png'

import adobe from '../../../src/assets/adobe.png'
import facebook from '../../../src/assets/facebook.png'
import microsoft from '../../../src/assets/microsoft.png'
import walmart from '../../../src/assets/walmart.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ou5kefg', 'template_rlbesgd', form.current, {
            publicKey: 'bta78XrVXuUjGpE2H',
          })
          .then(
            (result) => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <section id="contactPage">
        <div id="clients">
<h1 className="conatactPageTitle">My Clients</h1>
<p className="clientDesc">
    sdf xsdcfv dcfvg xcvgb vgbh sdf xsdcfv dcfvg xcvgb vgbh sdf xsdcfv dcfvg xcvgb vgbh
    fvgbh xcfvgbh crfvgbh sdf xsdcfv dcfvg xcvgb vgbh sdf xsdcfv dcfvg xcvgb vgbh
</p>
<div className="clientImgs">
    <img src={adobe}alt="" className="clientImg" />
    <img src={microsoft}alt="" className="clientImg" />
    <img src={walmart}alt="" className="clientImg" />
    <img src={facebook}alt="" className="clientImg" />
</div>
        </div>
        <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="conatctDesc">xdcfvg cfvgbh cvgbh cvgbh </span>
   <form  className="contactForm" ref={form} onSubmit={sendEmail}>
    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
    <input type="email" className="email" placeholder='Your Email'name='your_email' />
    <textarea name="message"  className="msg" rows="5" placeholder='Your Message'></textarea>
    <button type='submit' value='Send' className="submitBtn">Submit</button>
<div className="links">
    <img src={twitter} alt="" className="link" />
    <img src={youtube}alt="" className="link" />
    <img src={facebookicon} alt="" className="link" />
    <img src={instagram}alt="" className="link" />
</div>
   </form>
   
        </div>
    </section>
  )
}

export default Contact