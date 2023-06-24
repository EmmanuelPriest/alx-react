import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST
} from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const boundLogin = (email, password) => dispatch => {
  dispatch(login(email, password));
};

export const boundLogout = () => dispatch => {
  dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => dispatch => {
  dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => dispatch => {
  dispatch(hideNotificationDrawer());
};

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => (dispatch) => {
    dispatch(login());

    /* Perform the API request using fetch or a library like axios */
    fetch('/login-success.json')
      .then((response) => {
        if (response.ok) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
};
