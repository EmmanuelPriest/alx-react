import { List, is } from 'immutable';

function concatElements(page1, page2) {
  const concatPage = List([page1, page2]).map((pageArr) => List(pageArr));
  return concatPage;
}

function mergeElements(page1, page2) {
  const mergePage = List([page1, page2]).map((pageObj) => {
    if (is(pageObj, page2)) {
      return List(Object.values(pageObj));
    } else {
      return List();
    }
  });
}

export default { concatElements, mergeElements };
