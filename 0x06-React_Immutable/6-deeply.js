import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const mergeDeepPage = (Map(page1).mergeDeepWith(Map(page2)));
  return mergeDeepPage;
}

export mergeDeeplyElements;
