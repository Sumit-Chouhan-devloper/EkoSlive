import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whai_s_img from "../assets/images/wabp/what_s_img.webp";
const WhatEco = () => {
  return (
    <>
      <section className="bg_black py-5 mt_-4 position-relative z-n1 overflow-x-hidden" id="what">
        <Container className="py-lg-5">
          <Row className="align-items-center justify-content-lg-between justify-content-center pt-lg-5 py-lg-5">
            <Col lg={5} xs={8} data-aos="fade-right">
              <div className="position-relative z_0">
                <img className="w-100 position-relative z-0 scale_animation" src={whai_s_img} alt="logo_img"/>
                <div className="orange_circle position-absolute what_circle_1 d-none d-sm-block"></div>
                <div className="orange_circle position-absolute what_circle_2 "></div>
                <div className="orange_circle position-absolute what_circle_3 d-none d-lg-block"></div>
              </div>
            </Col>
            <Col lg={5} data-aos="fade-left">
              <h2 className="sections_heading pt-5 pt-md-0 text-center text-lg-start mt-sm-4 mt-lg-0">What is EkosLive?</h2>
              <p className="fs_sm ff_manraope opcity_color fw-normal lh_180 text-center text-lg-start mb-0">
                EkosLive is an online cloud-based App to remotely control your
                observatory from anywhere and at any time. Store, search, share,
                and tag your images. Get notifications about the imaging
                progress, live-stack deep sky targets, and invite others to join
                your session. Engage with the astrophotography community and
                discover new targets and equipment. Use it on your phone,
                tablet, or computer.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhatEco;
