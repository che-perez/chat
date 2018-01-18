import React, { Component } from 'react'
import './reset.css'
import './App.css'

import Chat from './components/Chat'
import UserList from './components/UserList'
import ChannelList from './components/ChannelList';
import ChannelForm from './components/ChannelForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ChannelForm />
        <ChannelList />
        <UserList />
        <Chat />
      </div>
    )
  }
}

export default App
