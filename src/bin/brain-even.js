#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, name as userName } from './brain-games';

const QUESTIONS_SIZE = 3;

const evenQuizz = (name) => {
  const randomNum = () => parseInt(Math.random() * 100, 10);

  const worker = (num, questSize) => {
    if (questSize === 0) {
      console.log(`Congratulations,  ${name}!`);
      return;
    }
    const userAnswer = readlineSync.question(`Question: ${num} \nYour answer: `);
    const answerValue = (userAnswer === 'yes');
    const isEven = !(num % 2);
    const wrongAnswerMsg = () => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'. \nLet's try again, ${name}!`);
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      wrongAnswerMsg();
      return;
    }
    if (answerValue !== isEven) {
      wrongAnswerMsg();
    } else {
      console.log('Correct!');
      worker(randomNum(), questSize - 1);
    }
  };
  worker(randomNum(), QUESTIONS_SIZE);
};

welcome();
evenQuizz(userName);
