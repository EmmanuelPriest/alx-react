import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

/* Suppress style injection during tests to prevent conflicts */
StyleSheetTestUtils.suppressStyleInjection();

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders notifications and header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').length).toEqual(1);
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('renders course list when logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').length).toEqual(1);
    expect(wrapper.find('Login').length).toEqual(0);
  });

  it('renders login form when logged out', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('Login').length).toEqual(1);
    expect(wrapper.find('CourseList').length).toEqual(0);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
