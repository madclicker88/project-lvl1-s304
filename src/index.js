import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const greeting = (name) => {
  console.log(`Hello, ${name}!\n`);
};
