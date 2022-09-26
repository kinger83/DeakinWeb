import React from "react";
import Tutorial from "./Tutorial";
import tutorialData from "./tutorialData";

const style = {
    display:"flex",
    justifyContent:"center",
}

const TutorialComponents = (tutorial, i) => {
    return(
            <Tutorial
                key = {i}
            avatar = {tutorial.avatar}
            name = {tutorial.name}
            desc = {tutorial.desc}
            stars = {tutorial.stars}
            author = {tutorial.author}/>
            
            
    )
}


const TutorialList = () => {
    return(
        <div style={style}>
            
            <br/>
            {tutorialData.map(TutorialComponents)}
        </div>
    )
}

export default TutorialList;