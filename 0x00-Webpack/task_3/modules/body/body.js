import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(() => {
  const btn = $('<button>', { text: 'Click me!' });
  const counter = $('<p>', { text: '0' });

  $('body').append(btn, counter);

  let count = 0;
  btn.click(() => {
    count++;
    counter.text(count);
  });

  console.log('Init body');
});
