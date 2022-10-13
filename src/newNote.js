import {index} from './index.js';

export default class newNote {  
    constructor(name) {
        this.id = index.length;
        this.name = name;
        this.tasks = [];
    }   

    newIndex = () => {
        index.push(this)
    }

}