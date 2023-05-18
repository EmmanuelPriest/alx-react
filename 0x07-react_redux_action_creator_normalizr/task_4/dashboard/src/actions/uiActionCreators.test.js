import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

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
