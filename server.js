const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

const mongoDBUri = 'mongodb+srv://Soni_kanishk:password@hpmsdb.jcmbh.mongodb.net/hpmsDB?retryWrites=true&w=majority'

mongoose.connect(mongoDBUri || 'mongodb://localhost/hpms',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log("Mongoose is connected!!!");
});

app.use(morgan('tiny'));

app.get('/api',(req, res) => {
    const data = {
        username: 'Kanishk Soni',
        age: 20
    };
    res.json(data);
});
app.get('/api/names',(req, res) => {
    const data = {
        username: 'Palak Yadav',
        age: 21
    };
    res.json(data);
});

app.listen(PORT,console.log(`Server is starting at ${PORT}`));
