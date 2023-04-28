import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App component', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    expect(wrap.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it('contains the Header component', () => {
    expect(wrap.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('contains the Login component', () => {
    expect(wrap.containsMatchingElement(<Login />)).toEqual(true);
  });

  it('contains the Footer component', () => {
    expect(wrap.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
