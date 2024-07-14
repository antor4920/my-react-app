import React from "react";

function Child(props){
    return(
        <div>
            <button onClick={props.ClickEvent}>Click Here</button>
        </div>
    )
}

export default Child