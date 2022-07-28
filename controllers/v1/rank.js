const data = require('../../data/TestData.json');

const getRank = ( score, scores ) =>{
  const below = scores.filter(s => s < score.score);
  const percentage = (below.length/scores.length) * 100;
  return {rank: Number(percentage.toFixed(2))};
}


module.exports = {
  getRank: (req, res) => {
    const score = req.body;
    console.log(score);
    res.status(200).json( getRank(score, data.scoresList) );
  }
}