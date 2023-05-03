import React from 'react';
import holberton-logo from '../assets/holberton-logo.jpg';
import './Header.css';

export function Header() {
  return (
    <header>
      <div className="App-header">
        <img src={holberton-logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
    </header>
  );
}
