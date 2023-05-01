import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('renders an img tag', () => {
    const img = wrap.find('img');
    expect(img.exists()).toBe(true);
  });

  it('renders an h1 tag', () => {
    const h1 = wrap.find('h1');
    expect(h1.exists()).toBe(true);
  });
});
