import React, {useRef} from 'react'
import './contact.css'
import github from '../../../src/assets/githubicon.png'
import linkedin from '../../../src/assets/linkedinicon.png'
import salesforce from '../../../src/assets/salesforce.png'
import instagram from '../../../src/assets/instagram.png'
import twitter from '../../../src/assets/twitter.png'
import googlecloud from '../../../src/assets/googlecloud.png'


// import adobe from '../../../src/assets/adobe.png'
// import facebook from '../../../src/assets/facebook.png'
// import microsoft from '../../../src/assets/microsoft.png'
// import walmart from '../../../src/assets/walmart.png'
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
          
{/* <h1 className="contactPageTitle">My Clients</h1>
<p className="clientDesc">
    I have Had the oppurtunity to work with a diverse group of companies.
    Some of the notable companies that I've had worked with includes
</p>
<div className="clientImgs">
    <img src={adobe}alt="" className="clientImg" />
    <img src={microsoft}alt="" className="clientImg" />
    <img src={walmart}alt="" className="clientImg" />
    <img src={facebook}alt="" className="clientImg" />
</div> */}
        </div>
        <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<span className="contactDesc">Feel free to fill the form below to Contact with me!! </span>
   <form  className="contactForm" ref={form} onSubmit={sendEmail}>
    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
    <input type="email" className="email" placeholder='Your Email'name='your_email' />
    <textarea name="message"  className="msg" rows="5" placeholder='Your Message'></textarea>
    <button type='submit' value='Send' className="submitBtn">Submit</button>
<div className="links">

    <a href="https://www.linkedin.com/in/aaronkurianabraham" target="_blank">
       <img src={linkedin} alt="LinkedIn" className="link" />
    </a>

    <a href="https://github.com/AaronKurian" target="_blank">
      <img src={github} alt="GitHub" className="link" />
    </a>

    <a href="https://twitter.com/aaronkurian13" target="_blank">
      <img src={twitter} alt="Twitter" className="link" />
    </a>

    <a href="https://www.cloudskillsboost.google/public_profiles/432ddb8e-41a4-41f1-a718-eb2160cc9843" target="_blank">
      <img src={googlecloud} alt="GCSB Profile" className="link" />
   </a>


    <a href="https://trailblazer.me/id/nyz7hwl0oahj49sre1" target="_blank">
      <img src={salesforce} alt="Salesforce" className="link" />
    </a>

    <a href="https://www.instagram.com/ax._ron_" target="_blank">
      <img src={instagram} alt="Instagram" className="link" />
    </a>

</div>
   </form>
   
        </div>
    </section>
  )
}

export default Contact