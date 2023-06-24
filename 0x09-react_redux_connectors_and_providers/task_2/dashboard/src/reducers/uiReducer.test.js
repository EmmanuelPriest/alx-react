import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should correctly update the isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  // Add a new test to support the new action

  it('should correctly update the isNotificationDrawerVisible property when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: null,
    });
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should correctly update the isUserLoggedIn and user properties when LOGIN_SUCCESS action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const user = { email: 'test@test.com' };
    const action = { type: LOGIN_SUCCESS, user };
    const expectedState = initialState
      .set('isUserLoggedIn', true)
      .set('user', user);
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should correctly update the isUserLoggedIn and user properties when LOGIN_FAILURE action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'test@test.com' },
    });
    const action = { type: LOGIN_FAILURE };
    const expectedState = initialState
      .set('isUserLoggedIn', false)
      .set('user', null);
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should correctly update the isUserLoggedIn and user properties when LOGOUT action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'test@test.com' },
    });
    const action = { type: LOGOUT };
    const expectedState = initialState
      .set('isUserLoggedIn', false)
      .set('user', null);
    const state = uiReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});
