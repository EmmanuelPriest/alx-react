import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: function (props, propName, componentName) {
    const prop = props[propName];
    if (!prop || typeof prop !== 'object' || !prop.hasOwnProperty('__html') || typeof prop['__html'] !== 'string') {
      return new Error(`${componentName} requires a prop named 'html' with an object with the key '__html' and a string value.`);
    }
  }
};

NotificationItem.defaultProps = {
  value: '',
};

export default NotificationItem;
