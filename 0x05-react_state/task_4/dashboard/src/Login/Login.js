import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { AppContext } from './App/AppContext';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    const password = this.state.password;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ email, enableSubmit });
  }

  handleChangePassword(event) {
    const email = this.state.email;
    const password = event.target.value;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ password, enableSubmit });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { logIn } = this.context;
    const { email, password } = this.state;
    logIn(email, password);
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    const styles = StyleSheet.create({
      margin: {
        margin: '20px',
      },
      label: {
        display: 'block',
        marginBottom: '10px',
      },
      input: {
        width: '100%',
        padding: '5px',
        boxSizing: 'border-box',
        marginBottom: '10px',
      },
      button: {
        display: 'block',
        margin: '20px auto 0',
        padding: '10px 20px',
        '@media (max-width: 900px)': {
          width: '100%',
          position: 'absolute',
        },
      },
    });

    return (
      <body>
        <div className={css(styles.margin)}>
          <AppContext.Consumer>
            {({ isLoggedIn }) =>
              isLoggedIn ? (
                <p>You are now logged in!</p>
              ) : (
                <form onSubmit={this.handleLoginSubmit}>
                  <p>Login to access the full dashboard</p>
                  <label htmlFor="email" className={css(styles.label)}>
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className={css(styles.input)}
                    onChange={this.handleChangeEmail}
                  />
                  <label htmlFor="password" className={css(styles.label)}>
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    className={css(styles.input)}
                    onChange={this.handleChangePassword}
                  />
                  <input
                    type="submit"
                    value="OK"
                    className={css(styles.button)}
                    disabled={!enableSubmit}
                  />
                </form>
	      )
	    }
          </AppContext.Consumer>
        </div>
      </body>
    );
  }
}

Login.contextType = AppContext;

export default Login;
