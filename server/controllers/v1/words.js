const data = require('../../data/TestData.json');

const getRandomWords = ( words, number ) => {
  const shuffled = words.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
}

module.exports = {
  getAllWords: (req, res) => {
    res.status(200).json( getRandomWords(data.wordList, 10) );
  }
}