import React from 'react'
import uidesign from '../../../src/assets/ui-design.png'
import appdesign from '../../../src/assets/app-design.png'
import websitedesign from '../../../src/assets/website-design.png'
import './skill.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle"> What I Do</span>
        <span className="skillDesc">jyhtgrfjnhbg ,mnhbtg uumjnhbtvrf ,kmjunyhbgvf mjjnhbgvfcd nnbrvfe nbgrvfecd mjnhbgvf nbgvfcd nbgvfnhbg nbgvf</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={uidesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>this is a demo text</p>
                </div>

            </div>

            <div className="skillBar">
                <img src={websitedesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>this is a demo text</p>
                </div>

            </div>

            <div className="skillBar">
                <img src={appdesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>this is a demo text</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills