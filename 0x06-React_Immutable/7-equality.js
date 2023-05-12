import { Map, is } from 'immutable';

function areMapsEqual(map1, map2) {
  const map1Equal = Map(map1);
  const map2Equal = Map(map2);
  const mapEquality = is(map1Equal, map2Equal);
  return mapEquality;
}

export default areMapsEqual;
