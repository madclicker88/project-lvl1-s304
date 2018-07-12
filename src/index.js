import readlineSync from 'readline-sync';

const rounds = 3;

const base = (game, rule) => {
  console.log('Welcome to the Brain Games! ');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const round = (roundNum) => {
    if (roundNum === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { question, answer } = game();
    const userAnswer = readlineSync.question(`Question: ${question}\nAnswer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
      round(roundNum - 1);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. \nCorrect answer was '${answer}'. \nLet's try again, ${userName}!`);
    }
  };
  round(rounds);
};

export default base;
