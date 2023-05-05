import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  it('CourseListRow renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders a table row with two cells when passed textFirstCell and textSecondCell props', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="test1" textSecondCell="test2" />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('renders a table row with one cell when passed only textFirstCell prop', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test1" />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(1);
  });

  it('renders a table row with two th cells when isHeader is true and textSecondCell is passed', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders a table row with one th cell when isHeader is true and textSecondCell is not passed', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test1" />
    );
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(1);
  });

  it('sets the row background color to #f5f5f5ab when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });

  it('sets the row background color to #deb5b545 when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />
    );
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />
    );
    expect(wrapper.find('tr').prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders correctly with default props', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test1" />);
    expect(wrapper.find('tr')).toHaveLength(1);
    expect(wrapper.find('td')).toHaveLength(1);
    expect(wrapper.find('th')).toHaveLength(0);
    expect(wrapper.prop('isHeader')).toEqual(false);
    expect(wrapper.prop('textSecondCell')).toEqual(null);
  });
});
