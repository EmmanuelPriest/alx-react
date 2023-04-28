import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders an empty <div /> when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').exists()).toEqual(false);
    expect(wrapper.find('.menuItem').exists()).toEqual(true);
  });

  it('renders the correct html for NotificationItem when passed as a prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<p>test html prop</p>' }} />);
    expect(wrapper.find('[dangerouslySetInnerHTML]').prop('dangerouslySetInnerHTML')).toEqual({ __html: '<p>test html prop</p>' });
  });

  it('renders a <ul /> and 2 <NotificationItem /> components', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.Notifications').exists()).toEqual(true);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it('renders the text "Here are the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const text = <p>Here are the list of notifications</p>;
    expect(wrapper.contains(text)).toEqual(true);
  });

  it('renders a <li /> element with the right html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<p>test html</p>' }} />);
    expect(wrapper.find('[dangerouslySetInnerHTML]').html()).toEqual('<li><p>test html</p></li>');
  });
});
