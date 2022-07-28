const express = require('express');
const rankRouter = express.Router();

const { getRank } = require('../../controllers/v1/rank');

rankRouter.route('/').post(getRank)
module.exports = rankRouter;
