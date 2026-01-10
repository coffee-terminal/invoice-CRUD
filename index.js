const express = require('express');
const app = express();

const fs = require('fs');

const port = 80;
app.use(express.static('public'));

app.get('/', (req, res) => {
    const saskaitosForm = fs.readFileSync('./html/invoice-form.html', 'utf8');

    res.send(saskaitosForm);
});

app.get('/invoice-list', (req, res) => {
    const saskaitosList = fs.readFileSync('./html/invoice-list.html', 'utf8');

    res.send(saskaitosList);
});

app.get('/invoice-edit', (req, res) => {
    const saskaitosEdit = fs.readFileSync('./html/invoice-edit.html', 'utf8');

    res.send(saskaitosEdit);
});

// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});
