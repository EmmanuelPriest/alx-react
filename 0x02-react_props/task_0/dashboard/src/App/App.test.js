import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrap.exists()).toBe(true);
  });
});
