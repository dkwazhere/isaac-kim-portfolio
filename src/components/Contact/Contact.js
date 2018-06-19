import React, { Component } from "react";
import "./Contact.css";
import contactpic from "../../images/_MG_2737.png";


class Contact extends Component {
    render() {
        return(
            <div className='aboutme'>
                <h1>
                    Isaac Kim
                </h1>
                <h3 className='header-three'>
                    Contact
                </h3>
                <div className='contact-pic'>
                    <img src={contactpic}></img>
                </div>
                <div className='aboutme-text'>
                    <h4>Let's get in touch.</h4>
                    <br />
                    <br />
                    I am always looking for inspirational projects for which I can help find solutions or create beautiful imagery. Feel free to send me a message with some information about the project and I will get back to you as soon as I can.
                    <br />
                    <br />
                    <h4>Email</h4>
                    ikims1027@gmail.com
                    <br />
                    <br />
                    <h4 className="contact-bottom">LinkedIn</h4>
                    www.linkedin.com/in/designerisaackim
                </div>
            </div>
        )
    }
}

export default Contact;
