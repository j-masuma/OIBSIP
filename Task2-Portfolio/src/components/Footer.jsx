import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import icon1 from "../assets/img/nav-icon1.svg";
import icon2 from "../assets/img/nav-icon2.svg";
import icon3 from "../assets/img/nav-icon3.svg";
import Logo from "../assets/img/logo.svg";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img className="footer-icon" src={Logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-ceter text-sm-end pt-4">
            <div>
              <a href="/home">
                <img className="footer-icon" src={icon1} alt="icon1" />
              </a>
              <a href="/home">
                <img className="footer-icon" src={icon2} alt="icon1" />
              </a>
              <a href="/home">
                <img className="footer-icon" src={icon3} alt="icon1" />
              </a>
            </div>
            <p>Copyright 2023, All right are reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
