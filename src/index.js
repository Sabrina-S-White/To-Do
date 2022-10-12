import './style.css';
import pageLoad from './pageLoad';
import makeFolder from './folderMaker';
import newNote from './newNote';

export let index = [];

window.onload = () => {
    pageLoad();

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        newNote();
    })
}

