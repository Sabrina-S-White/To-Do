// eslint-disable-next-line import/no-cycle, import/extensions
import { index } from './index.js';

export default class newNote {
  constructor(id, name, value) {
    this.id = index.length;
    this.name = `note${index.length + 1}`;
    this.value = 'OFF';
  }

  newIndex = () => {
    index.push(this);
  };

  // eslint-disable-next-line class-methods-use-this
  updateNote = () => {
    const toDos = document.querySelectorAll('.topic');
    // eslint-disable-next-line no-restricted-syntax
    for (const e of toDos) {
      e.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('ok');
      });
    }
  };
}
