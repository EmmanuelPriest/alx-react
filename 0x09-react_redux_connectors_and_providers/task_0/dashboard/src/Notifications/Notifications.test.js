import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Notifications />', () => {
  it('renders the component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an empty list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).dive().text()).toEqual('No new notification for now');
  });

  it('renders a list of notifications', () => {
    const notifications = [      { id: 1, type: 'default', value: 'New course available' },      { id: 2, type: 'urgent', value: 'New resume available' },      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },    ];
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies that clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('.Notifications button').simulate('click');
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

  it('verifies that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('verifies that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('verifies that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('verifies that NotificationItem is being called with the right props when passed with a single notification', () => {
    const notifications = [      { id: 1, type: 'default', value: 'New course available' },    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem).prop('type')).toEqual('default');
    expect(wrapper.find(NotificationItem).prop('value')).toEqual('New course available');
    expect(wrapper.find(NotificationItem).prop('html')).toBeUndefined();
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });

  it('verifies that NotificationItem is being called with the right props when passed with a notification with HTML content', () => {
    const notifications = [
{ id: 1, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem).prop('type')).toEqual('urgent');
    expect(wrapper.find(NotificationItem).prop('value')).toBeUndefined();
    expect(wrapper.find(NotificationItem).prop('html')).toEqual(notifications[0].html);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });
});
