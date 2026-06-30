const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/bd');

const app = express();

//Handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: false}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});