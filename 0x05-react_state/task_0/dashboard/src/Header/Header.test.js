import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

import { StyleSheetTestUtils } from 'aphrodite';

describe('Header', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an image and the header title', () => {
    const wrapper = shallow(<Header />);
    const img = wrapper.find('img');
    const h1 = wrapper.find('h1');

    expect(img).toHaveLength(1);
    expect(h1).toHaveLength(1);
    expect(h1.text()).toBe('School dashboard');
  });
});
