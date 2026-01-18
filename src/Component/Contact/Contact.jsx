import React, { useRef } from "react";

import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "elhasnaouiwork@gmail.com",
    link: "mailto:test@gmail.com",
  },
  {
    id: 2,
    icon: <CiLinkedin />,
    title: "Linkedin",
    info: "Ismail Elhasnaoui",
    link: "https://www.linkedin.com/in/ismail-el-hasnaoui-7640103a5/",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+212699365494",
    link: "https://api.whatsapp.com/send?phone=212699365494&text=Hello%20Ismail%20%2C%20I%27d%20like%20to%20discuss%20a%20project.%0A%0A",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xmzjzw",
        "template_1o74g4h",
        form.current,
        "ttOfdl_orWu8-B-uL",
      )
      e.target.reset()
      
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {/* Options content goes here */}
          {ContactData.map((contact) => (
            <article key={contact.id} className="contact-option">
              {contact.icon}
              <h4>{contact.title}</h4>
              <h5>{contact.info}</h5>
              <a href={contact.link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} action="" onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea name="message" id=""></textarea>
          <button className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
