import { useState } from "react";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/images/png/nav_logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import nav_icon from "../assets/images/svg/nav_search.svg";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <>
        <Nav>
          <div className="container-fluid px-md-5 px-3 d-flex justify-content-between align-items-center py-3 nav_bg">
            <div className="logo ff_snasm color_offwhite fw-normel fs_lg mb-0 ws_nowrap pe-2 z_index_100 c_pointer">
              Ek
              <img src={nav_logo} alt="logo" />
              slive
            </div>
            <div className="d-flex">
              <div className="nav_input d-xxl-flex justify-content-between c_pointer d-none d-xxl-inline-block w_398">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="color_white fs_sm w-100 pe-2 opecity_69"
                />
                <img src={nav_icon} alt="search_icon" />
              </div>
              <div className="d-none d-lg-block ps-5 d-xxl-none pt-1">
                <div className="nav_sm_search">
                  <img src={nav_icon} alt="search_icon" />
                </div>
              </div>
              <div className="d-lg-flex align-items-center d-none d-lg-block">
                <ul className="d-flex gap-xxl-4 gap-xl-3 mb-0 px-4 px-xl-5 gap-4">
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#feature">Features</a>
                  </li>
                  <li>
                    <a href="#plans">Pricing</a>
                  </li>
                  <li>
                    <a href="#support">Support</a>
                  </li>
                  <li>
                    <a href="#faqs">FAQs</a>
                  </li>
                </ul>
                <div>
                  <button className="nav_login_btn ff_railway fs_sm color_white fw-normel">
                    Login
                  </button>
                </div>
                <div className="ps-2">
                  <button className="btn_h ff_railway fs_sm color_white fw-normel">
                    SignUp
                  </button>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between flex-column d-lg-none menu_box z_index_100"
              onClick={showNav}
            >
              <h2 className="fs_xl position-relative text-white">
                {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
              </h2>
            </div>
            <div
              className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-lg-none ${
                show ? "" : "start-0"
              }`}
            >
              <div className="nav_input d-flex justify-content-between c_pointer ">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="color_white ff_railway f_style_itelic fw-normel fs_sm w-100 pe-2 opecity_69"
                />
                <img src={nav_icon} alt="search_icon" />
              </div>
              <ul className="d-flex gap-4 mb-0 flex-column ps-0 align-items-center z_index_100">
                <li>
                  <a href="#about"  onClick={showNav}>About</a>
                </li>
                <li>
                  <a href="#feature"  onClick={showNav}>Features</a>
                </li>
                <li>
                  <a href="#plans"  onClick={showNav}>Pricing</a>
                </li>
                <li>
                  <a href="#support"  onClick={showNav}>Support</a>
                </li>
                <li>
                  <a href="#faqs"  onClick={showNav}>FAQs</a>
                </li>
              </ul>
              <button className="nav_login_btn ff_railway fs_sm color_white fw-normel ">
                Login
              </button>
              <button className="nav_singup_btn border-0 bg_orange ff_railway fs_sm color_white fw-normel">
                SignUp
              </button>
            </div>
          </div>
        </Nav>
      </>
    </>
  );
};
// className="d-xl-flex align-items-center d-none d-xl-block"
export default MyNav;
