import React, { useRef, useState } from "react";
import './contact.css';
import Walmart from '../assets/walmart.png';
import Adobe from '../assets/adobe.png';
import Microsoft from '../assets/microsoft.png';
import Facebook from '../assets/facebook-icon.png';
import Instagram from '../assets/instagram.png';
import Youtube from '../assets/youtube.png';
import emailjs from '@emailjs/browser';

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
                <img src={Walmart} alt="Projects" className="ProjectImg" />
                <img src={Adobe} alt="Projects" className="ProjectImg" />
                <img src={Microsoft} alt="Projects" className="ProjectImg" />
                <img src={Microsoft} alt="Projects" className="ProjectImg" />
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
                        <img src={Facebook} alt=""  className="link"/>
                        <img src={Instagram} alt=""  className="link"/>
                        <img src={Youtube} alt=""  className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
