import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false, // added enableSubmit to the state and set it to false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    const password = this.state.password;
    const enableSubmit = email !== '' && password !== ''; // enable the button when both fields are not empty
    this.setState({ email, enableSubmit });
  }

  handleChangePassword(event) {
    const email = this.state.email;
    const password = event.target.value;
    const enableSubmit = email !== '' && password !== ''; // enable the button when both fields are not empty
    this.setState({ password, enableSubmit });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

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
          {this.state.isLoggedIn ?
            <p>You are now logged in!</p>
            :
            <form onSubmit={this.handleLoginSubmit}>
              <p>Login to access the full dashboard</p>
              <label htmlFor="email" className={css(styles.label)}>Email:</label>
              <input type="email" id="email" name="email" value={email} className={css(styles.input)} onChange={this.handleChangeEmail} />
              <label htmlFor="password" className={css(styles.label)}>Password:</label>
              <input type="password" id="password" name="password" value={password} className={css(styles.input)} onChange={this.handleChangePassword} />
              <input type="submit" value="OK" className={css(styles.button)} disabled={!enableSubmit} /> {/* Use enableSubmit to disable the button */}
            </form>
          }
        </div>
      </body>
    );
  }
}
