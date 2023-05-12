import areMapsEqual from './7-equality';

const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

const mapObjs = areMapsEqual(map1, map2);
console.log(mapObjs);
