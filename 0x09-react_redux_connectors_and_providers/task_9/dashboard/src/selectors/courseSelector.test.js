import { List } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('Test courseSelector.js', () => {
  it('should return all courses as a List', () => {
    const state = {
      courses: {
        entities: {
          1: { id: 1, name: 'Course 1' },
          2: { id: 2, name: 'Course 2' },
          3: { id: 3, name: 'Course 3' },
        },
      },
    };

    const result = getAllCourses(state);
    const expected = List([
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
    ]);

    expect(result).toEqual(expected);
  });

  it('should return an empty List if there are no courses', () => {
    const state = {
      courses: {
        entities: {},
      },
    };

    const result = getAllCourses(state);
    const expected = List([]);

    expect(result).toEqual(expected);
  });
});
