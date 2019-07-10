const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(require('cors')());

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
require('dotenv').config();

mongoose.connect(process.env.MONGODBURI, { useNewUrlParser: true });

mongoose.connection.once('connected', () => {
  console.log('Connected to DB');
}).on('error', err => console.log('Error connecting to DB: ', err));

app.get('/health', (req, res, next) => res.status(200).json({ status: 200 }));
app.use('/', require('./route/asset'));
app.use('/', require('./route/task'));
app.use('/', require('./route/worker'));

app.use((err, req, res, next) => {
  if (err) return res.status(500).json({ err });
});

app.listen(process.env.PORT || 3000, () => console.log('serving....'));
