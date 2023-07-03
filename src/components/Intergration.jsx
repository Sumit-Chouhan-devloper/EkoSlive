import React from "react";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import inter_1img from "../assets/images/svg/inter_card1.svg";
import inter_2img from "../assets/images/svg/inter_card2.svg";
import inter_3img from "../assets/images/svg/inter_card3.svg";
import inter_4img from "../assets/images/svg/inter_card4.svg";
const Intergration = () => {
  return (
    <>
      <section className="bg_black py-5 mt_-3 overflow-x-hidden">
        <Container className="py-lg-5 my-lg-5 pb-4 mb-4">
          <h2 className="sections_heading text-center pb-sm-5 pb-3 mb-0">
            Integrations
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
              gap: "1.5rem",
              breakpoints: {
                1200: {
                  perPage: 3,
                  gap: "1.5rem",
                  type: "loop",
                  pauseOnHover: false,
                },
                992: {
                  perPage: 2,
                  gap: "1.5rem",
                },
                768: {
                  perPage: 2,
                  gap: "1.5rem",
                },
                480: {
                  perPage: 1,
                  gap: "1.5rem",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide
              className="pt-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="inter_card d-flex flex-column align-items-center pt-4 h-100">
                <div className="pb-1 pt-2">
                  <img src={inter_1img} alt="box_earth" />
                </div>
                <h3 className="pt-3 mt-2 pb-4 mb-3 ff_railway color_white_secoundry fw-semibold text_capit fs_xlg">
                  Astrobin
                </h3>
              </div>
            </SplideSlide>
            <SplideSlide
              className="pt-5"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <div className="inter_card d-flex flex-column align-items-center pt-4 h-100">
                <div className="pb-1 pt-2">
                  <img src={inter_2img} alt="box_earth" />
                </div>
                <h3 className="pt-3 mt-2 pb-4 mb-3 ff_railway color_white_secoundry fw-semibold text_capit fs_xlg">
                  Telescopius
                </h3>
              </div>
            </SplideSlide>
            <SplideSlide
              className="pt-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="inter_card d-flex flex-column align-items-center pt-4 h-100">
                <div className="pb-1 pt-2">
                  <img src={inter_3img} alt="box_earth" />
                </div>
                <h3 className="pt-3 mt-2 pb-4 mb-3 ff_railway color_white_secoundry fw-semibold text_capit fs_xlg">
                  Astrobin
                </h3>
              </div>
            </SplideSlide>
            <SplideSlide
              className="pt-5"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <div className="inter_card d-flex flex-column align-items-center pt-4 h-100">
                <div className="pb-1 pt-2">
                  <img src={inter_4img} alt="box_earth" />
                </div>
                <h3 className="pt-5 mt-2 pb-4 mb-3 ff_railway color_white_secoundry fw-semibold text_capit fs_xlg">
                  Astrometry.net
                </h3>
              </div>
            </SplideSlide>
          </Splide>
        </Container>
      </section>
    </>
  );
};

export default Intergration;
