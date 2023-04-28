import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('renders a Login component when user is not logged in', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('renders a CourseList component when user is logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('has a state property isLoggedIn that defaults to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('isLoggedIn')).toBe(false);
  });

  it('updates the state property isLoggedIn when handleLogout is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleLogout();
    expect(wrapper.state('isLoggedIn')).toBe(false);
  });

  it('has a state property displayDrawer that defaults to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('updates the state property displayDrawer when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('updates the state property displayDrawer when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('renders a Notifications component with the right props when displayDrawer is true', () => {
    const wrapper = shallow(<App displayDrawer={true} />);
    expect(wrapper.find(Notifications).props()).toEqual({
    displayDrawer: true, listNotifications: []
    });
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });
});
