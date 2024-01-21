import React from "react";
import Header from "../../component/header/header";
import "./contact.scss";
import Footer from "../../component/footer/footer";

const contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="title">
                    <div className="img">
                      <img src="./contact.svg" alt="contact" />
                    </div>

                    <div className="heading">
                      <h4>Conatct US</h4>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="contented">
                    <div className="left-side">
                      <div className="title">
                        <h5>Contact Us Our Team</h5>
                        <p>Let’s explore how Nexus can work for you.</p>
                      </div>
                      <div className="c-content">
                        <ul>
                          <li>
                            <i className="fa-solid fa-check "></i> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Proin
                            quis dictum erat.
                          </li>
                          <li>
                            {" "}
                            <i className="fa-solid fa-check "></i> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Proin
                            quis dictum erat.{" "}
                          </li>
                          <li>
                            {" "}
                            <i className="fa-solid fa-check "></i> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Proin
                            quis dictum erat.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="right">
                            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default contact;
