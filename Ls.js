import { v4 as uuidv4 } from 'uuid';

class Ls {
    constructor(key) {
        this.key = key; // prisimename key
        this.readLocalStorage(); // paleidziame metoda readLocalStorage
    }

    readLocalStorage = (_) => {
        let data = localStorage.getItem(this.key);
        if (null === data) {
            this.list = [];
        } else {
            this.list = JSON.parse(data);
        }
    };

    writeLocalStorage = (_) => {
        let data = JSON.stringify(this.list);
        localStorage.setItem(this.key, data);
    };

    Store = (data) => {
        const id = uuidv4();
        const dataToStore = {
            ...data,
            id,
        };
        this.list.push(dataToStore);
        this.writeLocalStorage();
    };
}

export default Ls;
