import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  const mockMarkAsRead = jest.fn();
  const props = {
    type: 'default',
    value: 'test notification',
    html: {
      __html: '<p>test notification</p>',
    },
    markAsRead: mockMarkAsRead,
    id: 1,
  };
  const wrapper = shallow(<NotificationItem {...props} />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a li element', () => {
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('renders a li element with correct text', () => {
    expect(wrapper.text()).toEqual('test notification');
  });

  it('renders a li element with correct class for default type', () => {
    expect(wrapper.find('li').hasClass('default')).toEqual(true);
  });

  it('renders a li element with correct class for urgent type', () => {
    const urgentProps = {
      ...props,
      type: 'urgent',
    };
    const urgentWrapper = shallow(<NotificationItem {...urgentProps} />);
    expect(urgentWrapper.find('li').hasClass('urgent')).toEqual(true);
  });

  it('clicking the li element calls the markAsRead function with the correct id', () => {
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});
