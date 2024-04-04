const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


/* const counterPages = {
    main: 0, 
    about: 0
}; */

const jsonPath = path.join(__dirname, 'counters.json');

const counters = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

app.get('/', (req, res) => {
    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${counters.main}</p><a href="/about">Ссылка на страницу about</a>`);
    counters.main++;
    fs.writeFileSync(jsonPath, JSON.stringify(counters));
});

app.get('/about', (req, res) => {
    res.send(`<h1>Страница about</h1><p>Просмотров: ${counters.about}</p><a href="/">Ссылка на страницу / /</a>`);
    counters.about++;
    fs.writeFileSync(jsonPath, JSON.stringify(counters));
});

app.listen(3000);

/* fs.writeFile(jsonPath, JSON.stringify(counterPages), (err) => {
    if (err) {
        console.error(err);         
    } else {
        console.log('The file was saved');
    }
}); */

