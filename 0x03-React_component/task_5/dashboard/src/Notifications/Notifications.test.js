import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  const wrapper = shallow(
    <Notifications displayDrawer={true} listNotifications={[
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ]} />
  );

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('does not rerender when updating with the same list', () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ]
    });
    expect(shouldUpdate).toBe(false);
  });

  it('rerenders when updating with a longer list', () => {
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({
      displayDrawer: true,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
        { id: 4, type: 'default', value: 'New course available' },
      ]
    });
    expect(shouldUpdate).toBe(true);
  });
});
