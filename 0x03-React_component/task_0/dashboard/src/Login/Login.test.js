import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<Login />);
  });

  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });

  it('renders 2 input tags', () => {
    const inputs = wrap.find('input');
    expect(inputs.length).toBe(2);
  });

  it('renders 2 label tags', () => {
    const labels = wrap.find('label');
    expect(labels.length).toBe(2);
  });
});
