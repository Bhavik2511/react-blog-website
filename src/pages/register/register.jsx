import React from "react";
import "./register.css";
import {Link} from "react-router-dom";

function Register(){
    return(
        <div className="register">
             <span className="loginTitle">Register</span>
            <form className="loginForm">
            <label>Username</label>
            <input className="loginInput" type="text" placeholder="Enter your username...." />
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email...." />
            <label>Password</label>
            <input className="loginInput" type="password"  />
            <label>Confirm password</label>
            <input className="loginInput" type="password"  />
            <button className="loginButton">Register</button>
            <div className="orRegister">
            <label className="oR">Or..</label>
            <button className="RegiterButton"><Link className="link" to="/login">Login</Link></button></div>
            </form>
        </div>
    )
}
export default Register;