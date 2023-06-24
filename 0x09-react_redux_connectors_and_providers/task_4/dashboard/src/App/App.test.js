import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import App, { mapStateToProps } from './App';

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
    const wrapper = shallow(<App />);
    wrapper.instance().props.displayNotificationDrawer();
    expect(wrapper.find('Notifications').prop('displayDrawer')).toEqual(true);
    wrapper.instance().props.hideNotificationDrawer();
    expect(wrapper.find('Notifications').prop('displayDrawer')).toEqual(false);
  });

  it('verifies that the logOut function is called when the logout button is clicked', () => {
    const contextValues = {
      user: {
        email: 'testuser@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
      logIn: jest.fn(),
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.find('#logoutBtn').simulate('click');
    expect(contextValues.logOut).toHaveBeenCalled();
  });

  it('verifies that the state is updated correctly when the logout button is clicked', () => {
    const contextValues = {
      user: {
        email: 'testuser@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
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
    const contextValues = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
      logIn: jest.fn(),
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

  it('verifies that the state is updated correctly when the logOut function is called', () => {
    const contextValues = {
      user: {
        email: 'testuser@test.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
      logIn: jest.fn(),
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    wrapper.instance().logOut();
    expect(    wrapper.instance().logOut();
    expect(wrapper.instance().props.user.email).toEqual('');
    expect(wrapper.instance().props.user.password).toEqual('');
    expect(wrapper.instance().props.user.isLoggedIn).toEqual(false);
  });

  it('verifies that mapStateToProps returns the correct props', () => {
    const state = {
      ui: {
        notifications: [
          { id: 1, type: 'default', value: 'Notification 1' },
          { id: 2, type: 'urgent', value: 'Notification 2' },
        ],
        displayDrawer: true,
      },
      auth: {
        user: {
          email: 'testuser@test.com',
          password: 'password',
          isLoggedIn: true,
        },
      },
    };

    const expectedProps = {
      notifications: [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ],
      displayDrawer: true,
      user: {
        email: 'testuser@test.com',
        password: 'password',
        isLoggedIn: true,
      },
    };

    const props = mapStateToProps(state);
    expect(props).toEqual(expectedProps);
  });
});
