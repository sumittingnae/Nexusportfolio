import React, { useState } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {

  

  



  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="footers">
                    <div className="col-4 p">
                      Get Conntect With us in social networks:
                    </div>
                    <div className="search">
                      <div className="Social-Network">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-2">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="footers">
                    <div className="row">
                      <div className="col colunm-1 ">
                        <div className="logo">
                          <img src="./logo-w.png" alt="" />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis posuere porta velit ac cursus. Phasellus
                            vestibulum mollis ipsum,et molestie augue gravida
                            quis. Aliquam erat volutpat. Nam interdum
                            consectetur massa a pellentesque.
                          </p>
                        </div>
                      </div>
                      <div className="col colunm-2">
                        <div className="links">
                          <h5>Important Links</h5>
                          <ul>
                            <li>
                              <Link to="/" id="menu">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link to="/about" id="menu">
                                About
                              </Link>
                            </li>
                            <li>
                              <Link to="/service" id="menu">
                                Service
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact" id="menu">
                                Contact Us
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col colunm-3">
                        <h5>Contact</h5>
                        <p>
                          <i className="fa-solid fa-home"></i> New York, NY
                          10012, US
                        </p>
                        <p>
                          <i className="fa-solid fa-envelope"></i>{" "}
                          info@example.com
                        </p>
                        <p>
                          <i className="fa-solid fa-phone"></i> info@example.com
                        </p>
                      </div>
                      <div className="col colunm-4">
                        <div className="search">
                          <h5>Register For me</h5>
                          <input type="text" placeholder="Email Address" />
                        </div>
                        <div className="btn btn-secondary">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-3">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="footers">
                    <div className="col-4 w-100">
                      All Copyrights @Nexus Software
                    </div>
                    <div className="text">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
