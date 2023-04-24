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

  it('renders a div with the class App-header', () => {
    const appHeader = wrap.find('.App-header');
    expect(appHeader.exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const appBody = wrap.find('.App-body');
    expect(appBody.exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const appFooter = wrap.find('.App-footer');
    expect(appFooter.exists()).toBe(true);
  });
});
