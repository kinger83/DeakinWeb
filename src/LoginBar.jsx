import React from "react";
import './App.css';
import {Link, Outlet} from "react-router-dom";


const barStyle = {
    width:"50%",
    marginLeft:"15px",
    marginRight:"15px"
}

const butStyle = {
    marginRight: "10px",
}
const LoginBar = (props) => {
    return(
        <div>
        <div className="Bar">
        DEV@Deakin
        <input type='text' placeholder="Search..." style={barStyle}/>
        <button style={butStyle}>Post</button>
        <Link to="/login">Login</Link>
           
        </div>
            <div>
            <Outlet/>
            </div>
        </div>
        
        
        
    )
}

export default LoginBar;