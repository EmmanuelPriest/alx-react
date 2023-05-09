import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should have the submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(true);
  });

  it('should enable the submit button after changing the value of the two inputs', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });

    expect(submitButton.props().disabled).toBe(false);
  });

  it('should call logIn function with email and password when form is submitted', () => {
    const email = 'test@example.com';
    const password = 'password';
    const logInMock = jest.fn();
    const context = { logIn: logInMock };
    const wrapper = shallow(<Login />, { context });
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: email } });
    passwordInput.simulate('change', { target: { value: password } });

    submitButton.simulate('submit', { preventDefault() {} });

    expect(logInMock).toHaveBeenCalledWith(email, password);
  });

  it('should clear email and password fields after form is submitted', () => {
    const email = 'test@example.com';
    const password = 'password';
    const context = { logIn: jest.fn() };
    const wrapper = shallow(<Login />, { context });
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');
    const submitButton = wrapper.find('input[type="submit"]');

    emailInput.simulate('change', { target: { value: email } });
    passwordInput.simulate('change', { target: { value: password } });

    submitButton.simulate('submit', { preventDefault() {} });

    expect(wrapper.state('email')).toBe('');
    expect(wrapper.state('password')).toBe('');
  });
});
