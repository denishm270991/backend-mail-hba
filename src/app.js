const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/mail',require('./routes/mail.routes'));

// stactic files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/foo', function (req, res) {
  return res.json('Hello, I am foo.')
});

module.exports = app;