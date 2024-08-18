import React from 'react'

import portfolio1 from '../../../src/assets/portfolio-1.png'
import portfolio2 from '../../../src/assets/portfolio-2.png'
import portfolio3 from '../../../src/assets/portfolio-3.png'
import portfolio4 from '../../../src/assets/portfolio-4.png'
import portfolio5 from '../../../src/assets/portfolio-5.png'
import portfolio6 from '../../../src/assets/portfolio-6.png'

import './works.css'

const Works = () => {
  return (
    <section id ='works'>
    <h2 className="worksTitle">My Projects</h2>
    <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
   <div className="worksImgs">
    <img src={portfolio1}alt="" className="worksImg" />
    <img src={portfolio2} alt="" className="worksImg" />
    <img src={portfolio3}alt="" className="worksImg" />
    <img src={portfolio4}alt="" className="worksImg" />
    <img src={portfolio5} alt="" className="worksImg" />
    <img src={portfolio6} alt="" className="worksImg" />
   </div>
   <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works