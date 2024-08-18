import React from 'react'
import uidesign from '../../../src/assets/ui-design.png'
import appdesign from '../../../src/assets/app-design.png'
import websitedesign from '../../../src/assets/website-design.png'
import './skill.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle"> What I Do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealling and user_friendly websites. I have a strong understanding of design and a keen eye for detail. i am proficient in HTML, CSS, and JavaScript, as well as design software such as Figma.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={uidesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I design user-centric interfaces that blend functionality with aesthetics, using research and prototyping to create intuitive and engaging experiences.</p>
                </div>

            </div>

            <div className="skillBar">
                <img src={websitedesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>I create visually compelling and responsive websites that prioritize user experience, combining creative design with technical precision to deliver engaging and functional online presences.</p>
                </div>

            </div>

            <div className="skillBar">
                <img src={appdesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I design intuitive and visually appealing mobile applications, focusing on seamless user interactions and engaging interfaces to enhance overall user experience.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills