import React, { Component } from 'react'




class Message extends Component {
 constructor(props){
   super(props)
   this.state = {
     checking: false
   }
   this.getRandomColor = this.getRandomColor.bind(this);
 }
 getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
 }
render(){

  return (
    <div className="message" style={{backgroundColor: `${this.getRandomColor()}`}}>
    
      <div className="message-owner">
        <p>{this.props.owner}: </p>
        
      </div>
      <div className="message-content">
        <p>{this.props.content}</p>
      </div>
    </div>
  )
}
}


export default Message
