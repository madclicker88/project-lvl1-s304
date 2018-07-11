import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games! ');

export const getName = () => readlineSync.question('May I have your name? ');

export const greeting = (name) => {
  console.log(`Hello, ${name}!\n`);
};
