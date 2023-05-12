import { Seq } from 'immutable';

const printBestStudents(grades) {
  const lazySeq = Seq(grades);
  const filteredGrades = lazySeq.filter((student) => { 
    student.firstName.charAt(0).toUpperCase();
    const studentScore = student.score > 70;
    return studentScore;
  });
  
  function firstLetter(string) {
    const firstLetterCap = string.charAt(0).toUpperCase() + string.slice(1);
    return firstLetterCap;
  }

  const JSObject = filteredGrades.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = firstLetter(JSObject[key].firstName);
    JSObject[key].lastName = firstLetter(JSObject[key].lastName);
    const obj = JSObject[key];
    return obj;
  });

  console.log(JSObject);
}

export default printBestStudents;
