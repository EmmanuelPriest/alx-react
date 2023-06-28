import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
  getUnreadNotificationsByType,
} from './notificationSelector';

describe('notificationSelector', () => {
  const initialState = fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false },
      { id: 2, isRead: true },
      { id: 3, isRead: false },
    ],
  });

  it('should return the filter type selected', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('DEFAULT');
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.toJS()).toEqual([
      { id: 1, isRead: false },
      { id: 2, isRead: true },
      { id: 3, isRead: false },
    ]);
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.toJS()).toEqual([
      { id: 1, isRead: false },
      { id: 3, isRead: false },
    ]);
  });

  it('should return the list of unread urgent notifications when the filter is set', () => {
    const unreadNotificationsByType = getUnreadNotificationsByType(initialState);
    expect(unreadNotificationsByType.toJS()).toEqual([{ id: 3, isRead: false }]);
  });
});
