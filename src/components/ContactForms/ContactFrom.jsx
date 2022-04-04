import React from "react";
import "./ContactForm.css";

function ContactFrom() {
  return (
    <div className="container">
      <div className="contact_form__form">
        <div className="contact_form__info">
          <h3 className="contact_form__title">Let's get in touch</h3>
          <p className="contact_form__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium ullam dolor quidem expedita explicabo repellendus,
            voluptatum vitae facere eaque, error animi beatae optio, quaerat
            nihil architecto. Rerum voluptas deleniti reprehenderit.
          </p>
          <div className="contact_form_address"></div>
          <div className="contact_form_social"></div>
        </div>
        <div className="contact_form__contact">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form action="index.html">
            <h3 className="contact_form__title">Contact us</h3>
            <div className="input_container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input_container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input_container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input_container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactFrom;
