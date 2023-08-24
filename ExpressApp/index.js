const express = require('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const { authentication } = require('./middlewares/authMiddleware');

const app = express();

app.engine('hbs', handlebars.engine({
        extname: 'hbs',
}));

app.set('view engine', 'hbs')

app.use('/static', express.static('static'));
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(authentication)
app.use(routes);


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/pets')

app.listen(3000, () => console.log('Server is running on port 3000...'));