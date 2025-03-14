// import React from "react";
import Header from "../../Header/Header";
import Hero from "../Hero/Hero";
import Trending from "../Trending/Trending";
import Section2 from "../Section2/Section2";
import Never from "../Never/Never";
import Footer from "../../Footer/Footer";
// import Player from "../Player/Player";
import Testimonials from "../Test/Testimonial";
// import Play from "../Player/play";
// import Slider from "./Components/sample";
// import CountdownTimer from "./Countdown";

const Home = () => {
  return ( <div>
    {/* <Slider/> */}
    {/* <Play/> */}
    {/* <Player/> */}
    <Header/>
    {/* <CountdownTimer/> */}
    <Hero/>
    <Trending/>
    <Section2/>
    <Never/>
    <Testimonials/>
    <Footer/>
  </div> );
}
 
export default Home;