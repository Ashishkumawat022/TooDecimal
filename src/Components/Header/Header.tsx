import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cx from "./Header.module.scss";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import { webMenu } from "../../assets/images";

function Header() {
  const [show, setShow] = useState(false);

  const menuShow = () => {
    setShow(!show);
  };

  return (
    <>
      <header className={`${cx.headersec}`}>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>

            <Navbar style={{ justifyContent: "end" }}>
              <Nav
                className="my-2 my-lg-10"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className={`${cx.headerWeb}`}>
                  <NavLink to="#">Contact</NavLink>
                  <NavLink to="#">Work</NavLink>

                  <NavLink to="#" onClick={menuShow}>
                    <img src={webMenu} />
                  </NavLink>
                </div>
                {show && (
                  <div className={`${cx.headerMob}`}>
                    <ul>
                      <li>
                        
                        <NavLink to="#">Serives</NavLink>
                      </li>
                      <li>
                        
                        <NavLink to="#">About Us</NavLink>
                      </li>
                      <li>
                        
                        <NavLink to="#">Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Book an free marketing aduit </NavLink>
                      </li>
                    </ul>
                    <div>
                      <AiFillCloseCircle
                        className={`${cx.closeIcon}`}
                        onClick={() => setShow(false)}
                      />
                    </div>
                  </div>
                )}
              </Nav>
            </Navbar>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
