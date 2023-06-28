import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
import { selectCourse, unSelectCourse, fetchCourses, setCourses } from './courseActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test courseActionCreators.js', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to set courses', () => {
    const courses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];
    const expectedAction = {
      type: SET_COURSES,
      courses,
    };

    expect(setCourses(courses)).toEqual(expectedAction);
  });

  it('should fetch courses and dispatch the setCourses action', () => {
    const courses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];
    fetchMock.get('/path/to/courses.json', courses); // Replace '/path/to/courses.json' with the actual path to your courses.json file
    const expectedActions = [
      { type: SET_COURSES, courses },
    ];
    const store = mockStore({});

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('selectCourse action creator returns the correct action', () => {
    const index = 1;
    const expectedAction = { type: SELECT_COURSE, index };
    const action = selectCourse(index);
    expect(action).toEqual(expectedAction);
  });

  test('unSelectCourse action creator returns the correct action', () => {
    const index = 1;
    const expectedAction = { type: UNSELECT_COURSE, index };
    const action = unSelectCourse(index);
    expect(action).toEqual(expectedAction);
  });
});
