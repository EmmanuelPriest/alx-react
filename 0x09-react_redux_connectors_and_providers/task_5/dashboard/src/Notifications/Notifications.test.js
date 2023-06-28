import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Notifications.js', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>test</p>' } },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct text when the listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
  });

  it('verifies that clicking on the button calls handleDisplayDrawer', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawerMock} />);
    const button = wrapper.find('div').first();
    button.simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('verifies that clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer handleHideDrawer={handleHideDrawerMock} />);
    const button = wrapper.find('button').first();
    button.simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('verifies that markNotificationAsRead is called with the right ID when clicking on the first NotificationItem', () => {
    const markNotificationAsReadMock = jest.fn();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>test</p>' } },
    ];
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsReadMock}
      />
    );

    const notificationItem = wrapper.find(NotificationItem).first();
    notificationItem.props().markNotificationAsRead(1);
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });
});
