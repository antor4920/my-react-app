import React, {Component} from "react";

class Welcome extends Component{
  
  constructor(){
    super()
    this.state={
       massage: 'Want to see my Original name? then clik the button below'
    }
  }

  ChangeName(){
    this.setState({
      massage:'Jahidul Hasan Antor'
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.massage}</h1>
        <button onClick={()=> this.ChangeName()}>Show the name</button>
      </div>
    ) 
  }
}

export default Welcome