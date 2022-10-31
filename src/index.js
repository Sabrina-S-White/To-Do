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
  const sidebarItem = document.querySelectorAll('.sidebarItem');
  const innerNotes = document.querySelector('.innerNotes');
  burgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('sideBarHide');
    innerNotes.classList.toggle('notesHide');
  });

  // add new note
  const addBtn = document.getElementById('addBtn');
  const popup = document.getElementById('popup');
  const masc = document.querySelector('.masc');
  addBtn.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup');
    masc.style.display = 'block';
  });

  // save new note
  const saveBtn = document.getElementById('saveBtn');
  const name = document.querySelector('.noteTitle');
  const description = document.querySelector('.noteDetails');
  saveBtn.addEventListener('click', () => {
    if (name.value != '') {
      let note = new newNote(name.value, description.value);
      note.newIndex();
      popup.classList.toggle('noteDivPopup');
      noteBuilder();
      name.value = '';
      description.value = '';
      masc.style.display = 'none';
    } else if (name.value === '') {
      name.setAttribute('placeholder', 'Please enter a title');
      name.style.border = '1px solid red';
      return;
    }
  });

  const textarea = document.querySelector('textarea');
  textarea.addEventListener('keyup', (e) => {
    textarea.style.height = '63px';
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  });

  // cancel button
  const cancelBtn = document.getElementById('cancelBtn');
  cancelBtn.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup');
    name.value = '';
    description.value = '';
    masc.style.display = 'none';
  });

  masc.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup');
    name.value = '';
    description.value = '';
    masc.style.display = 'none';
  });

  // rendered to dos altering/drawing data from index
  const tasks = document.querySelector('.mainTasks');
  saveBtn.addEventListener('click', () => {
    tasks.innerHTML = '';
    for (let i = 0; i < index.length; i++) {
      noteBuilder(index[i].name, index[i].description);
    }
  });

  const checkboxes = document.querySelectorAll('.checkBox');
  checkboxes.forEach((box) => {
    console.log(box);
    box.addEventListener('check', () => {
      console.log(box.value);
    });
  });

  // resizing new note description text box
  description.addEventListener('keyup', (e) => {
    description.style.height = '20px';
    let scHeight = e.target.scrollHeight;
    description.style.height = `${scHeight}px`;
  });

  // theme change
  const blueBtn = document.getElementById('blueBtn');
  const buildingBtn = document.getElementById('buildingBtn');
  const modBtn = document.getElementById('modBtn');
  const sunBtn = document.getElementById('sunBtn');
  const container = document.getElementById('container');

  buildingBtn.addEventListener('click', () => {
    container.classList.add('bgImgBuilding');
    container.classList.remove('bgImgBlue');
    container.classList.remove('bgImgMod');
    container.classList.remove('bgImgSun');
  });

  blueBtn.addEventListener('click', () => {
    container.classList.add('bgImgBlue');
    container.classList.remove('bgImgBuilding');
    container.classList.remove('bgImgMod');
    container.classList.remove('bgImgSun');
  });

  modBtn.addEventListener('click', () => {
    container.classList.add('bgImgMod');
    container.classList.remove('bgImgBlue');
    container.classList.remove('bgImgBuilding');
    container.classList.remove('bgImgSun');
  });

  sunBtn.addEventListener('click', () => {
    container.classList.add('bgImgSun');
    container.classList.remove('bgImgBlue');
    container.classList.remove('bgImgBuilding');
    container.classList.remove('bgImgMod');
  });
};
