import React from "react";
import logo from "../../img/logoRaven.png"

function Navbar() {
  return (
    <>
      <div className="nav bg-light header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {logo && (<a class="navbar-brand" href="#">
                <img
                  src={logo}
                  alt="raven"
                  width="40"
                  // height="24"
                />
              </a>)}
              <a className="navbar-brand name" href="#">
                Murat GÖKDUMAN
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Diğer Sayfalar
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://arslanng.github.io/notlarim/"
                        >
                          Notlarım
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://arslanng.github.io/toolbox/"
                        >
                          Alet Çantam
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
