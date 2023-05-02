import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  let wrapper;
  const listNotifications = [    { id: 1, type: 'default', value: 'New course available' },    { id: 2, type: 'urgent', value: 'New resume available' },    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications listNotifications={listNotifications} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    expect(wrapper.find('ul').children().length).toEqual(3);
  });

  it('renders correct text', () => {
    expect(wrapper.find('ul').childAt(0).text()).toEqual('New course available');
    expect(wrapper.find('ul').childAt(1).text()).toEqual('New resume available');
    expect(wrapper.find('ul').childAt(2).html()).toContain('<strong>Urgent requirement</strong> - complete by EOD');
  });

  it('has a close button', () => {
    expect(wrapper.find('button[aria-label="close"]').exists()).toBe(true);
  });

  it('calls markAsRead function when clicked', () => {
    const spy = jest.spyOn(console, 'log');
    const instance = wrapper.instance();
    const id = 1;
    instance.markAsRead(id);
    expect(spy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
    spy.mockRestore();
  });
});
