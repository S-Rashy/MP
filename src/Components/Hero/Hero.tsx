import { useNavigate } from "react-router-dom";

import "./Hero.css";
import { SlEarphones } from "react-icons/sl";
import Yellow from "../../assets/yellow.png"
import HeroImg from "../../assets/hero.png"

const Hero: React.FC  = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
        <img src={Yellow} alt="" id="yellow" />
      <div className="heroTop">
        <div className="heroText">
          <h5>
            Listen to your favorite <span>music</span>
          </h5>
          <h5 id="anytime"> anytime, anywhere</h5>
        </div>
        <div className="heroP">
          <p>Listen to over 80 million songs.</p>
        </div>
      </div>
      <button id="start"  onClick={() => navigate("/coming-soon")}>Start Listening <SlEarphones /></button>

      <img src={HeroImg} alt="" id="heroImg" />
    </div>
  );
};

export default Hero;
