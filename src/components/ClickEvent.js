import React, { Component } from "react";

class ClickEvent extends Component{

    constructor(){
        super()
     
        this.state={
            massage2:0
            
        }
       
    }


 Increment10= () => {
    this.setState({
        massage2:this.state.massage2+10
    })
 }

    render(){
        return(
            <div>
              <h1>Count:{this.state.massage2}</h1>
              <button onClick={this.Increment10}> Increament By 5</button>
         
            </div>
        )
    }
       
}

export default ClickEvent