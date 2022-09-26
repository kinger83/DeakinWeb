import React from "react";
import Pic from "./pic.jpg";

const HeadImage = (prop) => {
    return (
        <div>
            <img src={Pic} style={{width:"70%", height:"auto"}}/>
        </div>
    )
}

export default HeadImage