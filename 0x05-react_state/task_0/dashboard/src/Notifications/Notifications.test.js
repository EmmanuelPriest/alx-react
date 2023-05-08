import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders an empty list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).dive().text()).toEqual('No new notification for now');
  });

  it('renders a list of notifications', () => {
    const notifications = [      { id: 1, type: 'default', value: 'New course available' },      { id: 2, type: 'urgent', value: 'New resume available' },      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },    ];
    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  it('renders the component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('div').at(0).simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies that clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('should update the component when displayDrawer prop changes', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.instance().shouldComponentUpdate({ displayDrawer: true })).toBe(true);
  });

  it('should not update the component when displayDrawer prop does not change', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.instance().shouldComponentUpdate({ displayDrawer: false })).toBe(false);
  });
});
