import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css/';

$(document).ready(function() {
  const $body = $('body');
  const $count = $('#count');

  let count = 0;

  function updateCounter() {
    count += 1;
    return count;
  }
  
  $body.append('<div id="logo"></div>')
  $body.append('<p>Holberton Dashboard</p>');
  $body.append('<p>Dashboard data for the students</p>');
  $body.append('<button><span>Click here to get started</span></button>');
  $body.append('<p id="count"></p>');
  $body.append('<p>Copyright - Holberton School</p>');

  let debouncedFunc = _.debounce(() => {
    let count = updateCounter();
    $count.text(`${count} clicks on the button`);
  });

  $('button').on('click', debouncedFunc);
});
