import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct elements when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('renders the correct elements when displayDrawer is true and listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
  });

  it('renders the correct elements when displayDrawer is true and listNotifications is not empty', () => {
    const listNotifications = [      {        id: 1,        type: 'default',        value: 'New course available',      },      {        id: 2,        type: 'urgent',        value: 'New resume available',        html: {          __html: '<strong>Urgent</strong> - Your resume has been reviewed',        },      },    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
    expect(wrapper.find(NotificationItem).at(0).prop('type')).toBe('default');
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('New course available');
    expect(wrapper.find(NotificationItem).at(0).prop('html')).toBeUndefined();
    expect(wrapper.find(NotificationItem).at(1).prop('type')).toBe('urgent');
    expect(wrapper.find(NotificationItem).at(1).prop('value')).toBe('New resume available');
    expect(wrapper.find(NotificationItem).at(1).prop('html')).toEqual({ __html: '<strong>Urgent</strong> - Your resume has been reviewed' });
  });

  it('calls the onClose function when the close button is clicked', () => {
    const onClose = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} onClose={onClose} />);
    wrapper.find('button').simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('has the correct PropTypes', () => {
    const expectedPropTypes = {
      displayDrawer: PropTypes.bool,
      listNotifications: PropTypes.arrayOf(NotificationItemShape),
      onClose: PropTypes.func,
    };
    expect(Notifications.propTypes).toEqual(expectedPropTypes);
  });

  it('has the correct defaultProps', () => {
    const expectedDefaultProps = {
      displayDrawer: false,
      listNotifications: [],
    };
    expect(Notifications.defaultProps).toEqual(expectedDefaultProps);
  });
});
