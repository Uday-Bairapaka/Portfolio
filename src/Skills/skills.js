import React from "react";
import './skills.css';
import UIDesign from '../assets/ui-design.png';
import WebDesign from '../assets/website-design.png';
import AppDesign from '../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a Skilled and passionate web designer with experience in creating visually appearing and user-frienldy website Ihave a strong understanding of design and a keeneye for detail. I am proficient in HTML, CSS, and Javascript, as well as React and backend </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UIDesign</h2>
                        <p>bairapaka</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WebDesign</h2>
                        <p>uday</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AppDesign</h2>
                        <p>uday</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;