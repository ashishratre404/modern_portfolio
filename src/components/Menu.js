import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <main className="menu">
        <section className="menu_container">
          <div className="left">
            <div>
              <h1 data-testid='logotest'>Ashish Ratre</h1>
            </div>
          </div>
          <div className="right">
            <ul className="pages_links">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <li>{"{ ( ) => Home }"}</li>
              </Link>

              <li className="active">Portfolio</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default Menu;
