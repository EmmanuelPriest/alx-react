import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders two paragraphs with correct text', () => {
    const wrapper = shallow(<Footer />);
    const paragraphs = wrapper.find('p');
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs.at(0).text()).toEqual('Holberton School');
    expect(paragraphs.at(1).text()).toContain('©');
  });

  it('does not display contact link when user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    const link = wrapper.find('a');
    expect(link).toHaveLength(0);
  });

  it('displays contact link when user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    const link = wrapper.find('a');
    expect(link).toHaveLength(1);
    expect(link.text()).toEqual('Contact us');
  });
});
