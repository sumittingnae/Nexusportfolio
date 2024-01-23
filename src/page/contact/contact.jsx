import React,{useState} from "react";
import Header from "../../component/header/header";
import "./contact.scss";
import Footer from "../../component/footer/footer";
import axios from 'axios';
import { toast } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({
    fullName:"",
    conatct:"",
    message:"",
    email:""
  });

  const handleSubmit=async(e)=>{
    try{
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/contacts",contact,{
        headers:{
          'Content-type':'application/json'
        },
      }
      );
      console.log(response.data);
      setContact({
        fullName: "",
        contact: "",
        message: "",
        email: "",
      });

    }catch(error){
      console.log("error",error);
      }
  }
  // setContact({
  //   fullName:"",
  //   contact:"",
  //   message:"",
  //   email:""
  // })

  if(!contact?.fullName){
    toast.error("Enter your Full Name")
    
  }
  
  if (!contact?.conatct) {
    toast.error("Enter your Conatct");
  }
  
  if (!contact?.email) {
    toast.error("Enter your Email");
  }
  
  if (!contact?.message) {
    toast.error("Enter your Message");
  }else{
    toast.success("sucessfully send")
  }
  

  const handlechange=(e)=>{
    setContact(
    (preForm)=>({
      ...preForm,[e.target.name]:e.target.value,
    })
  );
    console.log(contact);
  }

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
                            style={{background:'#ea2323'}}
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
      </div>

      <Footer />
    </>
  );
};
export default Contact;
