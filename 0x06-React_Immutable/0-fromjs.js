import { fromJS } from 'immutable';

function getImmutableObject(object) {
  const immutableMap = fromJS(object);
  return immutableMap;
}

export default getImmutableObject;
