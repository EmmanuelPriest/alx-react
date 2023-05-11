import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const nested = fromJS(object);
  const accessNestedObject = nested.getIn(array);
  return accessNestedObject;
}
