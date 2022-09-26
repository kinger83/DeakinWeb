import React from "react";

const style = {
    borderRadius:"25px",
    fontSize: "20px",
    padding:"10,10,10,10",
    marginTop: "15px"
}

const Button = (props) => {
    return(
        <div>
            <button style={style}>{props.text}</button>
        </div>
    )
}

export default Button;