import './style.css';
import pageLoad from './pageLoad';
import newNote from './newNote';
import noteBuilder from './noteBuilder';
import doneNote from './doneNote';
import doneCheck from './newNote';

export let index = [];

window.onload = () => {
    pageLoad();

    const btn = document.getElementById('newBtn');
    btn.addEventListener('click', () => {
        const x = new newNote();
        x.newIndex();
        noteBuilder();
        doneNote();
        x.doneCheck();
        x.doneStyle();
        console.log(index);
    });
}


