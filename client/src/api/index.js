import PoS from './PoS';

export const getWords = async () => await PoS.get("/words");

export const getRank = async (score) => await PoS.get("/rank", { score });
