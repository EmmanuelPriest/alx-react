import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';
import Notifications from './Notifications';

describe('Test NotificationsContainer.js', () => {
  it('renders NotificationsContainer component without crashing', () => {
    const wrapper = shallow(<NotificationsContainer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call fetchNotifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('renders Notifications component with notifications prop', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>test</p>' } },
    ];
    const wrapper = shallow(<NotificationsContainer notifications={listNotifications} />);
    expect(wrapper.find(Notifications).prop('notifications')).toEqual(listNotifications);
  });
});
