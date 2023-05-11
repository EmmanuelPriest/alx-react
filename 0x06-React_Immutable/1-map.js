import { Map } from 'immutable';

function getImmutableObject(object) {
  const immutableMap = Map(object);
  return immutableMap;
}

export default getImmutableObject;
