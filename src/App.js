import "./App.css";
import "@splidejs/react-splide/css/skyblue";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHero from "./components/MyHero";
import WhatEco from "./components/WhatEco";
import About from "./components/About";
import Feature from "./components/Feature";
import Suported from "./components/Suported";
import Intergration from "./components/Intergration";
import Comunity from "./components/Comunity";
import Plans from "./components/Plans";
import MyFooter from "./components/MyFooter";
import Lease from "./components/Lease";
import BackToTop from "./components/BackToTop";
import DemoVideo from "./components/DemoVideo";
import PreLoader from "./components/PreLoader";
import "aos/dist/aos.css"; 
import AOS from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration:3000,
    });
  }, []);
  return (
    <>
    <PreLoader/>
    <BackToTop/>
      <MyHero /> 
      <WhatEco />
      <About />
      <Feature />
      <Suported/>
      <Intergration/>
      <Lease/>
      <Comunity/>
      <Plans/>
      <DemoVideo/>
      <MyFooter/>
    </>
  );
}

export default App;
