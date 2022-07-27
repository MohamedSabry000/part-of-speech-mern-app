const express = require('express');
const rankRouter = express.Router();

const { getRank } = require('../../controllers/v1/rank');

rankRouter.route('/').get(getRank)
module.exports = rankRouter;
