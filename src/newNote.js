import { index } from './index.js';

export default class newNote {
  constructor() {
    this.id = index.length;
    this.name = `note${index.length + 1}`;
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
