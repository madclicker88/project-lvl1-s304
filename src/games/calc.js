import { randomNum } from '../utils';
import engine from '..';

const rule = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const calc = () => {
  const operationSymbols = Object.keys(operations);
  const a = randomNum();
  const b = randomNum();
  const operation = operationSymbols[randomNum(operationSymbols.length)];

  return {
    question: `${a} ${operation} ${b}`,
    answer: operations[operation](a, b).toString(),
  };
};

export default () => engine(calc, rule);
