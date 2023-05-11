import { Map } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.withMutations(map3 => {
  map3.set(2, 'Benjamin').set(4, 'Oliver');
});

export default { map, map2 };
