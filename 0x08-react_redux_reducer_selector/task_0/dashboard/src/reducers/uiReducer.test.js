import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';
import uiReducer from './uiReducer';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should correctly update the isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
