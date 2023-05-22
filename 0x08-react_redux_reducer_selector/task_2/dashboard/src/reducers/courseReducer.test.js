import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';

describe('courseReducer', () => {
  it('should return the default state of an empty array', () => {
    const initialState = [];
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and set isSelected to false for each course', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],
    };
    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the isSelected property for the specified index', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = {
      type: SELECT_COURSE,
      index: 1,
    };
    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the isSelected property for the specified index', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const state = courseReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });
});
