import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import leasy_main from "../assets/images/wabp/leasy_main_img.webp";
import checked_icon from "../assets/images/svg/about_check_icon.svg";
const Lease = () => {
  return (
    <>
      <section className="lease_bg mt_-2 position-relative pt-5 py-lg-5">
        <div className="pb-lg-5 mb-lg-5 position-relative mw_1920 mx-auto">
            <Container className="py-xl-5 my-xl-5 position-relative">
              <Row className="pb-lg-5 mb-lg-5 align-items-center justify-content-end" data-aos="fade-right">
                <Col lg={6}>
                  <div>
                    <img
                      src={leasy_main}
                      alt="awsome_building"
                      className="position_lg_absolute start-0 leasy_img"
                    />
                  </div>
                </Col>
                <Col lg={6} className="pb-5 mb-lg-5 pb-lg-0 mb-lg-0">
                  <h2 className="sections_heading mb-0 pt-4 pt-lg-0">Lease Observatory</h2>
                  <div className="d-flex align-items-center gap-4 pt-3 mt-2">
                    <div>
                      <img src={checked_icon} alt="checked" />
                    </div>
                    <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">
                      Fine-grained access control for your observatory.
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-4 pt-3 mt-2">
                    <div>
                      <img src={checked_icon} alt="checked" />
                    </div>
                    <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">
                      Search globally for observatories that fit your specific
                      needs and budget.
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-4 pt-3 mt-2">
                    <div>
                      <img src={checked_icon} alt="checked" />
                    </div>
                    <p className="ff_manraope fs_sm fw-normel rgb_offwhite mb-0">
                      Earn income by offering your observatory for lease using
                      flexible plans.
                    </p>
                  </div>
                </Col>
              </Row>
            <div className="position-absolute big_orange_circle end-0 bottom-100 d-none d-lg-block"></div>
            </Container>
            </div>
      </section>
    </>
  );
};

export default Lease;
