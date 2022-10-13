import {index} from './index.js';

export default function noteBuilder() {
    const main = document.getElementById('main')
        const noteDiv = document.createElement('div');
        const noteInnerDiv = document.createElement('div');
        const noteTextDiv = document.createElement('div');
        const noteBtnDiv = document.createElement('div');
        const prioBtnDiv = document.createElement('div');
        const prioBtnSubdiv = document.createElement('div');
        const noteTitle = document.createElement('h2');
        const noteBody = document.createElement('p');
        const prioP = document.createElement('p');
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
        noteBtnDiv.appendChild(prioBtnDiv);
        prioBtnDiv.appendChild(prioP);
        prioBtnDiv.appendChild(prioBtnSubdiv)
        prioBtnSubdiv.appendChild(notePrioLow);
        prioBtnSubdiv.appendChild(notePrioMid);
        prioBtnSubdiv.appendChild(notePrioHigh);

        noteDiv.classList.add('noteDiv');
        noteInnerDiv.classList.add('noteInnerDiv');
        noteTextDiv.classList.add('noteTextDiv');
        noteBtnDiv.classList.add('noteBtnDiv');
        prioBtnDiv.classList.add('prioBtnDiv');
        prioBtnSubdiv.classList.add
        noteDone.classList.add('doneBtn');
        notePrioLow.classList.add('prioBtn');
        notePrioMid.classList.add('prioBtn');
        notePrioHigh.classList.add('prioBtn');

        noteDone.setAttribute('id', 'doneBtn');
        notePrioLow.setAttribute('id', 'prioLowBtn');
        notePrioMid.setAttribute('id', 'prioMidBtn');
        notePrioHigh.setAttribute('id', 'prioHighBtn');

        noteTitle.setAttribute('contentEditable', 'true');
        noteBody.setAttribute('contentEditable', 'true');

        noteTitle.innerHTML = 'Note ' + `${index.length}`;
        noteDone.innerHTML = 'Done';
        notePrioLow.innerHTML = 'Low';
        notePrioMid.innerHTML = 'Med';
        notePrioHigh.innerHTML = 'High';
        prioP.innerHTML = 'Priority'
    }