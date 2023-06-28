import { createSelector } from 'reselect';
import { List } from 'immutable';

const getCourseEntities = state => state.courses.entities;

export const getAllCourses = createSelector(
  getCourseEntities,
  entities => List(entities.valueSeq())
);
