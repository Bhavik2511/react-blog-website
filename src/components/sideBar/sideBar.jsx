import React from "react";
import "./sideBar.css";

function SideBar(){
    return(
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src="/images/sidebar1.jpg" alt="image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Itaque beatae magnam blanditiis accusamus dignissimos 
                     et tempora, fuga quaerat voluptates ratione.
                     </p>
                </div>
                <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life </li>
                    <li className="sideBarListItem">Style </li>
                    <li className="sideBarListItem">Music</li> 
                    <li className="sideBarListItem">Sports </li>
                    <li className="sideBarListItem">Cinema </li>
                    <li className="sideBarListItem">Technology </li>
                 </ul>
                   </div>
                   <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                <i  className="sideBarIcon fab fa-facebook-square"></i>
            <i className="sideBarIcon fab fa-instagram"></i>
            <i   className="sideBarIcon fab fa-twitter-square"></i>
            <i   className="sideBarIcon fab fa-pinterest-square"></i>
                    </div>
                </div>
        </div>
    )
}
export default SideBar;