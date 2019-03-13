import React, { Component } from 'react';
import shortid from "shortid";

import './App.css';

class App extends Component {

  state = {
    toggleState:true,

    QuestionDetails:[

      {id:1,question:"question 1", answer:"answer 1"},
      {id:2,question:"question 2", answer:"answer 2"},
      {id:3,question:"question 3", answer:"answer 3"},
      {id:4,question:"question 4", answer:"answer 4"},
      {id:5,question:"question 5", answer:"answer 5"},
      {id:6,answer:"answer 1"},

    ],

    loggedIn : true,

    color:true
    

  }
  

  onToggle = () =>{
    this.setState((prevState) => {
      return{
        toggleState:!prevState.toggleState
      }
    })
  } 

  onChangeText = () =>{
      this.setState((prevState) => {
      return{
        loggedIn:!prevState.loggedIn
      }
    })
  }

  onColorChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render(){
    let changeText = "";
    if(this.state.loggedIn){
      changeText="log in";
    }
    else{
      changeText="log out";
    }

    return (
      <div className="App">
        <h3>Toggle</h3>
        <span className="question" onClick={this.onToggle}>Click on Question and get the answer:</span>
        <div className="answer" style={{display:this.state.toggleState?"none":"block"}}>Answer goes here.....</div>
        <br/>
        <br/>
        <hr/>
        <hr/>

        <h3>Condition, if question is missing</h3>

        {this.state.QuestionDetails.map(item =>{
          return(
            <div key={item.id}>
              
                <div style={{display:item.question?"block":"none"}}>Question:: {item.question}</div>
                 <div style={{display:item.question?"block":"none"}}>Answer::{item.answer}</div>
            </div>
            
            )
        })}

        <br/>
        <br/>
        <hr/>
        <hr/>

        <h3>Condition, To change the text(There you can made the change in state to make it FALSE)</h3>
        <p>{changeText}</p>

        <br/>
        <br/>
        <hr/>
        <hr/>

        <h3>Condition, To click the button and change the text</h3>
        <button onClick={this.onChangeText}>{changeText}</button>

        <br/>
        <br/>
        <hr/>
        <hr/>

        <select name = "color" value={this.state.color} onChange = {this.onColorChange}>
        <option value="">------ please select -----</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="orange">orange</option>


        </select>



      </div>
    );
  }
}

export default App;
