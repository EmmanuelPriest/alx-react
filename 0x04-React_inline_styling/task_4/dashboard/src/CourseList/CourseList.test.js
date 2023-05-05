import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseList', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a table element with two headers and no rows', () => {
    const wrapper = shallow(<CourseList />);
    const table = wrapper.find('table');
    const thead = table.find('thead');
    const tr = thead.find('tr');
    const th = tr.find('th');

    expect(table).toHaveLength(1);
    expect(thead).toHaveLength(1);
    expect(tr).toHaveLength(2);
    expect(th.at(0).text()).toBe('Available courses');
    expect(th.at(1).text()).toBe('Course nameCredit');
  });

  it('renders a row for each course passed as a prop', () => {
    const listCourses = [
      { id: 1, name: 'Course 1', credit: '3' },
      {id: 2, name: 'Course 2', credit: '4' }
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    const table = wrapper.find('table');
    const tbody = table.find('tbody');
    const rows = tbody.find(CourseListRow);
    expect(rows).toHaveLength(2);
    expect(rows.at(0).props().textFirstCell).toBe('Course 1');
    expect(rows.at(0).props().textSecondCell).toBe('3');
    expect(rows.at(1).props().textFirstCell).toBe('Course 2');
    expect(rows.at(1).props().textSecondCell).toBe('4');
  });

  it('renders a row with "No course available yet" if listCourses is empty', () => {
    const wrapper = shallow(<CourseList />);
    const table = wrapper.find('table');
    const tbody = table.find('tbody');
    const rows = tbody.find(CourseListRow);
    expect(rows).toHaveLength(1);
    expect(rows.at(0).props().textFirstCell).toBe('No course available yet');
  });
});
