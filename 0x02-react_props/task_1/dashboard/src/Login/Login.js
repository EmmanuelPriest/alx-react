import React from 'react';
import './Login.css';

export function Login() {
  return (
    <body>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
    </body>
  );
}
