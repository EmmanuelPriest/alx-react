import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export function Login() {
  const styles = StyleSheet.create({
    margin: {
      margin: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '10px'
    },
    input: {
      width: '100%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom: '10px'
    },
    button: {
      display: 'block',
      margin: '20px auto 0',
      padding: '10px 20px',
      '@media (max-width: 900px)': {
        width: '100%',
        position: 'absolute',
      },
    }
  });

  return (
    <body>
      <div className={css(styles.margin)}>
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="email" id="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
        <button className={css(styles.button)}>OK</button>
      </div>
    </body>
  );
}
