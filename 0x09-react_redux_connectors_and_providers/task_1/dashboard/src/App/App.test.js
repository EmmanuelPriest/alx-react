import React from 'react';
import App, { mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'

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
    expect(wrapper.instance().props.user.email).toEqual('');
    expect(wrapper.instance().props.user.password).toEqual('');
    expect(wrapper.instance().props.user.isLoggedIn).toEqual(false);
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
    const wrapper = shallow(
      <AppContext.Provider value={contextValues}>
        <App />
      </AppContext.Provider>
    );

    // add a new notification to the list
    wrapper.instance().props.listNotifications.push({
      id: 1,
      type: 'default',
      value: 'test notification',
    });

    // click the mark as read button for the new notification
    wrapper.instance().markNotificationAsRead(1);

    expect(contextValues.markNotificationAsRead).toHaveBeenCalledWith(1);
    expect(wrapper.instance().props.listNotifications).toEqual([]);
  });

  describe('mapStateToProps', () => {
    it('returns the right object when passing the state', () => {
      const state = {
        ui: {
          isLoggedIn: true,
        },
        isNotificationDrawerVisible: true,
        notifications: [],
      };

      const props = mapStateToProps(state);

      expect(props.isLoggedIn).toBe(true);
      expect(props.displayDrawer).toBe(true);
      expect(props.listNotifications).toEqual([]);
    });
  });
});
