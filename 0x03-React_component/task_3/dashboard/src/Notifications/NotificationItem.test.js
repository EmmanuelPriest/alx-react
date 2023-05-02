import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props()['data-notification-type']).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders html when prop is provided', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<strong>test</strong>' }} />);
    expect(wrapper.html()).toContain('<strong>test</strong>');
  });

  it('calls markAsRead function on click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<NotificationItem type="default" value="test" markAsRead={spy} id={1} />);
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledWith(1);
  });
});
