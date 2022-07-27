const express = require('express');
const wordsRouter = express.Router();

const { getRandomWords } = require('../../controllers/v1/words');

wordsRouter.route('/').get(getRandomWords)
module.exports = wordsRouter;
