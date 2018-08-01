import React, { Component } from 'react';
import logo from './logo.svg';
import { Calendar } from 'antd';
import './App.css';

class App extends Component {
  render () {
    function onPanelChange (value, mode) {
      console.log(value, mode);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4, margin: '20px auto' }}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
