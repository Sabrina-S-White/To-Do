import './css.css';
import pageLoad from './pageLoad';
// eslint-disable-next-line import/no-cycle
import newNote from './newNote';
// eslint-disable-next-line import/no-cycle
import noteBuilder from './noteBuilder';
import { saveToLocal, getTasks, clearLocalStorage } from './localStorage';

// eslint-disable-next-line import/prefer-default-export
export const index = [];

window.onload = () => {
  pageLoad();

  const indexBtn = document.getElementById('indexBtn');
  const btn = document.getElementById('newBtn');
  const clearBtn = document.getElementById('clearStorage');
  btn.addEventListener('click', () => {
    // eslint-disable-next-line new-cap
    const x = new newNote();
    x.newIndex();
    noteBuilder();
  });

  indexBtn.addEventListener('click', () => {
    console.log(index);
  });

  clearBtn.addEventListener('click', () => {
    clearLocalStorage();
  });
};
