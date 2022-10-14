import {index} from './index.js';

export default class newNote {  
    constructor(name) {
        this.id = index.length;
        this.name = 'Note ' + `${(index.length) + 1 }`;;
    }   

    newIndex = () => {
        index.push(this)
    }

    done = () => {
    
    }
}