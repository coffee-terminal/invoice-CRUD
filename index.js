const express = require('express');
const app = express();

const fs = require('fs');

const port = 80;
app.use(express.static('public'));

app.get('/', (req, res) => {
    const saskaitosHTML = fs.readFileSync('./html/index.html', 'utf8');

    res.send(saskaitosHTML);
});

// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
    console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});
