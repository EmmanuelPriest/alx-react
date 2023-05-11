import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const mergeDeepPage = Map(page1);
  const mergedDeepPage = Map(page2);
  const mergedDeepPages = mergeDeepPage.mergeDeep(mergedDeepPage);
  return mergedDeepPages;
}

export default mergeDeeplyElements;
