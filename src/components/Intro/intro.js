import React from "react";
import bg from '../../assets/bg.png';
import './intro.css';
import { Link } from "react-scroll";
import Hireme from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName"> Uday</span> <br /> Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br />vuisually appearing and user friendly websites.</p>
                <Link to="contact"><button className="btn"><img src={Hireme} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>

            </div>
            <img src={bg} alt="" className="bg"></img>

        </section>
    )
}

export default Intro;