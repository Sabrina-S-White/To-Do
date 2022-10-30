import { index } from './index.js';

export default function noteBuilder(title, details) {
  // creating elements for to dos
  const mainTasks = document.querySelector('.mainTasks');
  const taskDiv = document.createElement('div');
  const prioLight = document.createElement('div');
  const taskTextDiv = document.createElement('div');
  const taskBtnDiv = document.createElement('div');
  const checkDiv = document.createElement('div');
  const trashBtn = document.createElement('button');
  const taskTitle = document.createElement('p');
  const taskDetails = document.createElement('p');

  // appending elements to document
  mainTasks.appendChild(taskDiv);
  taskDiv.appendChild(prioLight);
  taskDiv.appendChild(taskTextDiv);
  taskDiv.appendChild(taskBtnDiv);
  taskTextDiv.appendChild(taskTitle);
  taskTextDiv.appendChild(taskDetails);
  taskBtnDiv.appendChild(checkDiv);
  checkDiv.appendChild(trashBtn);

  // adding classlists
  taskDiv.classList.add('taskDiv');
  prioLight.classList.add('prioLight');
  taskTextDiv.classList.add('taskTextDiv');
  taskBtnDiv.classList.add('taskBtnDiv');
  taskTitle.classList.add('taskTitle');
  taskDetails.classList.add('taskDetails');
  checkDiv.classList.add('checkDiv');
  trashBtn.classList.add('checkBox');

  // adding attributes
  trashBtn.setAttribute('id', 'trashBtn' + `${index.length - 1}`);

  // note content
  taskTitle.innerHTML = `${title}`;
  taskDetails.innerHTML = `${details}`;
  trashBtn.innerHTML = 'Delete';

  // mark as done
  const taskTitles = document.querySelectorAll('.taskTitle');
  taskTitles.forEach((title) => {
    trashBtn.addEventListener('click', () => {
      index.forEach((ind) => {
        if ((ind.name = title.innerHTML)) {
          index.splice(index.indexOf(ind), 1);
          taskDiv.removeChild(taskDiv.firstChild);
          taskDiv.remove();
        }
      });
    });
  });

  prioLight.addEventListener('click', () => {
    prioLight.classList.toggle('prioLightHigh');
    console.log(taskTitle.innerHTML);
  });

  taskDiv.addEventListener('click', () => {});

  return {};
}
