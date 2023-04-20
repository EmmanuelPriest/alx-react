import $ from 'jquery';
import './footer.css';

$(document).ready(() => {
  const p = $('<p>', { text: 'Copyright - Holberton School'});
  $('footer').append(p);
});
