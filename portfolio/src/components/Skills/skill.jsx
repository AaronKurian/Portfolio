import React from 'react'
import './skill.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle"> What I Do</span>
        <span className="skillDesc">jyhtgrfjnhbg ,mnhbtg uumjnhbtvrf ,kmjunyhbgvf mjjnhbgvfcd nnbrvfe nbgrvfecd mjnhbgvf nbgvfcd nbgvfnhbg nbgvf</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>this is a demo text</p>
                </div>

            </div>

            <div className="skillBar">
                <img src="" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>this is a demo text</p>
                </div>

            </div>

            <div className="skillBar">
                <img src="" alt="" className="skillBarImg" />
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