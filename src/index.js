import './style.css';
import pageLoad from './pageLoad';
import newNote from './newNote';
import noteBuilder from './noteBuilder';

export let index = [];

window.onload = () => {
    pageLoad();

    const btn = document.getElementById('newBtn');
    btn.addEventListener('click', () => {
        const x = new newNote();
        x.newIndex();
        noteBuilder();
    });
}


