import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const boundSelectCourse = (index) => dispatch => {
  dispatch(selectCourse(index));
};

export const boundUnSelectCourse = (index) => dispatch => {
  dispatch(unSelectCourse(index));
};

export const fetchCourses = () => {
  return dispatch => {
    return fetch('task_7/dashboard/dist/courses.json')
      .then(response => response.json())
      .then(data => dispatch(setCourses(data)))
      .catch(error => console.log('Error fetching courses:', error));
  };
};

export const setCourses = courses => ({
  type: SET_COURSES,
  courses,
});
