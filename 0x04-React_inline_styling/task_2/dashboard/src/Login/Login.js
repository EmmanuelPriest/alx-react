import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const styles = StyleSheet.create({
    margin: {
      margin: '20px'
    }
  });

  return (
    <body>
      <div className={css(styles.margin)}>
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

export default Login;
