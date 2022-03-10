import { React } from "react";
import "./Topbar.css";
import {Link} from "react-router-dom";

function TopBar(){
    const user = true;
    return(
        <div className="top">
            <div className="topLeft">
            <i  className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i   className="topIcon fab fa-twitter-square"></i>
            <i   className="topIcon fab fa-pinterest-square"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem"><Link className="link" to="/settings">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
                </div>
            <div className="topRight">
                {
                    user ? (<img className="topImage" src="/images/bhavik.jpg" alt="bhavik" />) : ( <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                            
                            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li></ul>  )}
                   
                
            
                <input type="text" className="search-box" placeholder="search"/>
                <i   className="topSearchIcon fa-solid fa-magnifying-glass"></i>
               
                </div>
        </div>
    );

}
export default TopBar;
