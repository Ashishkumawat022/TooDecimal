import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cx from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <>
      <footer className={`${cx.footer}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={2}>
              <h5 className={`${cx.logo}`}>LOGO</h5>
            </Col>
            <Col lg={8} >
              <div className={`${cx.pages}`}>
                <ul>
                  <li>
                    <NavLink to="#">Home Page </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">About US </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Book Audit</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Contact Us </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Our Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Blogs </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2}>
              <div className={`${cx.socialLink}`}>
                <ul>
                  <li>
                    <NavLink to="#">
                      <SiInstagram />
                    </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">
                      <RiFacebookCircleLine />
                    </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">
                      <RxTwitterLogo />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className={`${cx.copyRight}`}>
            <p>Copyright@2023</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
