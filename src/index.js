import readlineSync from 'readline-sync'

const roundsCount = 3

export const runGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + name + '!')
  console.log(gameDescription)

  let correctAnswers = 0

  while (correctAnswers < roundsCount) {
    const { question, correctAnswer } = getGameData()

    console.log('Question: ' + question)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers++
    }
    else {
      console.log('\'' + userAnswer + '\' is wrong answer ;(. Correct answer was \'' + correctAnswer + '\'.')
      console.log('Let\'s try again, ' + name + '!')
      return
    }
  }

  console.log('Congratulations, ' + name + '!')
}
