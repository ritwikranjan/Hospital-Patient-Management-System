const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

app.get('/api',(req, res) => {
    const data = {
        username: 'Kanishk Soni',
        age: 20
    };
    res.json(data);
});
app.get('/api/name',(req, res) => {
    const data = {
        username: 'Palak Yadav',
        age: 21
    };
    res.json(data);
});

app.listen(PORT,console.log(`Server is starting at ${PORT}`));
