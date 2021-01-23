// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component{
 constructor(){
  super();
  this.state = {
    timesClicked:0,
   };
 }

 adder = () => {
   this.setState( prev => ({timesClicked: prev.timesClicked + 1})  )
 }
  render(){
    return (
      <div>
        <button  onClick={this.adder}    >{this.state.timesClicked}</button>
      </div>
    )
  }
}
export default DigitalClicker;
