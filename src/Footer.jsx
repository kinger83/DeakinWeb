import React from "react";
import {Link, Outlet} from "react-router-dom";

const style = {
        marginLeft:"10%",
        width:"80%",
        backgroundColor:"Grey",
        display:"flex",
        justifyContent:"space-between",
}

const colStyle = {
    width:"20%",
    
}

const Footer = () => {
    return(
        <div>
            <Outlet/>
        <div style={{backgroundColor:"Grey"}}>
            <div style={style}>
                <div style={colStyle}>
                    <h3>Explore</h3>
                    <br/>
                    <h4>Home</h4>
                    <h4>Questions</h4>
                    <h4>Atricles</h4>
                    <h4>Tutorials</h4>
                </div>

                <div style={colStyle}>
                <h3>Support</h3>
                    <br/>
                    <h4>FAQs</h4>
                    <h4>Help</h4>
                    <Link to="/about">Contact Us</Link>
                </div>

                <div style={colStyle}>
                <h3>Stay Conected</h3>
                    <br/>
                    <h4>Facebook</h4>
                    <h4>Instagram</h4>
                    <h4>Twitter</h4>
                    <h4>TikTok</h4>
                </div>
            </div>
            <div>
                <h3>DEV@Deakin 2022</h3>
            </div>
            <div style={{width:"70%", marginLeft:"15%"}}>
            <div style={style}>
                
                <div style={colStyle}>
                    <h4>Privacy Policy</h4>
                </div>

                <div style={colStyle}>
                <h4>Terms</h4>
                </div>

                <div style={colStyle}>
                <h4>Code of Conduct</h4>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;