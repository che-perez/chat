import React from 'react'

import { trueUnsubscribe, unsubscribe, subscribeToMessage } from '../api'

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

  componentWillMount(){
    this.fetchMessages()
  }

  fetchMessages(){
    let calls = 0
    unsubscribe()
    subscribeToMessage(this.props.activeChannel, (message) => {
      calls++
      this.setState(prevState => ({
        messages: prevState.messages.concat([message])
      }))
      console.log(calls)
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
