// image imports
import logo from './images/logo.png';
import plus from './images/plus.png';
import trash from './images/trash-can.png';
import github from './images/git.png';
import link from './images/linkedin.png';
import emailLink from './images/mail.png';
import burgerIcon from './images/menu.png';
import homeIcon from './images/home.png';
import helpIcon from './images/help.png';
import tune from './images/tune.png';
import blueBG from './images/bg-imgs/blue.jpg';
import buildingBG from './images/bg-imgs/building.jpg';
import modBG from './images/bg-imgs/mod.jpg';
import sunBG from './images/bg-imgs/sun.jpg';

export default function pageLoad() {
  // image handling
  const logoImg = new Image();
  const plusImg = new Image();
  const trashImg = new Image();
  const gitImg = new Image();
  const linkImg = new Image();
  const emailImg = new Image();
  const menuImg = new Image();
  const homeImg = new Image();
  const helpImg = new Image();
  const tuneImg = new Image();
  const blueImg = new Image();
  const buildingImg = new Image();
  const modImg = new Image();
  const sunImg = new Image();
  logoImg.src = logo;
  plusImg.src = plus;
  trashImg.src = trash;
  gitImg.src = github;
  linkImg.src = link;
  emailImg.src = emailLink;
  menuImg.src = burgerIcon;
  homeImg.src = homeIcon;
  helpImg.src = helpIcon;
  tuneImg.src = tune;
  blueImg.src = blueBG;
  buildingImg.src = buildingBG;
  modImg.src = modBG;
  sunImg.src = sunBG;

  // elements for page load
  const container = document.createElement('div');

  // elements for menu bar
  const menu = document.createElement('div');
  const menuLeft = document.createElement('div');
  const menuRight = document.createElement('div');
  const burger = document.createElement('a');
  const home = document.createElement('a');
  const search = document.createElement('input');
  const add = document.createElement('a');
  const help = document.createElement('a');

  // elements for main section
  const main = document.createElement('div');
  const sideBar = document.createElement('div');
  const notes = document.createElement('div');
  const innerNotes = document.createElement('div');
  const mainTitle = document.createElement('div');
  const mainTasks = document.createElement('div');

  // elements for main title content
  const title = document.createElement('p');
  const view = document.createElement('a');

  // content for new note popup
  const noteDiv = document.createElement('div');
  const noteContentDiv = document.createElement('div');
  const noteBtnsDiv = document.createElement('div');
  const noteBtnsDivL = document.createElement('div');
  const noteBtnsDivR = document.createElement('div');
  const noteTitle = document.createElement('input');
  const noteDetails = document.createElement('textarea');
  const inbox = document.createElement('a');
  const scheduled = document.createElement('a');
  const priority = document.createElement('a');
  const cancel = document.createElement('button');
  const save = document.createElement('button');

  // appending elements to document
  document.body.appendChild(container);
  container.appendChild(menu);
  container.appendChild(main);
  menu.appendChild(menuLeft);
  menu.appendChild(menuRight);
  menuLeft.appendChild(burger);
  menuLeft.appendChild(home);
  menuLeft.appendChild(search);
  menuRight.appendChild(add);
  menuRight.appendChild(help);
  main.appendChild(sideBar);
  main.appendChild(notes);
  notes.appendChild(innerNotes);
  innerNotes.appendChild(mainTitle);
  innerNotes.appendChild(mainTasks);

  // appending content to mainTitle
  mainTitle.appendChild(title);
  mainTitle.appendChild(view);

  // appending elements to new note popup
  document.body.appendChild(noteDiv);
  noteDiv.appendChild(noteContentDiv);
  noteDiv.appendChild(noteBtnsDiv);
  noteContentDiv.appendChild(noteTitle);
  noteContentDiv.appendChild(noteDetails);
  noteBtnsDiv.appendChild(noteBtnsDivL);
  noteBtnsDiv.appendChild(noteBtnsDivR)
  noteBtnsDivL.appendChild(inbox);
  noteBtnsDivL.appendChild(scheduled);
  noteBtnsDivR.appendChild(priority);
  noteBtnsDivR.appendChild(cancel);
  noteBtnsDivR.appendChild(save);

  // classlists 
  container.classList.add('container');
  menu.classList.add('menu');
  menuLeft.classList.add('menuLeft');
  menuRight.classList.add('menuRight');
  burger.classList.add('burger');
  home.classList.add('home');
  search.classList.add('search');
  add.classList.add('add');
  help.classList.add('help');
  main.classList.add('main');
  sideBar.classList.add('sideBar');
  notes.classList.add('notes');
  innerNotes.classList.add('innerNotes');
  mainTitle.classList.add('mainTitle');
  mainTasks.classList.add('mainTasks');
  burger.classList.add('icons');
  home.classList.add('icons');
  add.classList.add('icons');
  help.classList.add('icons');
  title.classList.add('title');
  view.classList.add('icons-dark');
  container.classList.add('bgImgBlue');

  // classlists for new note popup
  noteDiv.classList.add('noteDiv');
  noteContentDiv.classList.add('noteContentDiv');
  noteBtnsDiv.classList.add('noteBtnsDiv');
  noteBtnsDivL.classList.add('noteBtnsDivInner');
  noteBtnsDivR.classList.add('noteBtnsDivInner');
  inbox.classList.add('icons');
  scheduled.classList.add('icons');
  priority.classList.add('icons');
  cancel.classList.add('icons');
  save.classList.add('icons');
  cancel.classList.add('btn');
  save.classList.add('btn');

  // appending images
  burger.appendChild(menuImg);
  home.appendChild(homeImg);
  add.appendChild(plusImg);
  help.appendChild(helpImg);
  view.appendChild(tuneImg);

  // appending text
  title.innerHTML = 'Inbox';
  cancel.innerHTML = 'Cancel';
  save.innerHTML = 'Save';

  // menu attributes
  search.setAttribute('placeholder', 'Search');

  // button attributes 
  burger.setAttribute('id', 'burgerBtn');
  sideBar.setAttribute('id', 'sideBar');
  add.setAttribute('id', 'addBtn');
  cancel.setAttribute('id', 'cancelBtn');
  save.setAttribute('id', 'saveBtn');

  return {};
}
