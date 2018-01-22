import React, { Component } from 'react'

import { subscribeToMessage } from '../api';

import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'
import Logo from './Logo'
import Chat from './Chat'
import MessageBox from './MessageBox'

class Chatting extends Component {

  constructor(props){
    super(props)
    this.state = {
      messages: [],
      messagesLoaded: false
    }
    this.messageFeed = this.messageFeed.bind(this)
  }

  messageFeed(){
    subscribeToMessage(this.props.activeChannel, (message) => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message])
      }))
    })
  }

  componentDidMount(){
    this.messageFeed()
    this.setState({
      messagesLoaded: true
    })
  }

  selectChannel(channel){
    this.props.selectChannel(channel)
  }

  render(){
    return (
      <div className="row">
        <div className="channel-tray col">
          <Logo />
          <ChannelForm />
          <ChannelList
            selectChannel={this.props.selectChannel}
          />
        </div>
        <div className="col-10">
          {this.state.messagesLoaded ? (
            <Chat
              messages={this.state.messages}
              activeChannel={this.props.activeChannel}
            />
          ) : (
            <p>Loading...</p>
          )}
          <MessageBox
            username={this.props.username}
            activeChannel={this.props.activeChannel}
          />
        </div>
      </div>
    )
  }
}

export default Chatting
