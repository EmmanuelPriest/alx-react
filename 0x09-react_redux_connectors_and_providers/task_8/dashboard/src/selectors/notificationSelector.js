import { createSelector } from 'reselect';

// Selector to get the filter type selected
export const filterTypeSelected = state => state.get('filter');

// Selector to get the notifications
export const getNotifications = state => state.get('notifications');

// Selector to get the unread notifications
export const getUnreadNotifications = state =>
  state.get('notifications').filter(notification => !notification.get('isRead'));

// Selector to get the unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  filterTypeSelected,
  getUnreadNotifications,
  (filterType, unreadNotifications) => {
    if (filterType === 'default') {
      return unreadNotifications;
    } else if (filterType === 'urgent') {
      return unreadNotifications.filter(notification => notification.get('isUrgent'));
    } else {
      return unreadNotifications;
    }
  }
);
