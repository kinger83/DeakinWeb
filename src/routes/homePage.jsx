import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header";
import HeadImage from "../HeadImage";
import ArticleList from "../ArticleList";
import Button from "react-bootstrap/Button";
import TutorialList from "../TutorialList";
import Footer from "../Footer";
import SignUpBand from "../SignUpBand";

const style = {
    width: 300,
    height:75
}

function HomePage() {
    return(
    <div className="App">
        <Header text="Dev @ Deakin Home Page."/>
        <br/>
        
        <br/>
        <HeadImage/>
        <br/>
        <h1>Featured Articles</h1>
        <ArticleList/>
        <Button style={style} text="See all articles">See all articles</Button> <br/> <br/>
        <h1>Featured Turorials</h1>
        <TutorialList/>
        <Button style={style} text="See all tutorials">See all tutorials</Button> <br/> <br/>
        <SignUpBand/> <br/>
        <Footer/>
    </div>
    )}

export default HomePage;