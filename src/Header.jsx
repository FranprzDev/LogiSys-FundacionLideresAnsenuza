import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-Primary-Darker sticky-top">
      <div className="container d-lg-flex justify-content-center ">
        <section className="d-flex justify-content-center align-items-center gap-3">
          <img
            src="/Logo.png"
            alt="Logo"
            width="70"
            height="70"
            class="d-inline-block align-text-top"
          ></img>
          <a className="navbar-brand text-Primary fs-2" href="#">
            LogiSys
          </a>
        </section>
        {/* <button
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
        <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-Primary-Lightest"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-Primary-Lightest" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-Primary-Lightest"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Etapas TFI
              </a>
              <ul className="dropdown-menu bg-Primary-Darker rounded">
                <li>
                  <a className="dropdown-item custom-dropdown text-Primary-Lightest" href="#">
                    Primera Etapa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown text-Primary-Lightest" href="#">
                    Segunda Etapa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown text-Primary-Lightest" href="#">
                    Tercera Etapa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown text-Primary-Lightest" href="#">
                    Cuarta Etapa
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
