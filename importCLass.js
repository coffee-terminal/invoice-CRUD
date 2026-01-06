import Ls from './Ls';

console.log('invoices list');

let LS; // siam kintamajam priskirsime importuota klase  is Ls js

const init = (meta) => {
    LS = new Ls('invoices'); // naujai klasei priskiriamas KEY name

    const dataMeta = meta;

    LS.Store(dataMeta);
    render(LS.list);
};

const render = (list) => {
    console.log(this);
    const listBin = document.querySelector('[data-colors-list]');
    const listRowTemplate = document.querySelector('[data-list-template]');
    listBin.innerHTML = '';
    list.forEach((animal) => {
        //create
        const rowHtml = listRowTemplate.content.cloneNode(true);
        const animalId = rowHtml.querySelector('[data-animal-id]');
        animalId.innerHTML = `${animal.gyvunas} ${animal.svoris} kg `;

        listBin.appendChild(rowHtml);
    });
};

init();
