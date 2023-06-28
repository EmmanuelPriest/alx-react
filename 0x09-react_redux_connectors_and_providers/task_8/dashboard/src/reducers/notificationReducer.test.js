// notificationReducer.test.js
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import notificationReducer from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the default state with an empty array', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [],
      loading: false,
    });
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and update the state with normalized data', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [],
      loading: false,
    });
    const data = [
      {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
        author: { id: 1, name: 'Author 1' },
        context: { id: 1, text: 'Context 1' },
      },
      {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
        author: { id: 2, name: 'Author 2' },
        context: { id: 2, text: 'Context 2' },
      },
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    const expectedState = notificationsNormalizer(data).entities.notifications;
    const state = notificationReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the isRead property of the notification', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false },
        { id: 2, isRead: false },
      ],
      loading: false,
    });
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const expectedState = initialState.setIn(['notifications', 1, 'isRead'], true);
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter property of the state', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [],
      loading: false,
    });
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'urgent',
    };
    const expectedState = initialState.set('filter', 'urgent');
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_LOADING_STATE and update the loading property of the state', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [],
      loading: false,
    });
    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const expectedState = initialState.set('loading', true);
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
