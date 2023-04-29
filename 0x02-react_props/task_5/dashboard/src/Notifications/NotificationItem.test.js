import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { expect } from 'chai';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type='default' />);
    expect(wrapper.exists()).to.equal(true);
  });

  it('renders a <li> element with the right type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).to.have.lengthOf(1);
    expect(li.text()).to.equal('test');
    expect(li.prop('data-notification-type')).to.equal('default');
  });

  it('renders a <li> element with html prop', () => {
    const wrapper = shallow(<NotificationItem type='urgent' html={{ __html: '<strong>test</strong>' }} />);
    const li = wrapper.find('li');
    expect(li).to.have.lengthOf(1);
    expect(li.html()).to.equal('<li data-notification-type="urgent"><strong>test</strong></li>');
  });

  it('throws an error when type prop is not passed', () => {
    expect(() => shallow(<NotificationItem />)).to.throw();
  });

  it('does not throw an error when value prop is not passed', () => {
    expect(() => shallow(<NotificationItem type='default' />)).to.not.throw();
  });

  it('throws an error when html prop is not passed as an object with "__html" key', () => {
    expect(() => shallow(<NotificationItem type='default' html='not an object' />)).to.throw();
    expect(() => shallow(<NotificationItem type='default' html={{ not_html: 'not html' }} />)).to.throw();
  });

  it('does not throw an error when html prop is passed as an object with "__html" key', () => {
    expect(() => shallow(<NotificationItem type='default' html={{ __html: '<strong>test</strong>' }} />)).to.not.throw();
  });
});
