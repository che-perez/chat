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
      currentChannel: this.props.activeChannel
    }
    this.messageFeed = this.messageFeed.bind(this)
    this.selectChannel = this.selectChannel.bind(this)
    this.clear = this.clear.bind(this)
  }

  componentDidMount(){
    subscribeToMessage(this.state.currentChannel, (message) => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message])
      }))
    })
  }

  componentWillUnmount(){
    console.log("unmounting")
  }

  selectChannel(channel, state){
    this.clear()
    this.props.selectChannel(channel, false)
  }

  clear(){
    this.setState({
      messages: []
    })
  }

  messageFeed(){
    console.log("calling")
    this.clear()
    console.log("cleared", this.state.messages)
    subscribeToMessage(this.props.activeChannel, (message) => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message])
      }))
    })
    console.log("from feed", this.state.messages)
  }

  render(){
    return (
      <div className="row">
        <div className="channel-tray col">
          <Logo />
          <ChannelForm />
          <ChannelList
            selectChannel={this.selectChannel}
          />
        </div>
        <div className="col-10">
          <Chat
            messages={this.state.messages}
            activeChannel={this.props.activeChannel}
          />
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
