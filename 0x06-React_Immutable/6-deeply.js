import { Map, List } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const mergeDeepPage = Map(page1).mergeDeep(page2);
  const mergedDeepPages = List(mergeDeepPages.values());
  return mergedDeepPages;
}

export default mergeDeeplyElements;
