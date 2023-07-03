import React from "react";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";

const MyHero = () => {
  return (
    <>
      <header className="hero_bg d-flex flex-column vh_xl_100 position-relative" id="hero">
        <MyNav/>
        <Container className="flex-grow-1 h-100 pt-5 pt-xl-0 mt-5 mt-xl-0">
          <Row className="justify-content-between align-items-end h-100 pt-5 pt-xl-0 mt-5 mt-xl-0">
            <Col lg={8} className="pt-5 mt-5 mt-xl-0 pt-xl-0 pb-lg-5">
              <div className="pt-sm-5 pb-3 mt-sm-5">
                <h1 className="color_white ff_railway fw-normel fs_3xl mb-0 text_capit pb-1 text-center text-lg-start mw_722 pt-md-5 mt-5 pt-lg-0 mt-lg-0">
                  Your ultimate <span className="color_orange">cloud<br/></span>
                  astrophotography platform
                </h1>
                <p className="opcity_color fs_sm ff_manraope mb-0  pt-2 text-center text-lg-start">
                  Capture, share, and explore the sky from anywhere and at any
                  time.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pb-5 d-flex justify-content-lg-end justify-content-center mb-lg-5">
                <button className="ff_manraope color_white fw-semibold fs-sm px-4 py_14 btn_h hero_btn">Discover</button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default MyHero;
