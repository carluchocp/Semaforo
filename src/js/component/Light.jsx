import React from "react";

const Light = (props)=>{
    return(
        <div className={`light ${props.color} ${props.activeLight === props.color ? "active" : ""}`} onClick={()=> props.handleLight(props.color)}></div>
    );
}
export default Light