import {index} from './index.js';

export default function noteBuilder() {
    const main = document.getElementById('main')
    for (let i = 0; i < index.length; i++) {
        const noteDiv = document.createElement('div');
        const noteInnerDiv = document.createElement('div');
        const noteTextDiv = document.createElement('div');
        const noteBtnDiv = document.createElement('div');
        const noteTitle = document.createElement('h2');
        const noteBody = document.createElement('p');
        const noteDone = document.createElement('button');
        const notePrioLow = document.createElement('button');
        const notePrioMid = document.createElement('button');
        const notePrioHigh = document.createElement('button');

        main.appendChild(noteDiv);
        noteDiv.appendChild(noteInnerDiv);
        noteInnerDiv.appendChild(noteTextDiv);
        noteInnerDiv.appendChild(noteBtnDiv);
        noteTextDiv.appendChild(noteTitle);
        noteTextDiv.appendChild(noteBody);
        noteBtnDiv.appendChild(noteDone);
        noteBtnDiv.appendChild(notePrioLow);
        noteBtnDiv.appendChild(notePrioMid);
        noteBtnDiv.appendChild(notePrioHigh);

        noteDiv.classList.add('noteDiv');
        noteInnerDiv.classList.add('noteInnerDiv');
        noteTextDiv.classList.add('noteTextDiv');
        noteBtnDiv.classList.add('noteBtnDiv');
        noteDone.classList.add('doneBtn');
        notePrioLow.classList.add('prioBtn');
        notePrioMid.classList.add('prioBtn');
        notePrioHigh.classList.add('prioBtn');

        noteDiv.classList.add(index[i].id);
        noteInnerDiv.classList.add(index[i]);
        noteTextDiv.classList.add(index[i]);
        noteBtnDiv.classList.add(index[i]);
        noteTitle.classList.add(index[i]);
        noteBody.classList.add(index[i]);
        noteDone.classList.add(index[i]);
        notePrioLow.classList.add(index[i]);
        notePrioMid.classList.add(index[i]);
        notePrioHigh.classList.add(index[i]);

        noteDone.setAttribute('id', 'doneBtn');
        notePrioLow.setAttribute('id', 'prioLowBtn');
        notePrioMid.setAttribute('id', 'prioMidBtn');
        notePrioHigh.setAttribute('id', 'prioHighBtn');
    }
}