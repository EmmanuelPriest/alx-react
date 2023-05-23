import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from './AppContext';

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
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.find('Notifications').prop('displayDrawer')).toEqual(true);
    wrapper.instance().handleHideDrawer();
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
    expect(wrapper.state('user').email).toEqual('');
    expect(wrapper.state('user').password).toEqual('');
    expect(wrapper.state('user').isLoggedIn).toEqual(false);
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
    expect(wrapper.state('user').email).toEqual('testuser@test.com');
    expect(wrapper.state('user').password).toEqual('password');
    expect(wrapper.state('user').isLoggedIn).toEqual(true);
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
    expect(wrapper.state('user').email).toEqual('');
    expect(wrapper.state('user').password).toEqual('');
    expect(wrapper.state('user').isLoggedIn).toEqual(false);
  });

  it('verifies that markNotificationAsRead function works as intended', () => {
    const contextValues = {
      user: {
      email: 'testuser@test.com',
      password: 'password',
      isLoggedIn: true,
      },
      logOut: jest.fn(),
      logIn: jest.fn(),
      markNotificationAsRead: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    // add a new notification to the list
    wrapper.setState({
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'test notification',
	},
      ],
    });

    // click the mark as read button for the new notification
    wrapper.find('#markAsReadBtn-1').simulate('click');

    expect(contextValues.markNotificationAsRead).toHaveBeenCalledWith(1);
    expect(wrapper.state('notifications')).toEqual([]);
  });
});
