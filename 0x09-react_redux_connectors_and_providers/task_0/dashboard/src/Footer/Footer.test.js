import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer component', () => {
  test('renders without crashing', () => {
    shallow(<Footer />);
  });

  test('renders two paragraphs with correct text', () => {
    const wrapper = shallow(<Footer />);
    const paragraphs = wrapper.find('p');
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs.at(0).text()).toEqual('Holberton School');
    expect(paragraphs.at(1).text()).toEqual('© 2021');
  });

  test('does not display contact link when user is logged out', () => {
    const contextValue = { user: { loggedIn: false } };
    const wrapper = shallow(<AppContext.Provider value={contextValue}><Footer /></AppContext.Provider>);
    const link = wrapper.find('a');
    expect(link).toHaveLength(0);
  });

  test('displays contact link when user is logged in', () => {
    const contextValue = { user: { loggedIn: true } };
    const wrapper = shallow(<AppContext.Provider value={contextValue}><Footer /></AppContext.Provider>);
    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.text()).toEqual('Contact us');
  });
});
