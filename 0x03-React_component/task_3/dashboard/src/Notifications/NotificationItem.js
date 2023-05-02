import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    console.log(`Notification ${id} has been marked as read`);
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: function (props, propName, componentName) {
    const prop = props[propName];
    if (!prop || typeof prop !== 'object' || !prop.hasOwnProperty('__html') || typeof prop['__html'] !== 'string') {
      return new Error(`${componentName} requires a prop named 'html' with an object with the key '__html' and a string value.`);
    }
  },
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  value: '',
};

export default NotificationItem;
