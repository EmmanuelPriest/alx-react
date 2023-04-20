import $ from 'jquery';
import logo from '../assets/holberton-logo.jpg';
import './header.css';

$(document).ready(() => {
  const img = $('<img>', { src: logo, alt: 'logo' });
  const title = $('<h1>', { text: 'Holberton Dashboard' });

  $('header').append(img, title);

  console.log('Init header');
});
