import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="test" textSecondCell={1} />
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders a default row', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="test" textSecondCell={1} />
    );
    expect(wrapper.find('tr').hasClass('defaultRow')).toEqual(true);
  });

  it('renders a header row', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="test" textSecondCell="header" />
    );
    expect(wrapper.find('tr').hasClass('headerRow')).toEqual(true);
  });

  it('renders a row with one cell', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.find('td')).toHaveLength(1);
  });

  it('renders a row with two cells', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="test" textSecondCell="test2" />
    );
    expect(wrapper.find('td')).toHaveLength(2);
  });

  it('renders a header row with one cell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="test" />
    );
    expect(wrapper.find('th')).toHaveLength(1);
  });

  it('renders a header row with two cells', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="test" textSecondCell="header2" />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });
});
