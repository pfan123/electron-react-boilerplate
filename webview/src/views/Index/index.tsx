import React from 'react';
import logo from '../../logo.svg';
import './index.css';

const Index: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/pfan123/electron-react-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn electron-react-boilerplate
        </a>
      </header>
    </div>
  )
}

export default Index
