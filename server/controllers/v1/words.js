const data = require('../../data/TestData.json');

module.exports = {
  getAllWords: (req, res) => {
    res.status(200).json(data);
  }
}