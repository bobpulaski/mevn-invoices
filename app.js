const express = require('express');
const config = require('config');
const mysql = require('mysql2');

const app = express();
const PORT = config.get('port') || 5000;

app.use('/api', require('./routes/api'));

// create the connection to database

app.listen(PORT, () => console.log(`Application has been started on ${PORT}...`));

// connection.end();

