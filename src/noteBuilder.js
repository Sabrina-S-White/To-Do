import {index} from './index.js';

export default function noteBuilder() {
    const main = document.getElementById('main')
        const id = index.length - 1;
        const noteDiv = document.createElement('div');
        const prioLight = document.createElement('div');
        const noteTextDiv = document.createElement('div');
        const noteBtnDiv = document.createElement('div');
        const checkDiv = document.createElement('div');
        const checkBox = document.createElement('input');
        const topic = document.createElement('input');
        const noteSave = document.createElement('button');
        const notePrioLow = document.createElement('button');
        const notePrioMid = document.createElement('button');
        const notePrioHigh = document.createElement('button');

        main.appendChild(noteDiv);
        noteDiv.appendChild(prioLight);
        prioLight.appendChild(checkDiv);
        checkDiv.appendChild(checkBox);
        noteDiv.appendChild(noteTextDiv);
        noteTextDiv.appendChild(topic);
        noteDiv.appendChild(noteBtnDiv);
        noteBtnDiv.appendChild(notePrioLow);
        noteBtnDiv.appendChild(notePrioMid);
        noteBtnDiv.appendChild(notePrioHigh);
        noteBtnDiv.appendChild(noteSave);

        noteDiv.classList.add('noteDiv');
        prioLight.classList.add('prioLight');
        noteTextDiv.classList.add('noteTextDiv');
        noteBtnDiv.classList.add('noteBtnDiv');
        noteSave.classList.add('saveBtn');
        notePrioLow.classList.add('prioBtnLow');
        notePrioMid.classList.add('prioBtnMid');
        notePrioHigh.classList.add('prioBtnHigh');

        noteSave.setAttribute('id', 'saveBtn' + `${(index.length) - 1}`);
        notePrioLow.setAttribute('id', 'prioLowBtn' + `${(index.length) - 1}`);
        notePrioMid.setAttribute('id', 'prioMidBtn' + `${(index.length) - 1}`);
        notePrioHigh.setAttribute('id', 'prioHighBtn' + `${(index.length) - 1}`);

        topic.setAttribute('type', 'text');
        topic.setAttribute('id', 'topic');
        topic.setAttribute('name', 'topic');
        topic.classList.add('topic');
        topic.setAttribute('maxlength', '40');

        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'check');
        checkBox.setAttribute('name', 'check');
        checkBox.classList.add('checkBox')

        topic.value = 'Note ' + `${index.length}`;
        noteSave.innerHTML = 'Save';
        notePrioLow.innerHTML = 'Low';
        notePrioMid.innerHTML = 'Med';
        notePrioHigh.innerHTML = 'High';

//Updates the name attribute of index to store topic values
        noteSave.addEventListener('click', () => {
            index[id].name = topic.value;
        })

        topic.addEventListener('focusout', () => {
            index[id].name = topic.value;
        })

//Deletes to-dos that are checked
        const deleteBtn = document.getElementById('deleteBtn');
        deleteBtn.addEventListener('click', () => {
            if (checkBox.checked) {
                while (noteDiv.firstChild) {
                    noteDiv.removeChild(noteDiv.firstChild);
                    noteDiv.remove();
                }
                index.splice(id, 1)
            } 
        }
    )

//Changes color of prioLight depending on which button is clicked
    notePrioLow.addEventListener('click', () => {
        prioLight.style.backgroundColor = 'rgb(var(--lightGreen))'
    })

    notePrioMid.addEventListener('click', () => {
        prioLight.style.backgroundColor = 'rgb(var(--lightYellow))'
    });

    notePrioHigh.addEventListener('click', () => {
        prioLight.style.backgroundColor = 'rgb(var(--lightPink))'
    })
}