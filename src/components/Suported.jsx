import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import orange_circle from "../assets/images/svg/orange_circle.svg";
import suport_1circle_img from "../assets/images/svg/suported_1circle.svg";
import suport_2circle_img from "../assets/images/svg/suported_2circle.svg";
import suport_3circle_img from "../assets/images/svg/suported_3circle.svg";
import support_main_img from "../assets/images/svg/suported_main_img.svg";
const Suported = () => {
  return (
    <>
      <section className="bg_black mt_-3 py-5 overflow-x-hidden" id="support">
        <Container className="py-lg-5 py-3 my-lg-5">
          <Row className="align-items-center justify-content-center py-lg-5 my-lg-5">
            <Col lg={6} xs={11} data-aos="fade-right">
              <div className="d-lg-none position-relative">
                <img
                  src={support_main_img}
                  alt="circle_with_icons"
                  className="w-100 scale_animation"
                />
                 <div className="big_orange_circle position-absolute bottom-0 end-50"></div>
              </div>
              <div className="position-relative d-none d-lg-block">
                <div>
                  <img
                    src={orange_circle}
                    alt="orange_circle"
                    className="w-100"
                  />
                </div>
                <div className="position-absolute suport_1_circle_img rotate_animation">
                  <img
                    src={suport_1circle_img}
                    alt="logo_img"
                    className="w-100"
                  />
                </div>
                <div className="position-absolute suport_2_circle_img scale_animation">
                  <img
                    src={suport_2circle_img}
                    alt="logo_img"
                    className="w-100"
                  />
                </div>
                <div className="position-absolute suport_3_circle_img scale_animation">
                  <img
                    src={suport_3circle_img}
                    alt="pangvin"
                    className="w-100"
                  />
                </div>
                <div className="big_orange_circle position-absolute suport_orange_backdrop"></div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <h2 className="sections_heading mb-0 pt-4 mt-2 text-center text-lg-start">
                Supported Platforms
              </h2>
              <p className="ff_manraope color_white opecity_69 fs_sm fw-normel mb-0 pt-2 text-center text-lg-start">
                Out of the box support for StellarMate, Linux, and MacOS using
                KStars. 3rd party integrations planned for popular capture
                software.
              </p>
              <div className="pt-4 mt-3 text-center text-lg-start">
                <button className="ff_manraope fs_sm color_white fw-semibold py_14 px-4 btn_h">
                  Learn More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Suported;
