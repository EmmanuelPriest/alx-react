import { Map } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.merge({
  3: 'Benjamin',
  5: 'Oliver',
});

export default { map, map2 };
