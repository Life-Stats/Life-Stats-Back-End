const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/main', require('./controllers/MainData'));
app.use('/api/v1/holiday', require('./controllers/Holiday'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
