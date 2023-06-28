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

  describe('CourseList', () => {
  it('renders without crashing', () => {
    const fetchCourses = jest.fn();
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();
    const listCourses = [
      { id: '1', name: 'Course 1', credit: '3', isSelected: false },
      { id: '2', name: 'Course 2', credit: '4', isSelected: false }
    ];
    const wrapper = shallow(
      <CourseList
        listCourses={listCourses}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a table element with two headers and no rows', () => {
    const fetchCourses = jest.fn();
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();
    const wrapper = shallow(
      <CourseList
        listCourses={[]}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
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
    const fetchCourses = jest.fn();
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();
    const listCourses = [
      { id: '1', name: 'Course 1', credit: '3', isSelected: false },
      { id: '2', name: 'Course 2', credit: '4', isSelected: false }
    ];
    const wrapper = shallow(
      <CourseList
        listCourses={listCourses}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    const table = wrapper.find('table');
    const tbody = table.find('tbody');
    const rows = tbody.find(CourseListRow);
    expect(rows).toHaveLength(2);
    expect(rows.at(0).props().textFirstCell).toBe('Course 1');
    expect(rows.at(0).props().textSecondCell).toBe('3');
    expect(rows.at(0).props().isChecked).toBe(false);
    expect(rows.at(1).props().textFirstCell).toBe('Course 2');
    expect(rows.at(1).props().textSecondCell).toBe('4');
    expect(rows.at(1).props().isChecked).toBe(false);
  });

  it('renders a row with "No course available yet" if listCourses is empty', () => {
    const fetchCourses = jest.fn();
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();
    const wrapper = shallow(
      <CourseList
        listCourses={[]}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    const table = wrapper.find('table');
    const tbody = table.find('tbody');
    const rows = tbody.find(CourseListRow);
    expect(rows).toHaveLength(1);
    expect(rows.at(0).props().textFirstCell).toBe('No course available yet');
  });

  it('calls fetchCourses on mount', () => {
    const fetchCourses = jest.fn();
    const selectCourse = jest.fn();
    const unSelectCourse = jest.fn();
    const listCourses = [
      { id: '1', name: 'Course 1', credit: '3', isSelected: false },
      { id: '2', name: 'Course 2', credit: '4', isSelected: false }
    ];
    shallow(
      <CourseList
        listCourses={listCourses}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
    expect(fetchCourses).toHaveBeenCalledTimes(1);
  });
});
