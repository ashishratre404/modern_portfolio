import React from "react";
import emailjs from "emailjs-com";

import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qypjgsb",
        "template_k326g5s",
        e.target,
        "user_Desp2S58jPzEZ45XrjiMF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <main className="container">
        <section className="contact">
          <h1 className="section_heading">Get In Touch</h1>
          <div className="wrapper">
            <div className="left">
              <div>
                <div>
                  <PhoneInTalkIcon />
                </div>
                <div>
                  <h4>Call Me On:</h4>
                  <span>+91 6265252041</span>
                </div>
              </div>
              <div>
                <div>
                  <EmailIcon />
                </div>
                <div>
                  <h4>Mail Me:</h4>
                  <span>ratre589@gmail.com</span>
                </div>
              </div>
              <div>
                <div>
                  <PersonPinCircleIcon />
                </div>
                <div>
                  <h4>Address:</h4>
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="right">
              <form onSubmit={sendEmail}>
                <div className="form_group">
                  <div>
                    <label for="">Name</label>
                    <input type="text" placeholder="name.." name="name" />
                  </div>
                  <div>
                    <label for="">Email</label>
                    <input type="email" placeholder="email.." name="email" />
                  </div>
                </div>
                <div className="form_group textarea">
                  <div>
                    <label for="">Message</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="message..."
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
