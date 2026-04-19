const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = []
  for (let i = 0; i < length; i++) {
    const value = start + i * step
    progression.push(value)
  }

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return { question, correctAnswer }
}

const getGameData = () => generateProgression()

export default getGameData
