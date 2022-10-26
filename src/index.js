import './css.css';
import pageLoad from './pageLoad';
// eslint-disable-next-line import/no-cycle
import newNote from './newNote';
// eslint-disable-next-line import/no-cycle
import noteBuilder from './noteBuilder';

// eslint-disable-next-line import/prefer-default-export
export const index = [];

window.onload = () => {
  pageLoad();

  // favicon load
  const flavIcon = document.createElement('link');
  flavIcon.type = 'image/x-icon';
  flavIcon.rel = 'icon';
  flavIcon.href = './fav.ico';
  document.head.appendChild(flavIcon);

  // sidebar popup 
  const burgerBtn = document.getElementById('burgerBtn');
  const sideBar = document.getElementById('sideBar');
  burgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('sideBarHide');
  });

  // add new note 
  const addBtn = document.getElementById('addBtn');
  const popup = document.getElementById('popup');
  addBtn.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup')
  })

  // save new note
  const saveBtn = document.getElementById('saveBtn');
  const name = document.querySelector('.noteTitle');
  const description = document.querySelector('.noteDetails')
  saveBtn.addEventListener('click', () => {
    let note = new newNote(name.value, description.value);
    note.newIndex();
    popup.classList.toggle('noteDivPopup');
    noteBuilder();
  })

  // cancel button
  const cancelBtn = document.getElementById('cancelBtn');
  cancelBtn.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup');
  })

  const helpBtn = document.getElementById('helpBtn');
  helpBtn.addEventListener('click', () => {
    console.log(index);
    console.log(index.indexOf())
  })
};
