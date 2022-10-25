import logo from './images/logo.png';
import plus from './images/plus.png';
import trash from './images/trash-can.png';
import github from './images/git.png';
import link from './images/linkedin.png';
import emailLink from './images/mail.png';
import burgerIcon from './images/menu.png';
import homeIcon from './images/home.png';
import helpIcon from './images/help.png'

export default function pageLoad() {
  const logoImg = new Image();
  const plusImg = new Image();
  const trashImg = new Image();
  const gitImg = new Image();
  const linkImg = new Image();
  const emailImg = new Image();
  const menuImg = new Image();
  const homeImg = new Image();
  const helpImg = new Image();
  logoImg.src = logo;
  plusImg.src = plus;
  trashImg.src = trash;
  gitImg.src = github;
  linkImg.src = link;
  emailImg.src = emailLink;
  menuImg.src = burgerIcon;
  homeImg.src = homeIcon;
  helpImg.src = helpIcon;

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
  const innerMain = document.createElement('div');
  const mainTitle = document.createElement('div');
  const mainTasks = document.createElement('div');
  const mainNew = document.createElement('div');

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
  main.appendChild(innerMain);
  innerMain.appendChild(mainTitle);
  innerMain.appendChild(mainTasks);
  innerMain.appendChild(mainNew);

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
  innerMain.classList.add('innerMain');
  mainTitle.classList.add('mainTitle');
  mainTasks.classList.add('mainTasks');
  mainNew.classList.add('mainNew');
  burger.classList.add('icons');
  home.classList.add('icons');
  add.classList.add('icons');
  help.classList.add('icons');

  burger.appendChild(menuImg);
  home.appendChild(homeImg);
  add.appendChild(plusImg);
  help.appendChild(helpImg);

//   const container = document.createElement('div');
//   const header = document.createElement('div');
//   const main = document.createElement('div');
//   const headerLeft = document.createElement('div');
//   const headerRight = document.createElement('div');
//   const footer = document.createElement('footer');
//   const newBtn = document.createElement('button');
//   const deleteBtn = document.createElement('button');
//   const headerText = document.createElement('h1');
//   const headerImg = document.createElement('div');
//   // Div creation for contact
//   const contactItemsDiv = document.createElement('div');
//   const contactItemsUL = document.createElement('ul');
//   const item1 = document.createElement('li');
//   const item2 = document.createElement('li');
//   const item3 = document.createElement('li');
//   const git = document.createElement('a');
//   const linked = document.createElement('a');
//   const email = document.createElement('a');
//   const btn = document.createElement('button');
//   const clearBtn = document.createElement('button');

//   document.body.appendChild(container);
//   container.appendChild(header);
//   container.appendChild(main);
//   container.appendChild(footer);
//   header.appendChild(headerLeft);
//   header.appendChild(headerRight);
//   headerLeft.appendChild(headerImg);
//   headerLeft.appendChild(headerText);
//   headerRight.appendChild(newBtn);
//   headerRight.appendChild(deleteBtn);

//   // footer
//   footer.appendChild(contactItemsDiv);
//   contactItemsDiv.appendChild(contactItemsUL);
//   contactItemsUL.appendChild(item1);
//   contactItemsUL.appendChild(item2);
//   contactItemsUL.appendChild(item3);
//   item1.appendChild(git);
//   item2.appendChild(linked);
//   item3.appendChild(email);
//   footer.appendChild(btn);
//   footer.appendChild(clearBtn);

//   container.classList.add('container');
//   header.classList.add('header');
//   header.classList.add('light');
//   main.classList.add('main');
//   main.classList.add('light');
//   footer.classList.add('footer');
//   footer.classList.add('light');
//   headerImg.classList.add('headerImg');
//   headerText.classList.add('headerText');
//   headerLeft.classList.add('headerLeft');
//   headerRight.classList.add('headerRight');
//   contactItemsDiv.classList.add('contactItemsDiv');

//   newBtn.setAttribute('id', 'newBtn');
//   deleteBtn.setAttribute('id', 'deleteBtn');
//   main.setAttribute('id', 'main');

//   newBtn.appendChild(plusImg);
//   headerImg.appendChild(logoImg);
//   deleteBtn.appendChild(trashImg);

//   headerText.innerHTML = 'To Do';

//   // footer
//   git.setAttribute('href', 'https://github.com/Sabrina-S-White');
//   linked.setAttribute(
//     'href',
//     'https://www.linkedin.com/in/sabrina-white-7ba594b7/',
//   );
//   email.setAttribute('href', 'mailto: sabrina.scherma@gmail.com');

//   git.appendChild(gitImg);
//   linked.appendChild(linkImg);
//   email.appendChild(emailImg);

//   btn.setAttribute('id', 'indexBtn');
//   clearBtn.setAttribute('id', 'clearStorage');

//   return {
//     main, deleteBtn, btn, clearBtn,
//   };
// }
}
