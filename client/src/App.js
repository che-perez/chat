import React, { Component } from 'react'
import './reset.css'
import './App.css'

import Chat from './components/Chat'
import UserList from './components/UserList'
import ChannelList from './components/ChannelList';
import ChannelForm from './components/ChannelForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="channel-tray">
          <ChannelList />
          <ChannelForm />
        </div>
        <UserList />
        <Chat />
      </div>
    )
  }
}

export default App
