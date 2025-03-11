import "./Never.css"
import LogoWhite from "../../assets/logoWhite.png"
import DownloadBtn from "../../Reuseables/Downloadbtn/DownloadBtn";
import Google from "../../assets/google.svg"
import Apple from "../../assets/apple.svg"

const Never = () => {
    return ( <div className="never">
        <div className="neverLogo">
            <img src={LogoWhite} alt="" />
            <p>Listen UP</p>
        </div>
        <div className="neverText">
            <h4>Never stop listening</h4>
            <p>Available on Web, Android and ios</p>
        </div>
        <div className="neverBtns">
            <DownloadBtn icon={Apple} textUp="GET IT ON" textDown="Google Play"/>
            <DownloadBtn icon={Google} textUp="Available on the" textDown="App Store"/>
        </div>

    </div> );
}
 
export default Never;