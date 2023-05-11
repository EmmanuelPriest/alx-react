import { List } from 'immutable';

export function getListObject(array) {
  const listObj = List(array);
  return listObj;
}

export function addElementToList(list, element) {
  const listObject = list.push(element);
  return listObject;
}
