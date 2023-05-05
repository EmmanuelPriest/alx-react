import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct number of NotificationItem components', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  it('renders the right html for the first NotificationItem component', () => {
    const notifications = [
      {
        id: 1,
        type: 'default',
        html: '<strong>test</strong>',
      },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={notifications} />
    );
    expect(wrapper.containsMatchingElement(<strong>test</strong>)).toEqual(
true
    );
  });
});
