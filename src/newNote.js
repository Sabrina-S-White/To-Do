import {index} from './index.js';

export default class newNote {  
    constructor(id, name, value) {
        this.id = index.length;
        this.name = 'Note ' + `${(index.length) + 1 }`;
        this.value = 'OFF';
    }   

    newIndex = () => {
        index.push(this)
    }

    doneCheck = () => {
        const btns = document.querySelectorAll('.doneBtn');
        for (const btn of btns) {
            btn.addEventListener('click', () => {
              btn.value=(btn.value=="ON")?"OFF":"ON";  
              if (btn.value == 'ON') {
                this.value = 'ON';
              } else {
                this.value = 'OFF'
              }
            })
            
        }
        
    }

    doneStyle = () => {
        const btns = document.querySelectorAll('.doneBtn');
        for (const btn of btns) {
            btn.addEventListener('click', () => {
                if (this.value == 'ON') {
                    btn.innerHTML = 'Done';
                    btn.style.backgroundColor = 'rgb(var(--red))';
                    btn.style.color = '#fff';
                } else {
                    btn.innerHTML = 'Active';
                    btn.style.backgroundColor = 'rgb(var(--brightGreen))';
                    btn.style.color = 'black';
                } 
            })
        }
    }
}