import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about_img from "../assets/images/wabp/about_img.webp";
import checked_icon from "../assets/images/svg/about_check_icon.svg"
const About = () => {
  return (
    <>
      <section className="bg_black py-5 mt_-2 overflow-x-hidden" id="about">
        <Container className="py-lg-5">
          <Row className="justify-content-between flex-column-reverse flex-lg-row">
            <Col lg={5} data-aos="fade-right">
                <h2 className="sections_heading pt-xl-5 mt-xxl-4 mb-0 pb-3">About EkosLive</h2>
                <div className="d-flex align-items-center gap-4 pb-1">
                 <div> <img src={checked_icon} alt="checked" /></div>
                  <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">Powered by Open Source technologies.</p>
                </div>
                <div className="d-flex align-items-center gap-4 pt-3 pb-1">
                 <div> <img src={checked_icon} alt="checked"/></div>
                  <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">Transforms your astrophotography capture platform to the cloud.</p>
                </div>
                <div className="d-flex align-items-center gap-4 pt-3 pb-1">
                 <div> <img src={checked_icon} alt="checked" /></div>
                  <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">Online community where you can explore, share, and collaborate your passion in Astronomy.</p>
                </div>
                <div className="d-flex align-items-center gap-4 pt-3">
                 <div> <img src={checked_icon} alt="checked"/></div>
                  <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">Access to global community-driven observatories. Host and broadcast virtual star parties.</p>
                </div> 
            </Col>
            <Col lg={6} data-aos="fade-left">
                <div><img src={about_img} alt="antina_mashin"  className="w-100"/></div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
