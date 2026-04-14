import readlineSync from 'readline-sync'

function isEven(number) {
  return number % 2 === 0
}

function playGame() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + name + '!')
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0
  const roundsCount = 3

  while (correctAnswers < roundsCount) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    let correctAnswer
    if (isEven(randomNumber)) {
      correctAnswer = 'yes'
    }
    else {
      correctAnswer = 'no'
    }

    console.log('Question: ' + randomNumber)
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

export default playGame
