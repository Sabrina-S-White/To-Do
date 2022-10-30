// image imports
import logo from './images/logo.png';
import plus from './images/plus.png';
import github from './images/git.png';
import link from './images/linkedin.png';
import emailLink from './images/mail.png';
import burgerIcon from './images/menu.png';
import homeIcon from './images/home.png';
import tune from './images/tune.png';
import blueBG from './images/bg-imgs/blue.jpg';
import buildingBG from './images/bg-imgs/building.jpg';
import modBG from './images/bg-imgs/mod.jpg';
import sunBG from './images/bg-imgs/sun.jpg';

export default function pageLoad() {
  // image handling
  const logoImg = new Image();
  const plusImg = new Image();
  const gitImg = new Image();
  const linkImg = new Image();
  const emailImg = new Image();
  const menuImg = new Image();
  const homeImg = new Image();
  const tuneImg = new Image();
  const blueImg = new Image();
  const buildingImg = new Image();
  const modImg = new Image();
  const sunImg = new Image();
  logoImg.src = logo;
  plusImg.src = plus;
  gitImg.src = github;
  linkImg.src = link;
  emailImg.src = emailLink;
  menuImg.src = burgerIcon;
  homeImg.src = homeIcon;
  tuneImg.src = tune;
  blueImg.src = blueBG;
  buildingImg.src = buildingBG;
  modImg.src = modBG;
  sunImg.src = sunBG;

  //date-fns initialization
  const fns = require('date-fns');
  const date = fns.format(new Date(), 'MM-dd-yyyy');

  // elements for page load
  const container = document.createElement('div');
  const masc = document.createElement('div');

  // elements for menu bar
  const menu = document.createElement('div');
  const menuLeft = document.createElement('div');
  const menuRight = document.createElement('div');
  const burger = document.createElement('a');
  const home = document.createElement('a');
  const search = document.createElement('input');
  const add = document.createElement('a');

  // elements for sidebar
  const githubList = document.createElement('li');
  const linkedinList = document.createElement('li');
  const emailList = document.createElement('li');
  const git = document.createElement('a');
  const linked = document.createElement('a');
  const email = document.createElement('a');

  // elements for main section
  const main = document.createElement('div');
  const sideBar = document.createElement('div');
  const notes = document.createElement('div');
  const innerNotes = document.createElement('div');
  const mainTitle = document.createElement('div');
  const mainTitleRight = document.createElement('div');
  const mainTasks = document.createElement('div');

  // elements for main title content
  const title = document.createElement('p');
  const view = document.createElement('a');

  // elements for new note popup
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

  // elements for theme change popup
  const themePopup = document.createElement('div');
  const blueBtn = document.createElement('button');
  const buildingBtn = document.createElement('button');
  const modBtn = document.createElement('button');
  const sunBtn = document.createElement('button');

  // appending elements to document
  document.body.appendChild(container);
  document.body.appendChild(masc);
  document.body.appendChild(themePopup);
  container.appendChild(menu);
  container.appendChild(main);
  menu.appendChild(menuLeft);
  menu.appendChild(menuRight);
  sideBar.appendChild(githubList);
  githubList.appendChild(git);
  sideBar.appendChild(linkedinList);
  linkedinList.appendChild(linked);
  sideBar.appendChild(emailList);
  emailList.appendChild(email);
  menuLeft.appendChild(burger);
  menuLeft.appendChild(home);
  menuLeft.appendChild(search);
  main.appendChild(sideBar);
  main.appendChild(notes);
  notes.appendChild(innerNotes);
  innerNotes.appendChild(mainTitle);
  innerNotes.appendChild(mainTasks);

  // appending content to mainTitle
  mainTitle.appendChild(title);
  mainTitle.appendChild(mainTitleRight);
  mainTitleRight.appendChild(add);
  mainTitleRight.appendChild(view);

  // appending elements to new note popup
  document.body.appendChild(noteDiv);
  noteDiv.appendChild(noteContentDiv);
  noteDiv.appendChild(noteBtnsDiv);
  noteContentDiv.appendChild(noteTitle);
  noteContentDiv.appendChild(noteDetails);
  noteBtnsDiv.appendChild(noteBtnsDivL);
  noteBtnsDiv.appendChild(noteBtnsDivR);
  noteBtnsDivL.appendChild(inbox);
  noteBtnsDivL.appendChild(scheduled);
  noteBtnsDivR.appendChild(priority);
  noteBtnsDivR.appendChild(cancel);
  noteBtnsDivR.appendChild(save);

  // appending elements to theme popup
  sideBar.appendChild(blueBtn);
  sideBar.appendChild(buildingBtn);
  sideBar.appendChild(modBtn);
  sideBar.appendChild(sunBtn);

  // classlists
  container.classList.add('container');
  masc.classList.add('masc');
  menu.classList.add('menu');
  menuLeft.classList.add('menuLeft');
  menuRight.classList.add('menuRight');
  burger.classList.add('burger');
  burger.classList.add('noselect');
  home.classList.add('home');
  home.classList.add('noselect');
  search.classList.add('search');
  add.classList.add('add');
  add.classList.add('noselect');
  main.classList.add('main');
  sideBar.classList.add('sideBar');
  notes.classList.add('notes');
  innerNotes.classList.add('innerNotes');
  mainTitle.classList.add('mainTitle');
  mainTitleRight.classList.add('mainTitleRight');
  mainTasks.classList.add('mainTasks');
  burger.classList.add('icons');
  home.classList.add('icons');
  add.classList.add('icons');
  title.classList.add('title');
  title.classList.add('noselect');
  view.classList.add('icons-dark');
  view.classList.add('noselect');
  container.classList.add('bgImgBlue');
  githubList.classList.add('sidebarItem');
  githubList.classList.add('hide');
  linkedinList.classList.add('sidebarItem');
  linkedinList.classList.add('hide');
  emailList.classList.add('sidebarItem');
  emailList.classList.add('hide');
  themeDiv.classList.add('themeDiv');
  blueBtn.classList.add('themeBtn');
  buildingBtn.classList.add('themeBtn');
  modBtn.classList.add('themeBtn');
  sunBtn.classList.add('themeBtn');

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
  noteTitle.classList.add('noteTitle');
  noteDetails.classList.add('noteDetails');

  // appending images
  burger.appendChild(menuImg);
  home.appendChild(homeImg);
  add.appendChild(plusImg);
  view.appendChild(tuneImg);
  git.appendChild(gitImg);
  linked.appendChild(linkImg);
  email.appendChild(emailImg);

  // appending text
  title.innerHTML = 'Today, <br>' + `${date}`;
  cancel.innerHTML = 'Cancel';
  save.innerHTML = 'Save';

  // page attributes
  search.setAttribute('placeholder', 'Search');
  noteTitle.setAttribute('placeholder', 'New Note');
  noteDetails.setAttribute('placeholder', 'Description');
  noteDetails.setAttribute('id', 'noteDetails');
  noteDetails.setAttribute('maxlength', 150);
  noteDiv.setAttribute('id', 'popup');
  sideBar.setAttribute('id', 'sideBar');
  git.setAttribute('href', 'https://github.com/Sabrina-S-White');
  linked.setAttribute('href', 'https://www.linkedin.com/in/sabrina-white-7ba594b7/');
  email.setAttribute('href', 'mailto: sabrina.scherma@gmail.com');

  // button attributes
  burger.setAttribute('id', 'burgerBtn');
  add.setAttribute('id', 'addBtn');
  cancel.setAttribute('id', 'cancelBtn');
  save.setAttribute('id', 'saveBtn');
  view.setAttribute('id', 'viewBtn');
  blueBtn.setAttribute('id', 'blueBtn');
  buildingBtn.setAttribute('id', 'buildingBtn');
  modBtn.setAttribute('id', 'modBtn');
  sunBtn.setAttribute('id', 'sunBtn');

  return {};
}
