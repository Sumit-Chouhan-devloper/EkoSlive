import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import populer from "../assets/images/svg/popular_img.svg";
import top_rated from "../assets/images/svg/top_rated.svg";
import staff from "../assets/images/svg/staff_picks.svg";
import target from "../assets/images/svg/target.svg";
import nearby from "../assets/images/svg/nearby.svg";
import comunity_img from "../assets/images/wabp/community_img.webp";

const Comunity = () => {
  return (
    <>
      <section className="bg_black py-5 mt_-2 overflow-x-hidden">
        <div className="mw_1920 position-relative py-xl-5 pb-3 mx-auto">
          <Container data-aos="fade-left">
            <h2 className="sections_heading mb-0 text-center text-xl-start">
              Community features
            </h2>
            <p className="mb-5 ff_manraope fs_sm lh_150 fw-normal color_white pt-3 mt-1 text-xl-start text-center">
              Join thousands of amateur and expert astrophotographers worldwide.
            </p>
            <Row className="justify-contant-start flex-column-reverse flex-xl-row">
              <Col xl={6}>
                <div className="d-flex align-items-center pt-3 pt-xl-0">
                  <div>
                    <img
                      src={populer}
                      alt="populerty"
                      className="w-100 scale_animation"
                    />
                  </div>
                  <div className="ps-lg-4 ms-3">
                    <h4 className="ff_railway fw-semibold color_orange fs_md mb-0">
                      Popular
                    </h4>
                    <p className="ff_manraope fs_sm color_white fw-normal mb-0">
                      Discover most popular images per region, target, mount,
                      and sensor size.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-sm-5 pt-3">
                  <div>
                    <img
                      src={top_rated}
                      alt="rating"
                      className="w-100 scale_animation"
                    />
                  </div>
                  <div className="ps-lg-4 ms-3">
                    <h4 className="ff_railway fw-semibold color_orange fs_md mb-0">
                      Top Rated
                    </h4>
                    <p className="ff_manraope fs_sm color_white fw-normal mb-0">
                      Find trending top rated images voted by the community.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-sm-5 pt-3">
                  <div>
                    <img src={staff} alt="staff_member" className="w-100 scale_animation"/>
                  </div>
                  <div className="ps-lg-4 ms-3">
                    <h4 className="ff_railway fw-semibold color_orange fs_md mb-0">
                      Staff Picks
                    </h4>
                    <p className="ff_manraope fs_sm color_white fw-normal mb-0">
                      Unique and memorable photos selected by our
                      astrophotography staff.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-sm-5 pt-3">
                  <div>
                    <img src={target} alt="our_target" className="w-100 scale_animation"/>
                  </div>
                  <div className="ps-lg-4 ms-3">
                    <h4 className="ff_railway fw-semibold color_orange fs_md mb-0">
                      Targets
                    </h4>
                    <p className="ff_manraope fs_sm color_white fw-normal mb-0">
                      Unique and memorable photos selected by our
                      astrophotography staff.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-sm-5 pt-3">
                  <div>
                    <img src={nearby} alt="nearby" className="w-100 scale_animation"/>
                  </div>
                  <div className="ps-lg-4 ms-3">
                    <h4 className="ff_railway fw-semibold color_orange fs_md mb-0">
                      Nearby
                    </h4>
                    <p className="ff_manraope fs_sm color_white fw-normal mb-0">
                      Find who is imaging nearby. Engage with your local
                      community!
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <div className="position_xl_absolute end-0 comunity_img pt-sm-5 pt-xl-4 pt-xl-0">
                  <img
                    src={comunity_img}
                    alt="our_community"
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Comunity;
