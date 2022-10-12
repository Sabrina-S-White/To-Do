export default function pageLoad() {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const sideBar = document.createElement('div');
    const main = document.createElement('div');

    document.body.appendChild(container);
    container.appendChild(header);
    container.appendChild(sideBar);
    container.appendChild(main);

    container.classList.add('container');
    header.classList.add('header');
    header.classList.add('light');
    sideBar.classList.add('sidebar');
    sideBar.classList.add('light');
    main.classList.add('main');
    main.classList.add('light');
}