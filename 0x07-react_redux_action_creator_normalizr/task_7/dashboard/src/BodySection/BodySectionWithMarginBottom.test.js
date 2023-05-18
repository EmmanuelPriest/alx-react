import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('BodySectionWithMarginBottom', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a BodySection component with the correct title and children', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props().title).toBe('test title');
    expect(wrapper.find(BodySection).props().children.type).toBe('p');
    expect(wrapper.find(BodySection).props().children.props.children).toBe('test children node');
  });

  it('passes additional props to the div', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title" id="test-id" data-test="test-data">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('div').props().id).toBe('test-id');
    expect(wrapper.find('div').props()['data-test']).toBe('test-data');
  });
});
