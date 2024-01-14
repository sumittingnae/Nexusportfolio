import React from "react";
import Header from "../../component/header/header";
import './home.scss'
import { Card,Button } from "react-bootstrap";

const Home = () => {
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
                    <div className="left">
                      <div className="image mt-5">
                        <img src="./Online.svg" alt="online" width="500px" />
                      </div>
                    </div>
                    <div className="right">
                      <div className="content mt-5">
                        <p>EMPOWERING TOMORROW,</p>
                        <img src="./Logo.png" alt="logo" width="300px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="services">
        <div className="container">
          <div className="wrapper">
            <div className="row col-6 col-12">
              <div className="col-lg-6 w-100">
                <div className="title">
                  <h1>Services</h1>
                </div>
                <div className="s-card">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="./Online.svg" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="services">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-12 col-lg-6 w-100">
                <div className="title">
                  <h1>Services</h1>
                </div>
                <div className="s-card">
                  {[...Array(6)].map((_, index) => (
                    <Card key={index} style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="./Online.svg" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
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
                <h1>Our Client</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
