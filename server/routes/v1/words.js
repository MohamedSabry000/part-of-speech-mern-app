const express = require('express');
const wordsRouter = express.Router();

const { getAllWords } = require('../../controllers/v1/words');

wordsRouter.route('/').get(getAllWords)
module.exports = wordsRouter;
