import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';
import { coursesNormalizer } from '../schema/courses';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the default state with an empty array', () => {
    const initialState = fromJS([]);
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and update the state with normalized data', () => {
    const initialState = fromJS([]);
    const data = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ];
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data,
    };
    const expectedState = coursesNormalizer(data).entities.courses;
    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the isSelected property of the selected course', () => {
    const initialState = fromJS([
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false },
    ]);
    const action = {
      type: SELECT_COURSE,
      index: 1,
    };
    const expectedState = initialState.setIn([1, 'isSelected'], true);
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the isSelected property of the unselected course', () => {
    const initialState = fromJS([
      { id: 1, name: 'Course 1', isSelected: true },
      { id: 2, name: 'Course 2', isSelected: true },
    ]);
    const action = {
      type: UNSELECT_COURSE,
      index: 0,
    };
    const expectedState = initialState.setIn([0, 'isSelected'], false);
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
