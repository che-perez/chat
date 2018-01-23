import React from 'react'

import { subscribeToMessage } from '../api'

import ChatForm from './ChatForm'
import ChatWindow from './ChatWindow'

class ChatBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
    this.fetchMessages = this.fetchMessages.bind(this)
  }

  componentDidMount(){
    this.fetchMessages()
  }

  fetchMessages(){
    subscribeToMessage(this.props.activeChannel, (message) => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message])
      }))
    })
  }

  render(){
    return (
      <div className="chat-box">
        <ChatWindow
          messages={this.state.messages}
        />
        <ChatForm
          activeChannel={this.props.activeChannel}
          username={this.props.username}
        />
      </div>
    )
  }
}

export default ChatBox
