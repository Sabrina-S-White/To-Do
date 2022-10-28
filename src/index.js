import './css.css';
import pageLoad from './pageLoad';
// eslint-disable-next-line import/no-cycle
import newNote from './newNote';
// eslint-disable-next-line import/no-cycle
import noteBuilder from './noteBuilder';

// eslint-disable-next-line import/prefer-default-export
export const index = [];
export const checkBoxAry = [];

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
  const masc = document.querySelector('.masc');
  addBtn.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup')
    masc.style.display = 'block';
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
    name.value = '';
    description.value = '';
    masc.style.display = 'none';
  })

  const textarea = document.querySelector("textarea");
      textarea.addEventListener("keyup", e =>{
        textarea.style.height = "63px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      })

  // cancel button
  const cancelBtn = document.getElementById('cancelBtn');
  cancelBtn.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup');
    name.value = '';
    description.value = '';
    masc.style.display = 'none';
  })

  masc.addEventListener('click', () => {
    popup.classList.toggle('noteDivPopup');
    name.value = '';
    description.value = '';
    masc.style.display = 'none';
  })

  // help button
  const helpBtn = document.getElementById('helpBtn');
  helpBtn.addEventListener('click', () => {
    console.log(index);
    console.log(checkBoxAry);
  })

  // rendered to dos altering/drawing data from index
  const tasks = document.querySelector('.mainTasks');
  saveBtn.addEventListener('click', () => { 
    tasks.innerHTML = '';
    for (let i = 0; i < index.length; i++) {
      noteBuilder(index[i].name, index[i].description);
    }
    }
  );

  const checkboxes = document.querySelectorAll('.checkBox') 
  checkboxes.forEach(box => {
  console.log(box);
  box.addEventListener('check', () => {
    console.log(box.value);
  })
})
};

