import React from 'react'

import ChannelTray from './ChannelTray'
import ChatBox from './ChatBox'

class Chat extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      chatLoaded: false,
      prevChannel: null
    }
    this.isReady = this.isReady.bind(this)
  }

  componentDidMount(){
    this.setState({
      chatLoaded: true,
      prevChannel: this.props.activeChannel
    })
  }

  componentDidUpdate(){
    if (this.state.prevChannel === this.props.activeChannel){
      return
    } else {
      this.setState({
        chatLoaded: false,
        prevChannel: this.props.activeChannel
      })
    }
  }

  isReady(){
    if (this.state.chatLoaded){
      return (
        <ChatBox
          activeChannel={this.props.activeChannel}
          username={this.props.username}
        />
      )
    } else {
      this.setState({
        chatLoaded: true
      })
    }
  }

  render(){
    return (
      <div className="chat">
        <p>Chat</p>
        <ChannelTray
          channels={this.props.channels}
          selectChannel={this.props.selectChannel}
        />
        {this.isReady()}
      </div>
    )
  }
}

export default Chat
