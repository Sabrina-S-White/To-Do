import { index } from './index.js';

export default function noteBuilder() {
  // creating elements for to dos
  const mainTasks = document.querySelector('.mainTasks');
  const taskDiv = document.createElement('div');
  const prioLight = document.createElement('div');
  const prioBtn = document.createElement('button');
  const taskTextDiv = document.createElement('div');
  const taskBtnDiv = document.createElement('div');
  const checkP = document.createElement('p');
  const checkDiv = document.createElement('div');
  const checkBox = document.createElement('input');
  const taskTitle = document.createElement('input');
  const taskDetails = document.createElement('textarea');
  const id = index.length - 1;

  // appending elements to document
  mainTasks.appendChild(taskDiv);
  taskDiv.appendChild(prioLight);
  taskDiv.appendChild(taskTextDiv);
  taskDiv.appendChild(taskBtnDiv);
  prioLight.appendChild(prioBtn);
  taskTextDiv.appendChild(taskTitle);
  taskTextDiv.appendChild(taskDetails);
  taskBtnDiv.appendChild(checkP);
  taskBtnDiv.appendChild(checkDiv);
  checkDiv.appendChild(checkBox);

  // adding classlists
  taskDiv.classList.add('taskDiv');
  prioLight.classList.add('prioLight');
  taskTextDiv.classList.add('taskTextDiv');
  taskBtnDiv.classList.add('taskBtnDiv');
  prioBtn.classList.add('prioBtn');
  taskTitle.classList.add('taskTitle');
  taskDetails.classList.add('taskDetails');
  checkDiv.classList.add('checkDiv');
  checkBox.classList.add('checkBox');

  // adding attributes
  prioBtn.setAttribute('id', 'prioBtn' + `${index.length - 1}`);
  prioBtn.innerHTML = 'Prio'
  checkBox.setAttribute('id', 'checkBox' + `${index.length - 1}`);
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('name', 'check');
  checkP.innerHTML = 'Done'

  const trashBtn = document.getElementById('deleteBtn');
  trashBtn.addEventListener('click', () => {
    // if (checkBox.checked) {
    //   while (taskDiv.firstChild) {
    //     taskDiv.removeChild(taskDiv.firstChild);
    //     taskDiv.remove();
    //   }
      for (let i = 0; i < index.length; i++) {
        console.log(i)
        // if (index[i].checkBox.checked) {
        //   while (taskDiv.firstChild) {
        //     taskDiv.removeChild(taskDiv.firstChild);
        //     taskDiv.remove();
        //   }
        // }
      }
    });

  // Need to figure out how to use index instead of id, then use that here
  // const prioBtnChange = document.getElementById('prioBtn');
  //   prioBtnChange.addEventListener('click', () => {
  //   prioLight.classList.toggle('prioHigh');
  // })
}
