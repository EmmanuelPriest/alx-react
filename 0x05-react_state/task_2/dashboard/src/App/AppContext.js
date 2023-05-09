import React from 'react';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

const defaultLogOut = () => {
  console.log('Default log out function');
};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut
});

const defaultValues = {
  user: defaultUser,
  logOut: defaultLogOut
};

export default {AppContext, defaultValues};
