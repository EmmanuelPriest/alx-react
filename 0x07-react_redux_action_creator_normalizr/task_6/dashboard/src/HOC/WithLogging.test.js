import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log on mount and unmount with Component name when wrapped component is a pure HTML element', () => {
    const WrappedComponent = () => <p>test</p>;
    const ComponentWithLogging = WithLogging(WrappedComponent);
    const wrapper = mount(<ComponentWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith(`Component 'Component' is mounted`);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(`Component 'Component' is going to unmount`);
  });

  it('should log on mount and unmount with component name when wrapped component is Login', () => {
    const Login = () => <p>Login</p>;
    const ComponentWithLogging = WithLogging(Login);
    const wrapper = mount(<ComponentWithLogging />);
    expect(consoleSpy).toHaveBeenCalledWith(`Component 'Login' is mounted`);
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(`Component 'Login' is going to unmount`);
  });
});
