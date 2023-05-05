import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';

describe("<CourseList />", () => {
  it("CourseList renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders the correct number of rows', () => {
    const courses = [      { id: 1, name: 'ES6', credit: '60' },      { id: 2, name: 'Webpack', credit: '20' },      { id: 3, name: 'React', credit: 40 }    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

  it('renders a "No course available yet" row when listCourses is empty', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(1);
    expect(wrapper.find(CourseListRow).prop('textFirstCell')).toEqual('No course available yet');
  });

  it('renders the course names and credits', () => {
    const courses = [      { id: 1, name: 'ES6', credit: '60' },      { id: 2, name: 'Webpack', credit: '20' },      { id: 1, name: 'Webpack', credit: 40 }    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find(CourseListRow).slice(1);
    rows.forEach((row, index) => {
      expect(row.prop('textFirstCell')).toEqual(courses[index].name);
      expect(row.prop('textSecondCell')).toEqual(courses[index].credit);
    });
  });

  it('passes the correct prop types to CourseListRow', () => {
    const courses = [      { id: 1, name: 'ES6', credit: '60' },      { id: 2, name: 'Webpack', credit: '20' },      { id: 1, name: 'React', credit: 40 }    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find(CourseListRow).slice(1);
    rows.forEach((row) => {
      expect(row).toHaveProp('textFirstCell', expect.any(String));
      expect(row).toHaveProp('textSecondCell', expect.any(String));
      expect(row).toHaveProp('isHeader', false);
    });
  });

  it('sets the isHeader prop to true for the header rows', () => {
    const wrapper = shallow(<CourseList />);
    const headerRows = wrapper.find(CourseListRow).slice(0, 2);
    headerRows.forEach((row) => {
      expect(row).toHaveProp('isHeader', true);
    });
  });

  it('has the correct default props', () => {
    expect(CourseList.defaultProps.listCourses).toEqual([]);
  });

  it('has the correct prop types', () => {
    expect(CourseList.propTypes.listCourses).toEqual(CourseShape.isRequired);
  });
});
