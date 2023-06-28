import React from 'react';
import App, { mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from './AppContext';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logoutAction,
  clearUserDataAction,
} from '../actions/uiActionCreators';

describe('Test App.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('verifies that Notifications renders correctly with show/hide functionality', () => {
    const displayDrawerMock = jest.fn();
    const hideDrawerMock = jest.fn();
    const wrapper = shallow(
      <App
        displayDrawer={true}
        displayNotificationDrawer={displayDrawerMock}
        hideNotificationDrawer={hideDrawerMock}
      />
    );

    expect(wrapper.find('Notifications').prop('displayDrawer')).toEqual(true);
    wrapper.find('Notifications').prop('handleDisplayDrawer')();
    expect(displayDrawerMock).toHaveBeenCalled();
    wrapper.find('Notifications').prop('handleHideDrawer')();
    expect(hideDrawerMock).toHaveBeenCalled();
  });

  it('verifies that the logOut function is called when the logout button is clicked', () => {
    const logOutMock = jest.fn();
    const contextValues = {
      user: {
        email: 'testuser@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: logOutMock,
      logIn: jest.fn(),
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.find('#logoutBtn').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });

  it('verifies that the state is updated correctly when the logout button is clicked', () => {
    const logOutMock = jest.fn();
    const contextValues = {
      user: {
        email: 'testuser@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: logOutMock,
      logIn: jest.fn(),
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.find('#logoutBtn').simulate('click');
    expect(wrapper.instance().props.user.email).toEqual('');
    expect(wrapper.instance().props.user.password).toEqual('');
    expect(wrapper.instance().props.user.isLoggedIn).toEqual(false);
  });

  it('verifies that the state is updated correctly when the logIn function is called', () => {
    const logInMock = jest.fn();
    const contextValues = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
      logIn: logInMock,
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.instance().logIn('testuser@test.com', 'password');
    expect(wrapper.instance().props.user.email).toEqual('testuser@test.com');
    expect(wrapper.instance().props.user.password).toEqual('password');
    expect(wrapper.instance().props.user.isLoggedIn).toEqual(true);
  });

  it('verifies that the state is updated correctly when the displayNotificationDrawer function is called', () => {
    const displayDrawerMock = jest.fn();
    const contextValues = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
      logIn: jest.fn(),
      displayNotificationDrawer: displayDrawerMock,
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.instance().displayNotificationDrawer();
    expect(wrapper.instance().props.displayDrawer).toEqual(true);
    expect(displayDrawerMock).toHaveBeenCalled();
  });

  it('verifies that the state is updated correctly when the hideNotificationDrawer function is called', () => {
    const hideDrawerMock = jest.fn();
    const contextValues = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
      logIn: jest.fn(),
      hideNotificationDrawer: hideDrawerMock,
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.instance().hideNotificationDrawer();
    expect(wrapper.instance().props.displayDrawer).toEqual(false);
    expect(hideDrawerMock).toHaveBeenCalled();
  });

  it('verifies that mapStateToProps returns the correct props', () => {
    const state = {
      ui: {
        isLoggedIn: true,
        displayDrawer: true,
      },
      notifications: [],
    };

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
      listNotifications: [],
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
