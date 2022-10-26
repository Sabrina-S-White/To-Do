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

  const burgerBtn = document.getElementById('burgerBtn');
  const sideBar = document.getElementById('sideBar');
  burgerBtn.addEventListener('click', () => {
    sideBar.classList.toggle('sideBarHide');
  });
};
