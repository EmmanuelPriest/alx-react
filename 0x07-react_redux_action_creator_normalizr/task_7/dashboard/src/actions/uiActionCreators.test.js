import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest
} from './uiActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions on successful API response', () => {
    fetchMock.getOnce('/login-success.json', { status: 200 });

    const expectedActions = [
      { type: 'LOGIN' },
      { type: 'LOGIN_SUCCESS' },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failed API response', () => {
    fetchMock.getOnce('/login-success.json', { status: 404 });

    const expectedActions = [
      { type: 'LOGIN' },
      { type: 'LOGIN_FAILURE' },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

test('login action creator returns the correct action', () => {
  const email = 'test@example.com';
  const password = 'password';
  const expectedAction = {
    type: LOGIN,
    user: { email, password },
  };
  const action = login(email, password);
  expect(action).toEqual(expectedAction);
});

test('logout action creator returns the correct action', () => {
  const expectedAction = { type: LOGOUT };
  const action = logout();
  expect(action).toEqual(expectedAction);
});

test('displayNotificationDrawer action creator returns the correct action', () => {
  const expectedAction = { type: DISPLAY_NOTIFICATION_DRAWER };
  const action = displayNotificationDrawer();
  expect(action).toEqual(expectedAction);
});

test('hideNotificationDrawer action creator returns the correct action', () => {
  const expectedAction = { type: HIDE_NOTIFICATION_DRAWER };
  const action = hideNotificationDrawer();
  expect(action).toEqual(expectedAction);
});
