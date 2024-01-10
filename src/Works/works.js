import React from "react";
import './works.css';
import Portfolio1 from '../assets/portfolio-1.png';
import Portfolio2 from '../assets/portfolio-2.png';
import Portfolio3 from '../assets/portfolio-3.png';
import Portfolio4 from '../assets/portfolio-4.png';
import Portfolio5 from '../assets/portfolio-5.png';
import Portfolio6 from '../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id="works"> 
            <h2 className="workstitle">Personal Details</h2>
            <span className="worksDesc"><strong>Name :</strong> Uday Bairapaka <br />
            <strong>Father’s Name :</strong> Ramesh Bairapaka<br />
            <strong>Languages :</strong> English, Telugu and Hindi<br />
            <strong>Mobile No :</strong> 6301726717<br />
            <strong>Address :</strong> H.No:3-5-24/23/97/3 Bakshiguda, HB Colony, Moula Ali,
Hyderabad-40</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg"/>
                <img src={Portfolio2} alt="" className="worksImg"/>
                <img src={Portfolio3} alt="" className="worksImg"/>
                <img src={Portfolio4} alt="" className="worksImg"/>
                <img src={Portfolio5} alt="" className="worksImg"/>
                <img src={Portfolio6} alt="" className="worksImg"/>
            </div>
            <button className="workbtn"><a href="https://drive.google.com/file/d/1_4EtreZrHgQpXJ0hBvcITYr8hzlx3xLw/view?usp=sharing">CV Link</a></button>
        </section>
    )
}

export default Works;