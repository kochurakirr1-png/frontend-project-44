const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = num1 + ' ' + operator + ' ' + num2;
  const correctAnswer = String(calculate(num1, num2, operator));

  return { question, correctAnswer };
};

export default getGameData;
