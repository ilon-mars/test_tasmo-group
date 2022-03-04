const generateRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const generateChance = () => {
  const chance = generateRandomNumber(0, 1);

  return chance >= 0.9 ? 'error' : 'success';
};
