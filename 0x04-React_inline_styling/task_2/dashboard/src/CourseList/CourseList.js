import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #dbdbdb',
    marginTop: '20px'
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '15px',
    textAlign: 'left'
  },
  td: {
    border: '1px solid #dbdbdb',
    padding: '10px 15px',
    textAlign: 'left'
  },
  noCourseAvailable: {
    textAlign: 'center',
    fontStyle: 'italic'
  }
});

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.table)} id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td className={css(styles.noCourseAvailable)} colSpan="2">
              No course available yet
            </td>
          </tr>
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
