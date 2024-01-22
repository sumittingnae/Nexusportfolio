import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import { Card, Button } from "react-bootstrap";
import datas from "./service.json";
import "./service.scss";
import Footer from "../../component/footer/footer";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    setService(datas);
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <Header />
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
                    <Card key={items.id} style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={items.img} id="img" />
                      <Card.Body>
                        <Card.Title>{items.name}</Card.Title>
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
      <Footer/>
      
    </>
  );
};

export default Services;
