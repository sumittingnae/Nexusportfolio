import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import './home.scss'
import './service.scss'

import { Card, Button } from "react-bootstrap";
import datas from "../services/service.json";
import "./service.scss";
import clients from './client.json';
import Footer from '../../component/footer/footer';
import { Link } from "react-router-dom";



const Home = () => {
  //const[service,setService]=useState([]);
  const [client, setClient] = useState([]);
  useEffect(() => {
    setClient(clients);
  },[]);
  const [service, setService] = useState([]);

  useEffect(() => {
    setService(datas);
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Header />

      <div className="home">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-6 col-12">
                <div className="col-lg-6 w-100 ">
                  <div className="hero ">
                    <div className="left"></div>
                    <div className="right">
                      <div className="content mt-5">
                        <p>Welcome to Nexus</p>
                        <img src="./logo-w.png" alt="logo" width="100px" />
                      </div>
                      <Link to="/contact">
                        <button className="btn">Conatct Us</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-12 col-lg-6 w-100">
                <div className="title">
                  <h1>
                    {" "}
                    <span>Our</span> Services
                  </h1>
                </div>
                <div className="s-card">
                  {service.map((items) => (
                    <Card
                      key={items.id}
                      style={{ width: "18rem" }}
                      className="card"
                    >
                      <Card.Img variant="top" src={items.img} id="img" />
                      <Card.Body>
                        <Card.Title style={{ textDecoration:""}}>
                          {items.name}
                        </Card.Title>
                        <Card.Text id="text">{items.description}</Card.Text>
                        <Button className="btn">More</Button>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="ourclient">
      
        <div className="container">
          <div className="wrapper">
            <div className="row ">
              <div className="col-lg-6 w-100">
                <h1>
                  <span>Our</span> Client
                </h1>
                <div className="card-body">
                  <div className="container">
                    <ul className="cards">
                      {client.map((setClients) => (
                        <li className="card">
                          <div className="card-content">
                            <img
                              src={setClients.img}
                              width="200px"
                              alt={setClients.name}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
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
export default Home;


