import React from "react";

const style = {
    mariginLeft:"15px",
    marginRight:"15px"
}

const Tutorial = (props) => {
    return (
        <div style={style}>
            <img src={props.avatar} alt="Atricle Image" />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <p> {props.stars} </p>
            <h4> {props.author}</h4>
        </div>
    )
}

export default Tutorial;