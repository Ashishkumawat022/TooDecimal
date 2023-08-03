import React from "react";
import cx from "./Home.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import {
  Pinterest,
  client,
  homeBanner,
  layer,
  nike,
  pintrest2,
  pwa,
  sass,
  starBuks,
  vue,
} from "../../assets/images";
import { NavLink } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = () => {
  const options = {
    loop: true,
    items: 1,
    dots: true,
    
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  };
  return (
    <>
      <section className={`${cx.homeBanner}`}>
        <div className={`${cx.bannerLeft}`}></div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className={`${cx.bannerHeading}`}>
                <h1>
                  We are
                  <span> Extensive.</span>
                </h1>
                <p>Helping you stand out in a crowded market</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.whoWeAre}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h3>WHO WE ARE</h3>
              </div>

              <div className={`${cx.compnanyDetail}`}>
                <h5>We are Extensive.</h5>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                <NavLink to="#">BOOK A FREE MARKETING AUDIT </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.layerSec}`}>
        <img src={layer} className={`${cx.layerImg}`} />
        <div className={`${cx.layerSecmobile}`}></div>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${cx.heading}`}>
                <h5>
                  WHAT <br /> WE DO.
                </h5>
                <p>
                  We do lots of stuffs , basically <br /> adding value to your
                  product .
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className={`${cx.toList}`}>
                <ul>
                  <li>Digital Marketing </li>
                  <li>Digital Marketing </li>
                  <li>Digital Marketing </li>
                  <li>Digital Marketing </li>
                  <li>
                    <NavLink to="#"> VIEW ALL</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.ourWork_sec}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h3>
                  OUR <br />
                  WORK.
                </h3>

                <NavLink to="#">VIEW ALL</NavLink>
              </div>
            </Col>
            <Col lg={6} className="mt-5">
              <div className={`${cx.productDetails}`}>
                <img src={starBuks} style={{ height: "700px" }} />
                <div className={`${cx.description}`}>
                  <span>DIGITAL MARKETING </span>

                  <h5> STARBUCKS </h5>
                  <p>Our ad campaign brought 80% footfall to the company </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mt-5">
              <div className={`${cx.productDetails}`}>
                <img src={nike} style={{ height: "470px" }} />
                <div className={`${cx.description}`}>
                  <span>DIGITAL MARKETING </span>

                  <h5> STARBUCKS </h5>
                  <p>Our ad campaign brought 80% footfall to the company </p>
                </div>
              </div>
            </Col>

            <Col lg={6} className="mt-5">
              <div className={`${cx.productDetails}`}>
                <img src={nike} style={{ height: "470px" }} />
                <div className={`${cx.description}`}>
                  <span>DIGITAL MARKETING </span>

                  <h5> STARBUCKS </h5>
                  <p>Our ad campaign brought 80% footfall to the company </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mt-5">
              <div className={`${cx.productDetails}`}>
                <img src={starBuks} style={{ height: "700px" }} />
                <div className={`${cx.description}`}>
                  <span>DIGITAL MARKETING </span>

                  <h5> STARBUCKS </h5>
                  <p>Our ad campaign brought 80% footfall to the company </p>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${cx.mobileBtn}`}>
                <NavLink to="#">VIEW ALL</NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.ourpartner_sec}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h3>
                  OUR <br />
                  Partners .
                </h3>

                <h5>Your success is our success.</h5>
              </div>
            </Col>
            <Col lg={12} className="p-0">
              <div className={`${cx.partnersList}`}>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={Pinterest} />
                  </div>
                  <h5>Pintrest</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={pintrest2} />
                  </div>
                  <h5>Pintrest</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={pwa} />
                  </div>
                  <h5>Pwa</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={sass} />
                  </div>
                  <h5>Saas</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={vue} />
                  </div>
                  <h5>Vue</h5>
                </div>

                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={Pinterest} />
                  </div>
                  <h5>Pintrest</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={pintrest2} />
                  </div>
                  <h5>Pintrest</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={pwa} />
                  </div>
                  <h5>Pwa</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={sass} />
                  </div>
                  <h5>Saas</h5>
                </div>
                <div className={`${cx.listDetails}`}>
                  <div className={`${cx.imgBox}`}>
                    <img src={vue} />
                  </div>
                  <h5>Vue</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.testimonials}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h3>Testimonials</h3>
              </div>
            </Col>

            <Col lg={12}>
              <OwlCarousel className="owl-theme" {...options}>
                <div className={`${cx.testimonialsBox} item`}>
                  <img src={client} className={`${cx.userImg}`} />
                  <div className={`${cx.clientDetails}`}>
                    <h5> “Working with Extensive is great”</h5>
                    <div className={`${cx.username}`}>
                      <h6>Hershel </h6>
                      <p>
                        Head of director <br /> GGPL PVT LTD.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${cx.testimonialsBox} item`}>
                  <img src={client} className={`${cx.userImg}`} />
                  <div className={`${cx.clientDetails}`}>
                    <h5> “Working with Extensive is great”</h5>
                    <div className={`${cx.username}`}>
                      <h6>Hershel </h6>
                      <p>
                        Head of director <br /> GGPL PVT LTD.
                      </p>
                    </div>
                  </div>
                </div>
              
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.driveResult}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h5>
                  Looking to drive <br /> results?
                  <NavLink to="#">Lets chat </NavLink>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
