const data = require('../../data/TestData.json');

const checkContains = ( words ) => {
  const wordConstraints = {adjective:0, noun:0, verb:0, adverb:0};
  const wordConstraintsKeys = Object.keys(wordConstraints);
  words.map(word => {
    if (wordConstraintsKeys.includes(word.pos)) {
      wordConstraints[word.pos] += 1;
    }
  });

  wordConstraintsKeys.forEach(key => {
    if (wordConstraints[key] < 1) {
      return false;
    }
  })
  return true;
}

const getRandomWords = ( words, number ) => {
  const shuffled = words.sort(() => 0.5 - Math.random());
  const slice = shuffled.slice(0, number);

  return checkContains(slice) ? slice : getRandomWords(words, number);
}

module.exports = {
  getAllWords: (req, res) => {
    res.status(200).json( getRandomWords(data.wordList, 10) );
  }
}