import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<CourseList />);
    const courseList = getByTestId('course-list');
    expect(courseList).toBeInTheDocument();
  });

  it('renders the 5 different rows', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const { getByText } = render(<CourseList listCourses={courses} />);
    courses.forEach((course) => {
      expect(getByText(course.name)).toBeInTheDocument();
      expect(getByText(`${course.credit} credits`)).toBeInTheDocument();
    });
  });
});
