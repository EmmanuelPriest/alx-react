import { Seq } from 'immutable';

const printBestStudents(grades) {
  const lazySeq = Seq(grades);
  const filteredGrades = Seq.filter((student) => { 
    student.firstName.charAt(0).toUpperCase();
    const studentScore = student.score > 70;
    return studentScore;
  });
  
  function firstLetter(string) {
    const firstLetterCap = string.charAt(0).toUpperCase() + string.slice(1);
    return firstLetterCap;
  }

  const JSObject = filteredGrades.toJS();

  Object.keys(JSObject).map((map1) => {
    JSobject[map1].firstName = firstLetter(JSObject[map1].firstName);
    JSObject[map1].lastName = firstLetter(JSObject[map1].lastName);
    const obj = JSObject[map1];
    return obj;
  });

  console.log(JSObject);
}

export default printBestStudents;
