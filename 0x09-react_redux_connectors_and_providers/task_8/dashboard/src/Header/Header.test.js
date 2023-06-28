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

  describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('does not render the logout section by default', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders the logout section when isLoggedIn is true', () => {
    const wrapper = shallow(
      <Header isLoggedIn={true} user={{ email: 'test@test.com' }} />
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logout function when logout link is clicked', () => {
    const logoutMock = jest.fn();
    const wrapper = shallow(
      <Header isLoggedIn={true} user={{ email: 'test@test.com' }} logout={logoutMock} />
    );
    wrapper.find('#logoutSection').simulate('click');
    expect(logoutMock).toHaveBeenCalled();
  });
});
