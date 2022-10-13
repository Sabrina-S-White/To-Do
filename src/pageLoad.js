export default function pageLoad() {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const sideBar = document.createElement('div');
    const main = document.createElement('div');
    const folderBtn = document.createElement('button');

    document.body.appendChild(container);
    container.appendChild(header);
    container.appendChild(sideBar);
    container.appendChild(main);
    header.appendChild(folderBtn);

    container.classList.add('container');
    header.classList.add('header');
    header.classList.add('light');
    sideBar.classList.add('sidebar');
    sideBar.classList.add('light');
    main.classList.add('main');
    main.classList.add('light');
    folderBtn.classList.add('btn');
    
    folderBtn.setAttribute('id', 'btn');
    main.setAttribute('id', 'main');

    folderBtn.innerHTML = 'btn';

    return {main};
}