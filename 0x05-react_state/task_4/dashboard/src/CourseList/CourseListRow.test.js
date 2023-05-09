import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="test" />);
  });

  it('should render header row with one cell correctly', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').text()).toEqual('Header');
  });

  it('should render header row with two cells correctly', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Header 1');
    expect(wrapper.find('th').at(1).text()).toEqual('Header 2');
  });

  it('should render data row correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('Data 1');
    expect(wrapper.find('td').at(1).text()).toEqual('Data 2');
  });

  it('should toggle checkbox when clicked', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.prop('checked')).toBe(false);
    checkbox.simulate('change');
    expect(checkbox.prop('checked')).toBe(true);
    checkbox.simulate('change');
    expect(checkbox.prop('checked')).toBe(false);
  });

  it('should apply checked style when checkbox is checked', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change');
    expect(wrapper.find('.rowChecked')).toHaveLength(1);
  });
});
