const { fromJS } = require('immutable');

function getImmutableObject (object) {
  const immutableMap = fromJS(object);
  return immutableMap;
}

/* Example */
const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObj = getImmutableObject(object);
console.log(immutableObj);
