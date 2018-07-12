import randomNum from '../randomNum';
import base from '..';

const rule = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operationSymbols = Object.keys(operations);

const calc = () => {
  const a = randomNum();
  const b = randomNum();
  const oper = operationSymbols[randomNum(operationSymbols.length)];

  return {
    question: `${a} ${oper} ${b}`,
    answer: operations[oper](a, b).toString(),
  };
};

export default () => base(calc, rule);
