import React from 'react'
import Moment from 'react-moment'

class Message extends React.Component {
  render(){
    console.log('msg', this.props)
let date = null;

if(this.props.date >= this.props.date + (604800*2)){
  date = (
    <Moment format="MMM Do YYYY" date={this.props.date} />
  )
} else {
  date = (
    <Moment fromNow date={this.props.date} />
  )
}

    return (
      <div className="message">
        {date}
        <p>{this.props.name}: <span className="chat-message">{this.props.message}</span></p>
      </div>
    )
  }
}

export default Message
