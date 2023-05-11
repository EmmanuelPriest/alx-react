import accessImmutableObject from './2-nested';

const nestedObj = accessImmutableObject({
  name: {
    first: "Guillaume"
    last: "Salva"
  }
}, ['name', 'first'])

console.log(nestedObj);
