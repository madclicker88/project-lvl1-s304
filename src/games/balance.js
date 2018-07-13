import { randomNum } from '../utils';
import engine from '..';

const MIN = 100;
const MAX = 10000;
const num = randomNum(MAX, MIN);
const rule = 'Balance the given number.';

const numberToArray = n => n.toString().split('').map(i => parseInt(i, 10));
const arrayToNumber = arr => arr.join('');

const balance = (number) => {
  const iter = (digits) => {
    const minDigit = Math.min(...digits);
    const maxDigit = Math.max(...digits);
    if (maxDigit - minDigit <= 1) return digits.sort();

    const tempDigitsArray = digits.map((digit) => {
      if (digit === minDigit) return digit + 1;
      if (digit === maxDigit) return digit - 1;
      return digit;
    });
    return iter(tempDigitsArray);
  };
  return arrayToNumber(iter(numberToArray(number)));
};

const game = () => ({
  question: num,
  answer: balance(num),
});

export default () => engine(game, rule);
