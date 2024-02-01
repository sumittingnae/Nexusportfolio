import React, { useState } from "react";
import Header from "../../component/header/header";
import "./contact.scss";
import Footer from "../../component/footer/footer";
import { toast } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({
    fullName: "",
    contact: "",
    message: "",
    email: "",
  });

  const handleSubmit = () => {
    if (
      !contact.fullName ||
      !contact.contact ||
      !contact.email ||
      !contact.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Save the form data in local storage
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const updatedContacts = [...storedContacts, contact];
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    toast.success("Successfully sent");
    setContact({
      fullName: "",
      contact: "",
      message: "",
      email: "",
    });
  };

  const handlechange = (e) => {
    setContact((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
    <Header/>
      <div className="contact">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="title">
                    <div className="heading">
                      <h4>
                        <span>Con</span>tact Us
                      </h4>
                    </div>
                  </div>
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
                      <div className="forms">
                        <div className="input-Forms">
                          <label>Full Name</label>
                          <br />
                          <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            value={contact.fullName}
                            onChange={handlechange}
                          />
                          <label>Contact</label>
                          <br />
                          <input
                            type="text"
                            placeholder="Conatct"
                            maxLength="10"
                            name="contact"
                            value={contact.contact}
                            onChange={handlechange}
                          />
                          <label>Email</label>
                          <br />
                          <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={contact.email}
                            onChange={handlechange}
                          />
                          <label>Message</label>
                          <br />
                          <textarea
                            type="text"
                            placeholder="Message"
                            name="message"
                            value={contact.message}
                            onChange={handlechange}
                          />

                          <button
                            className="btn text-light"
                            style={{ background: "#ea2323" }}
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer/>
    </>
  );
};

export default Contact;
