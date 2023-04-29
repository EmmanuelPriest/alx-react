import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a table with two headers', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('thead')).toHaveLength(1);
    expect(wrapper.find(CourseListRow)).toHaveLength(2);
  });

  it('renders a "No course available yet" row when listCourses is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('tbody')).toHaveLength(1);
    expect(wrapper.find(CourseListRow)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
  });

  it('renders the correct number of CourseListRow components when listCourses is not empty', () => {
    const listCourses = [      { id: 1, name: 'Course 1', credit: 3 },      { id: 2, name: 'Course 2', credit: 2 },      { id: 3, name: 'Course 3', credit: 4 },    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(listCourses.length + 1); // plus one for the header
  });
});
