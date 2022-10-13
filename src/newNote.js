import {index} from './index.js';

export default class newNote {  
    constructor(name) {
        this.id = index.length;
        this.name = 'Note ' + `${(index.length) + 1 }`;;
        this.tasks = [];
    }   

    newIndex = () => {
        index.push(this)
    }

    updateTitle = () => {
        console.log(index[`${this.id}`]);
        
    }
}