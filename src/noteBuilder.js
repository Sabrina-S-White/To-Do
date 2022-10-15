import {index} from './index.js';

export default function noteBuilder() {
    const main = document.getElementById('main')
        const noteDiv = document.createElement('div');
        const prioLight = document.createElement('div');
        const noteTextDiv = document.createElement('div');
        const noteBtnDiv = document.createElement('div');
        const noteId = document.createElement('div');
        const topic = document.createElement('input');
        const noteDone = document.createElement('button');
        const notePrioLow = document.createElement('button');
        const notePrioMid = document.createElement('button');
        const notePrioHigh = document.createElement('button');

        main.appendChild(noteDiv);
        noteDiv.appendChild(prioLight);
        prioLight.appendChild(noteId);
        noteDiv.appendChild(noteTextDiv);
        noteTextDiv.appendChild(topic);
        noteDiv.appendChild(noteBtnDiv);
        noteBtnDiv.appendChild(notePrioLow);
        noteBtnDiv.appendChild(notePrioMid);
        noteBtnDiv.appendChild(notePrioHigh);
        noteBtnDiv.appendChild(noteDone);

        noteDiv.classList.add('noteDiv');
        prioLight.classList.add('prioLight');
        noteTextDiv.classList.add('noteTextDiv');
        noteBtnDiv.classList.add('noteBtnDiv');
        noteDone.classList.add('doneBtn');
        notePrioLow.classList.add('prioBtnLow');
        notePrioMid.classList.add('prioBtnMid');
        notePrioHigh.classList.add('prioBtnHigh');
        noteId.classList.add('noteId');

        noteDone.setAttribute('id', 'doneBtn' + `${(index.length) - 1}`);
        notePrioLow.setAttribute('id', 'prioLowBtn' + `${(index.length) - 1}`);
        notePrioMid.setAttribute('id', 'prioMidBtn' + `${(index.length) - 1}`);
        notePrioHigh.setAttribute('id', 'prioHighBtn' + `${(index.length) - 1}`);
        noteId.setAttribute('id', 'noteId' + `${(index.length)}`);

        topic.setAttribute('type', 'text');
        topic.setAttribute('id', 'topic');
        topic.setAttribute('name', 'topic');
        topic.classList.add('topic');
        topic.setAttribute('maxlength', '40');

        topic.value = 'Note ' + `${index.length}`;
        noteId.innerHTML = `${index.length}`
        noteDone.innerHTML = 'Active';
        notePrioLow.innerHTML = 'Low';
        notePrioMid.innerHTML = 'Med';
        notePrioHigh.innerHTML = 'High';
    }