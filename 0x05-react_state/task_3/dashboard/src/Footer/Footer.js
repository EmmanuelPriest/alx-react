import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer>
      <div className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
        {user.loggedIn && <p><a href="#">Contact us</a></p>}
      </div>
    </footer>
  );
}

export default Footer;
