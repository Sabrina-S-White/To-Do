import { index } from './index.js';

export default class newNote {
  constructor(name, description) {
    this.id = index.length;
    this.name = name;
    this.description = description;
    this.value = 'OFF';
  }

  newIndex = () => {
    index.push(this);
  };
  
  updateNote = () => {
    const toDos = document.querySelectorAll('.topic');
    for (const e of toDos) {
      e.addEventListener('click', () => {
        console.log('ok');
      });
    }
  };
}
