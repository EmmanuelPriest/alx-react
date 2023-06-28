import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
