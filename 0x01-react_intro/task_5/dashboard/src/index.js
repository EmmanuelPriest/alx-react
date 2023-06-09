import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notify from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div id="root-notifications">
      <Notify />
    </div>
  </React.StrictMode>
);
