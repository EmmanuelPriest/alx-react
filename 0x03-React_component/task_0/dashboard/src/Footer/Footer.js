import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export function Footer() {
  return (
    <footer>
      <div className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy(false)}`}</p>
      </div>
    </footer>
  );
}
