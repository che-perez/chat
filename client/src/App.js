import React, { Component } from 'react'
import './reset.css'
import './normalize.css'
import './App.css'

import { subscribeToChannels } from './api'

import Chat from './components/Chat'
import Home from './components/Home'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      activeChannel: null,
      activeChannelLoaded: false,
      channels: [],
      username: "Anonymous"
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.fetchChannels = this.fetchChannels.bind(this)
    this.selectChannel = this.selectChannel.bind(this)
  }

  componentDidMount(){
    this.fetchChannels()
  }

  changeUsername(name){
    this.setState({
      username: name || "Anonymous"
    })
  }

  fetchChannels(){
    subscribeToChannels((channel) => {
      this.setState(prevState => ({
        channels: prevState.channels.concat([channel]),
      }))
    })
  }

  selectChannel(channel){
    this.setState({
      activeChannel: channel,
      activeChannelLoaded: true
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.activeChannelLoaded ? (
          <Chat
            activeChannel={this.state.activeChannel}
            channels={this.state.channels}
            selectChannel={this.selectChannel}
            username={this.state.username}
          />
        ) : (
          <Home
            channels={this.state.channels}
            changeUsername={this.changeUsername}
            selectChannel={this.selectChannel}
          />
        )}
      </div>
    )
  }
}

export default App
