import React from "react";
import { Component } from "react";

class Counter extends Component{

   constructor(){
    super()
    this.state={
        Count:0
    }
   }

   ChangeNumber(){
    this.setState({
        Count:this.state.Count+5
    })
   }

    render(){
        return(
            <div>
                <h1>Count: {this.state.Count}</h1>
                <button onClick={()=>this.ChangeNumber()}>Increment</button>
            </div>
        )
    }
    
}

export default Counter