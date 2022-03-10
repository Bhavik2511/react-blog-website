import React from "react";
import "./login.css";
import {Link} from "react-router-dom";

function Login(){
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email...." />
            <label>Password</label>
            <input className="loginInput" type="password"  />
            <label>Confirm password</label>
            <input className="loginInput" type="password"  />
            <button className="loginButton">Login</button>
            <div className="orRegister">
            <label className="oR">Or..</label>
            <button className="RegiterButton">
                <Link className="link" to="/register">Register</Link>
                </button></div>
            </form>
           
        </div>
    )
}
export default Login;