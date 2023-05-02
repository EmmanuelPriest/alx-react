import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('<App />', () => {
  it('App renders without crashing', () => {
    const logOutMock = shallow(<App />);
    expect(logOutMock.exists()).toEqual(true);
  });

  it('should contain the Notifications component', () => {
    const logOutMock = shallow(<App />);
    logOutMock.update();
    expect(logOutMock.find('Notifications')).toHaveLength(1);
  });

  it('should contain the Header component', () => {
    const logOutMock = shallow(<App />);
    logOutMock.update();
    expect(logOutMock.find('Header')).toHaveLength(1);
  });

  it('should contain the Login component', () => {
    const logOutMock = shallow(<App />);
    logOutMock.update();
    expect(logOutMock.find('Login')).toHaveLength(1);
  });

  it('should contain the Footer component', () => {
    const logOutMock = shallow(<App />);
    logOutMock.update();
    expect(logOutMock.find('Footer')).toHaveLength(1);
  });

  it('CourseList is not displayed with isLoggedIn false by default', () => {
    const logOutMock = shallow(<App />);
    logOutMock.update();
    expect(logOutMock.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn is true', () => {
    const logOutMock = shallow(<App isLoggedIn />);
    logOutMock.update();
    expect(logOutMock.find('Login')).toHaveLength(0);
    expect(logOutMock.find('CourseList')).toHaveLength(1);
  });

  it('when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out', () => {
    const events = {};
    const logout = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    expect(logout).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
});
