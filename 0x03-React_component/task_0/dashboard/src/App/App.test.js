import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it('should render Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(false);
  });

  it('should render Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should render Login Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('should render Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('does not render courselist if logged out', () => {
    const wrapper = shallow(<App />);
    wrapper.setProps({ isLogedIn: false });
    expect(wrapper.contains(<CourseList />)).toBe(false);
  });

  it('renders courselist if logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(wrapper.contains(<Login />)).toBe(false);
  });
});
