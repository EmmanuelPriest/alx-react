import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { AppContext } from '../App/AppContext';
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
    expect(wrapper.exists()).toEqual(true);
  });

  it('does not render the logout section by default', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ isLoggedIn: false }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders the logout section when isLoggedIn is true', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ isLoggedIn: true, user: { email: 'test@test.com' } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls handleLogout when logout link is clicked', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ isLoggedIn: true, user: { email: 'test@test.com' }, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
