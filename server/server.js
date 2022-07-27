const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

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