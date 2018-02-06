import React from 'react'
import Moment from 'react-moment'

class Message extends React.Component {
  render(){
    let date = null
    let dateNow = Date.now()

    if((dateNow - this.props.date) >= (604800000*2)){
      date = (
        <Moment format="MMM Do YYYY" date={this.props.date} />
      )
    } else {
      date = (
        <Moment fromNow date={this.props.date} />
      )
    }

    return (
      <div className="message-bubble">
      <p className="date">{date}</p>
      <div className="message">

        <p>{this.props.name}: <span className="chat-message">{this.props.message}</span></p>
      </div>
      </div>
    )
  }
}

export default Message
