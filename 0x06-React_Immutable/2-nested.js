import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const nested = fromJS(object, array);
  return nested;
}
