import "./Header.css"
import Logo from "../assets/logo.svg"
const Header = () => {
    return ( <div className="header">
        <div className="navLeft">
            <img src={Logo} alt="" />
            <p>Listen <span>UP</span></p>
        </div>
    
        <div className="navCenter">
            <a href="">Home</a>
            <a href="">Category</a>
            <a href="">Trending</a>
            <a href="">Events</a>
            <a href="">Community</a>
        </div>

        <div className="navRight">
            <button id="signUp">Sign up</button>
            <button id="signIn">Sign in</button>
        </div>
       
    </div> );
}
 
export default Header;