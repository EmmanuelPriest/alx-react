import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { fromJS, setIn } from 'immutable';

const initialState = fromJS([]);

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.mergeDeep(coursesNormalizer(action.data).entities.courses);
    case SELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;
