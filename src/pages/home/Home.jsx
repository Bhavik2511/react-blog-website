import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
import SideBar from "../../components/sideBar/sideBar.jsx";

function Home(){
    return (
        <>
        <Header />
        <div className="home">
           <Posts />
           <SideBar /> 
           
        </div>
        </>
    )
}
export default Home;