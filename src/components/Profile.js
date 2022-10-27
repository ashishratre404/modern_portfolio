import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Profile = () => {
  return (
    <>
      <main className="container">
        <section className="profile">
          <div className="left">
            <div>
              <h1>Ashish Ratre</h1>
              <h4>Software Developer</h4>
            </div>
          </div>
          <div className="right">
            <ul className="contact">
              <li>
                {" "}
                <i className="uil uil-phone-volume"></i> <strong>Phone:</strong>{" "}
                +91 6265252041
              </li>
              <li>
                {" "}
                <i className="uil uil-envelope"></i> <strong>Email:</strong>{" "}
                ratre589@gmail.com
              </li>
            </ul>
            <ul className="socials">
              <li>
                <a
                  href="https://www.linkedin.com/in/ashish-ratre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="linkedicon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ashishratre404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default Profile;
