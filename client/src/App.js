import React, { Component } from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './reset.css'
import './App.css'

import Home from './components/Home';
import ChannelList from './components/ChannelList';
import ChannelForm from './components/ChannelForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannel: '',
    }
  }

  selectChannel = (channel) => {
    this.setState({
      selectedChannel: channel,
    });
  }


  render() {
    console.log(this.state.selectedChannel);
    return (
      <Router>
      <div className="App">
        <Home />
        <ChannelForm />
        <ChannelList selectedChannel={this.selectChannel}/>
      </div>
      </Router>
    )
  }
}

export default App
