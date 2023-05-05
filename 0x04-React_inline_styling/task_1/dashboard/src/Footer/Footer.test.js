import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<Footer />);
  });

  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    expect(wrap.text()).toContain('Copyright');
  });
});
