import {index} from './index.js';

export default function doneNote() {
    const doneBtns = document.querySelectorAll('.doneBtn');
    for (const btn of doneBtns) {
        btn.addEventListener('click', () => {
            let fullID = btn.id;
            let numID = fullID.replace(/\D/g, "");
            let indexID = `${(index.length) - 1}`
            console.log(index)
            if (numID == indexID) {
                index.splice(1, 1);
                console.log(index);
            }
        })
    }
}