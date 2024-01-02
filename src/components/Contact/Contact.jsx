import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import "./Contact.css";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";
import twitter from "./../../assets/twitter.png";
import facebook from "./../../assets/Facebook.png";

const Contact = () => {
  return (
    <div className="section-container">
      <Header
        heading="Get in Touch"
        details="Please feel free to drop me an email for any questions or inquiries you may have. I am more than happy to assist and provide meaningful answers to your queries."
      />

      <div className="contact-form-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/mvojzwaz"
          method="POST"
        >
          <input
            type="email"
            placeholder="Your Email ID"
            name="email"
            className="input-box email-input"
            autoComplete="off"
          />

          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box body-input"
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      <div className="social-icons-container">
        <a href="https://github.com/pranaybedekar" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a
          href="https://in.linkedin.com/in/pranay-bedekar-827968157"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
        <a
          href="https://www.instagram.com/pranay_bedekar/"
          className="social-icon"
        >
          <img src={instagram} alt="social" />
        </a>
        <a
          href="https://twitter.com/PranayBedekar?s=08"
          className="social-icon"
        >
          <img
            src={twitter}
            alt="social"
            style={{ width: "62px", height: "62px" }}
          />
        </a>
        <a
          href="https://www.facebook.com/pranay.bedekar.58"
          className="social-icon"
        >
          <img
            src={facebook}
            alt="social"
            style={{ width: "62px", height: "62px" }}
          />
        </a>
      </div>

      <FooterLink phrase="Read more " toAdress="/about" link="About Me" />

      <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
      </div>
    </div>
  );
};

export default Contact;
