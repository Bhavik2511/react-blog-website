import React from "react";
import "./Header.css"

function Header(){
    return(
<div className="header">
    <div className="header-titles">
        <span className="smalltitle">MERN Stack Developer</span>
        <span className="largeTitle">Blog</span>
        </div>
        <img className="headerImage" src="https://github.com/Bhavik2511/react-blog-website/blob/main/public/images/headerimg.jpg" alt="" />
    </div>
    )
}
export default Header;
