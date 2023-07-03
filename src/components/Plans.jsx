import React from "react";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import plan_checked from "../assets/images/svg/plans_checked.svg";
import close_icon from "../assets/images/svg/plans_close.svg";
const Plans = () => {
  return (
    <>
      <section className="plan_bg pb-5 py-xl-5 mt_-3" id="plans">
        <Container className="pb-xxl-5 mb-xxl-5 position-relative pb-3">
            <div className="mw_lg_1100 ms-auto py-5">
          <h2 className="sections_heading text-center pb-5 mb-0">
            Pricing Plans
          </h2>
          <Splide
            options={{
              arrows: false,
              pagination: true,
              autoScroll: {
                speed: 1,
                pauseOnHover: true,
              },
              perPage: 4,
              gap: "0rem",
              breakpoints: {
                1200: {
                  perPage: 3,
                  gap: "0rem",
                  type: "loop",
                  pauseOnHover: false,
                },
                992: {
                  perPage: 3,
                  gap: "0rem",
                },
                768: {
                  perPage: 3,
                  gap: "0rem",
                },
                500: {
                  perPage: 1,
                  gap: "0rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide data-aos="fade-up"
     data-aos-duration="3000">
              <div className="blur_bg h_100 h_xl_unset">
                <ul className="ps-0 ps-3 ">
                    <li className="pt-5">.</li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Online Access
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Cloud Storage
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Observatory Lease
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Spectators
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Push Notifications
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Broadcasting
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 mt-md-3 mt-2">
                    Access Control
                  </li>
                  <li className="ff_railway fw-normel fs_sm color_white pt-4 pb-5 mt-md-3 mt-2">
                    Price
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="fade-down"
     data-aos-duration="3000">
              <div className="plans_h">
                <ul className="ps-0 d-flex flex-column align-items-center">
                    <li className="mb-0 color_white ff_railway fw-semibold fs_md blur_bg w-100 text-center py-3 h_btn">EkosLive Basic</li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="checked_icon" />
                  </li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 mt-md-3 mt-2">500 MB</li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={close_icon} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={close_icon} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={close_icon} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={close_icon} alt="close_icon" />
                  </li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 mt-md-3 mt-2">Limited</li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 pb-3 mt-md-3 mt-2">Free</li>
                </ul>
               <div className="text-center pt-5"><button className="fs_sm ff_manraope color_white fw-semibold py_14 px-4 bg_orange opecity_69 border-0">Choose Plan</button></div>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="fade-up"
     data-aos-duration="3000">
              <div className="plans_h">
                <ul className="ps-0 d-flex flex-column align-items-center">
                    <li className="mb-0 color_white ff_railway fw-semibold fs_md blur_bg w-100 text-center py-3 h_btn">EkosLive Basic</li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="checked_icon" />
                  </li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 mt-md-3 mt-2">5 GB</li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={close_icon} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                  <img src={plan_checked} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2 color_white ff_manraope fs_md fw-medium">
                  Yes, Limited
                  </li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 mt-md-3 mt-2 ws_nowrap">Limited to 5 visitors</li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 pb-3 mt-md-3 mt-2">$4.99</li>
                </ul>
               <div className="text-center pt-5"><button className="fs_sm ff_manraope color_white fw-semibold py_14 px-4 bg_orange opecity_69 border-0">Choose Plan</button></div>
              </div>
            </SplideSlide>
            <SplideSlide data-aos="fade-down"
     data-aos-duration="3000">
              <div className="plans_h">
                <ul className="ps-0 d-flex flex-column align-items-center">
                    <li className="mb-0 color_white ff_railway fw-semibold fs_md blur_bg w-100 text-center py-3 h_btn">EkosLive Basic</li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="checked_icon" />
                  </li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 mt-md-3 mt-2">20 GB</li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2">
                    <img src={plan_checked} alt="close_icon" />
                  </li>
                  <li className="pt-4 mt-md-3 mt-2 color_white ff_manraope fs_md fw-medium">
                  Yes, Full
                  </li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 mt-md-3 mt-2">Unlimited</li>
                  <li className="color_white ff_manraope fs_md fw-medium pt-4 pb-3 mt-md-3 my-2">$9.99</li>
                </ul>
               <div className="text-center pt-4 mt-3"><button className="fs_sm ff_manraope color_white fw-semibold py_14 px-4 bg_orange opecity_69 border-0">Choose Plan</button></div>
              </div>
            </SplideSlide>
          </Splide>
          <div className="big_orange_circle plan_orange_circle position-absolute"></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Plans;
