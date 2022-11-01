import React from "react";
import LatestWorks from "../Datas/LatestWorks";
import { Link } from "react-router-dom";
const LatestWork = () => {
  return (
    <>
      <main className="container">
        <section className="latest_work">
          <h1 className="section_heading">Portfolio</h1>
          <div className="wrapper">
            <div className="portfolio">
              <div className="tabs">
                <ul>
                  <li className="active">Latest Projects</li>
                  <li className="link">
                    <Link
                      to="/portfolio"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      All Projects
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="portfolio_wrapper">
                {LatestWorks.map((cur) => {
                  const { id, image, link } = cur;
                  return (
                    <div className="item" key={id}>
                      <a
                        href={link}
                        target={link !== "/" && "_blank"}
                        rel={link !== "/" && "noopener noreferrer"}
                      >
                        <img src={image} alt="images" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default LatestWork;
