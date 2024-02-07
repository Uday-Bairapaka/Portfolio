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
                        <p>UIDesign, short for User Interface Design, is the art of crafting visually captivating and intuitive interfaces for digital platforms, ranging from websites to mobile applications. A UI designer meticulously considers elements such as layout, color schemes, typography, and overall aesthetics to optimize the user experience. This role frequently involves close collaboration with UX designers and developers to ensure that the interface not only meets users' needs but also aligns with technical specifications and constraints.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WebDesign</h2>
                        <p>Web Design is a multifaceted discipline encompassing the creation and refinement of websites, covering aspects like layout design, graphic design, and content production. A web designer plays a pivotal role in crafting websites that not only appeal visually but also function seamlessly, effectively conveying the brand's message and engaging visitors. To achieve this, web designers leverage a variety of tools and technologies, including HTML, CSS, and JavaScript, to translate their creative vision into dynamic and interactive web experiences.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;