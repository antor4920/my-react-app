import React, { Component } from "react";

class Form extends Component{

    constructor(){
        super()
        this.state={
            username:'',
            comments:''
        }
    }
 ChangetheInput= event =>{
    this.setState({
        username: event.target.value
    })
 }

 ChangetheComments= event =>{
    this.setState({
        comments: event.target.value
    })
 }

render(){
    return(
        <form>
            <div>
            <label>UserName</label>
            <input type="Text" value={this.state.username} onChange={this.ChangetheInput}></input>
            </div>
            <div>
                <label>Textarea</label>
                <textarea value={this.state.comments} onChange={this.ChangetheComments}> </textarea>
            </div>
            <div></div>
        </form>
    )
}

}

export default Form