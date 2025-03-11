import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trending.css"
// import Slider from "react-slick";
import Slider from "react-slick";
import Trend1 from "../../assets/trend1.png"
import Trend2 from "../../assets/trend2.png"
const Trending = () => {
    const settings = {
        dots: false, 
        speed: 4000, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 4000,  
        centerMode: true,
    }
    return ( <div className="trending">
                 <Slider {...settings}>
                    <img src={Trend1} alt="" />
                    <img src={Trend2} alt="" />
                    <img src={Trend1} alt="" />
                    <img src={Trend2} alt="" />
                    <img src={Trend1} alt="" />
                    <img src={Trend2} alt="" />
                    <img src={Trend1} alt="" />
                    <img src={Trend2} alt="" />
                 </Slider>
    </div> );
}
 
export default Trending;