import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const header =()=>{

    return (
      <div className="header">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <nav class="navbar d-flex ">
                    <div class="container-fluid container">
                      <Link class="navbar-brand nav-logo" to="/">
                        <img
                          src="./Logo.png"
                          alt="Logo"
                          width="200"
                          height="54"
                          class="d-inline-block align-text-top logo"
                        />
                      </Link>
                      <div className="menu">
                        <Link to="/" id="menu">
                          Home
                        </Link>
                        <Link to="/about" id="menu">
                          About
                        </Link>
                        <Link to="/service" id="menu">
                          Service
                        </Link>
                        <Link to="/contact" id="menu">
                          Contact us
                        </Link>
                      </div>
                      <button
                        class="btn bg-dark text-light button"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        Menu
                      </button>

                      <div
                        class="offcanvas offcanvas-end "
                        tabindex="-1"
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel"
                      >
                        <div class="offcanvas-header">
                          <h5 class="offcanvas-title" id="offcanvasRightLabel">
                            Offcanvas right
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="offcanvas-body">...</div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}
export default header;