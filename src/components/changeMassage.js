import React, { Component } from "react";

class Massage extends Component{
   constructor(){
    super()
    this.state= {
        massage: "React world"
    }
   }
  changeMassage(){
    this.setState({
        massage:"welcom, I am react"
    })
  }
  

 render(){
    return (
        <div>
            <h1>{this.state.massage}</h1>
            <button onClick={() => this.changeMassage()}>Click Here</button>
        </div>
    )
 }
}

export default Massage