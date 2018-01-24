import React from 'react'
import Moment from 'react-moment'

class Message extends React.Component {
  render(){
    console.log('msg', this.props)
    return (
      <div className="message">
        <Moment date={this.props.date} />
        <p>{this.props.name}: {this.props.message}</p>
      </div>
    )
  }
}

export default Message
