import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('verifies the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('updates displayDrawer state to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('updates displayDrawer state to false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // Set displayDrawer to true first
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('should render Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should pass correct props to Notifications component', () => {
    const wrapper = shallow(<App />);
    const notifications = wrapper.find(Notifications);
    expect(notifications.prop('listNotifications')).toBeDefined();
    expect(notifications.prop('displayDrawer')).toEqual(wrapper.state().displayDrawer);
    expect(notifications.prop('handleDisplayDrawer')).toEqual(wrapper.instance().handleDisplayDrawer);
    expect(notifications.prop('handleHideDrawer')).toEqual(wrapper.instance().handleHideDrawer);
  });
});
