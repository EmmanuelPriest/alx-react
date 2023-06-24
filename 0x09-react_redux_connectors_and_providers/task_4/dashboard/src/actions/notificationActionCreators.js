import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));
  fetch('task_4/dashboard/dist/notifications.json')
    .then((response) => response.json())
    .then((data) => {
      dispatch(setNotifications(data));
      dispatch(setLoadingState(false));
    })
    .catch((error) => {
      console.error('Error fetching notifications:', error);
      dispatch(setLoadingState(false));
    });
};
