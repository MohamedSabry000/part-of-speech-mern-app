const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const wordsRouter = require('./routes/v1/words');
const rankRouter = require('./routes/v1/rank');

require('dotenv').config();
const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
 }

app.use('/api/v1/words', wordsRouter);
app.use('/api/v1/rank', rankRouter);

app.all('*', (req, res) => {
  res.json({
      status: 'failure',
      message: 'wrong url'
  })
});

app.use((err, req, res, next) => {
  // global error handler
  res.json(err);
});


app.listen(PORT || 5050, () => {
  console.log('server is running');
});