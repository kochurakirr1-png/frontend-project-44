const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = () => {
  const length = getRandomNumber(5, 10);     // длина прогрессии от 5 до 10
  const start = getRandomNumber(1, 50);      // первое число от 1 до 50
  const step = getRandomNumber(1, 10);       // шаг от 1 до 10
  const hiddenIndex = getRandomNumber(0, length - 1);  // индекс скрытого элемента

  const progression = [];
  for (let i = 0; i < length; i++) {
    const value = start + i * step;          // формула арифметической прогрессии
    progression.push(value);
  }

  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';           // заменяем элемент на ".."

  const question = progression.join(' ');     // склеиваем через пробел

  return { question, correctAnswer };
};

const getGameData = () => generateProgression();

export default getGameData;
