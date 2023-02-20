/* eslint max-classes-per-file: ["error", 2] */
import UI from './Modules/UI.js';
import singlePageAppDisplay from './Modules/SPA.js';
import { DateTime } from './Modules/luxon/src/luxon.js';

// Single Page App
const navList = document.querySelector('.nav-list');
const navAdd = document.querySelector('.nav-add');
const navContact = document.querySelector('.nav-contact');

navList.addEventListener('click', (event) => {
  singlePageAppDisplay(event);
});

navAdd.addEventListener('click', (event) => {
  singlePageAppDisplay(event);
});

navContact.addEventListener('click', (event) => {
  singlePageAppDisplay(event);
});

// End Single Page App

window.onload = () => {
  UI.renderBooks();
  document.querySelector('.form-add').addEventListener('click', (event) => {
    event.preventDefault();
    UI.addBook();
  });

  const dt = DateTime.now().setLocale('en');
  document.querySelector('.date-div').textContent = dt
    .setLocale('en')
    .toFormat('EEE DD');
};
