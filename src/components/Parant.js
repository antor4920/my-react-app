import React, { Component } from "react";
import Child from "./Child";

class Parant extends Component{

constructor(){
    super()
    this.state={
        ParantMassage:"I am parant"
    }
    this.ClickFunction=this.ClickFunction.bind(this)
}

ClickFunction(){
alert(`${this.state.ParantMassage} Clicked by Child`)
}

    render(){
        return(
            <div>
               <Child ClickEvent={this.ClickFunction}/>
            </div>
        )
    }
}

export default Parant