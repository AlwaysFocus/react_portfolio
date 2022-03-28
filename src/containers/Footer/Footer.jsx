import React, { useState } from "react";

import { Images } from "../../constants";
import { AppWrap, MotionWrapper } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { contactName, contactEmail, contactMessage } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: contactName,
      email: contactEmail,
      message: contactMessage,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Grab a coffee & chat with me!</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={Images.email} alt="email" />
          <a href="mailto:eli.whalen@hotmail.com" className="p-text">
            eli.whalen@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={Images.mobile} alt="mobile" />
          <a href="#contact" className="p-text">
            Please reach out for a call
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              name="contactName"
              type="text"
              placeholder="Your Name"
              value={formData.contactName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              value={contactEmail}
              name="contactEmail"
              type="text"
              placeholder="Your Email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={contactMessage}
              name="contactMessage"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="header-text">Thank you for reaching out!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrapper(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
