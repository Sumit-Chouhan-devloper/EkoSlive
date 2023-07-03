import React from "react";
import { Container } from "react-bootstrap";
import poster from "../assets/images/wabp/video_poster.webp";
import { useState } from "react";
import play_icon from "../assets/images/svg/play_icon.svg";
const DemoVideo = () => {
  const [tabs, setTabs] = useState("tab1");
  const changeTabs = (tabe) => {
    setTabs(tabe.target.id);
  };
  return (
    <>
      <section
        className="bg_black pb-5 pt-sm-5 pt-4 pt-xl-0 mt_-20 position-relative overflow-hidden"
        id="faqs"
      >
        <Container className="pb-xl-4 position-relative overflow-hidden pt-xl-5">
          <div id="tab1" onClick={changeTabs}>
            <video
              className="demo_video mx-auto w-100"
              controls="true"
              poster={poster}
            >
              <source
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={tabs === "tab1" ? "d-block" : "d-none"}>
              <div className="video_on_content position-absolute">
                <img src={play_icon} alt="play_icon" className="c_pointer"/>
                <h2 className="color_white ff_railway fw-medium  video_heading mb-0 ws_nowrap">
                  StellerMate app v2.1.0 Demo
                </h2>
              </div>
          </div>
        </Container>
        <div className="big_orange_circle position-absolute top-0 start-0 d-none d-lg-block"></div>
        <div className="big_orange_circle position-absolute end-0 bottom-0  d-none d-lg-block"></div>
      </section>
    </>
  );
};

export default DemoVideo;
