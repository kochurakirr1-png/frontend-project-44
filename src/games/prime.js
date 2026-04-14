const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomNumber();
  const question = String(number);
  let correctAnswer;
  if (isPrime(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return { question, correctAnswer };
};

export default getGameData;
