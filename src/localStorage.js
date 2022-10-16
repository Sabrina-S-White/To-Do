import {index} from './index';
import newNote from './newNote';

class newStorage {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value
    }
}

const saveToLocal = (task) => {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    for (let i = 0; i < index.length; i++) {
        const item = new newStorage(index[i].id, index[i].name, index[i].value)
        tasks.push(item)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // tasks.push(task);
    // localStorage.setItem('tasks', JSON.stringify(tasks))
}

const getTasks = () => {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(task => {
        const noteLoad = new newNote(task.id, task.name, task.value)
        index.push(noteLoad);
    })
}

const clearLocalStorage = (task) => {
    localStorage.clear();
    
    // let tasks;
    // if(localStorage.getItem('tasks') === null) {
    //     tasks = [];
    // } else {  
    //     tasks = JSON.parse(localStorage.getItem('tasks'))
    // }
    // // let index = task.parentElement.parentElement.children[1].textContent;
    // for(let x in tasks) {
    //     if(tasks[x]._title === index) {
    //         tasks.splice(x,1)
    //     }
    // }
    // localStorage.setItem('tasks', JSON.stringify(tasks))
}

export {saveToLocal, getTasks, clearLocalStorage}