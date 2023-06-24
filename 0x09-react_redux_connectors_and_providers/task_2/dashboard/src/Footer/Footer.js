import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const Footer = ({ user }) => {
  return (
    <footer>
      <div className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
        {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
      </div>
    </footer>
  );
};

export default connect(mapStateToProps)(Footer);
