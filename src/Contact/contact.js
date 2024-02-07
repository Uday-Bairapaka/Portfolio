import React, { useRef, useState } from "react";
import './contact.css';
import LaneLineVideo from '../assets/harder_challenge_video_output.mp4';
import github from "../assets/Github_logo_PNG4.png";
import linkdin from "../assets/linkedin.png";
import emailjs from '@emailjs/browser';
import { Link } from "react-scroll";

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSending(true);

        try {
            await emailjs.sendForm('service_fk1zdml', 'template_ges8p25', form.current, 'BJOcFzd4x5W-Y-AqU');
            console.log('Email sent successfully');
            e.target.reset();
            alert('Email Sent !');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contactpage">
            <div className="Projects">
                <h1 className="contactpagetitle">My Projects</h1>
                <p className="ProjectDesc"></p>
            </div>
            <div className="ProjectImgs">
                <button className="workbtn"><a href="https://colab.research.google.com/github/UdayBairapaka/Hotel_Prediction/blob/main/Hotel_prediction_uday_bairapaka.ipynb#scrollTo=YSUiQINxA4mq">Hotel_Booking_Cancellation_Prediction</a></button>
                <button className="workbtn"><a href="https://colab.research.google.com/drive/1f4PpGuT1fZffMU7AYV5woO4NEyT-ullN#scrollTo=J0A9oCK9YFhx&uniqifier=2">Lane_Line_Detection</a></button>
                <video className="ProjectImg" controls>
                    <source src={LaneLineVideo} type="video/mp4" />
                </video>
                <button className="workbtn">Jobify</button>
            </div>
            <div id="contact">
                <h1 className="contactpagetitle">Contact Me</h1>
                <span className="contactDesc">please fill out the form below to discuss any work opportunities</span>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" required minLength={4}/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required />
                    <textarea className="msg" rows="5" placeholder="Your Message" name="message" required/>
                    <button type="submit" value="Send" className="submitBtn" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Submit'}
                    </button>
                    <div className="links">
                        <a href="https://github.com/Uday-Bairapaka"><img src={github} alt=""  className="link"/></a>
                        <a href="https://www.linkedin.com/in/uday0007/"><img src={linkdin} alt=""  className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
