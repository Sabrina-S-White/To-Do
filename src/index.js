import './style.css';
import pageLoad from './pageLoad';
import newNote from './newNote';
import noteBuilder from './noteBuilder';
import {saveToLocal, getTasks, clearLocalStorage} from './localStorage'

export let index = [];

window.onload = () => {
    pageLoad();

    const indexBtn = document.getElementById('indexBtn');
    const btn = document.getElementById('newBtn');
    const clearBtn = document.getElementById('clearStorage');
    btn.addEventListener('click', () => {
        const x = new newNote();
        x.newIndex();
        noteBuilder();
    });

    indexBtn.addEventListener('click', () => {
        console.log(index);
    })

    clearBtn.addEventListener('click', () => {
        clearLocalStorage();
    })
}


