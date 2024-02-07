import React from "react";
import './works.css';

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
            <button className="workbtn"><a href="https://drive.google.com/file/d/1_4EtreZrHgQpXJ0hBvcITYr8hzlx3xLw/view?usp=sharing">CV Link</a></button>
        </section>
    )
}

export default Works;