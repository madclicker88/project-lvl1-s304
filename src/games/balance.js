import { randomNum } from '../utils';
import engine from '..';

const MIN = 100;
const MAX = 10000;
const num = randomNum(MAX, MIN);
const rule = 'Balance the given number.';


const toArray = n => n.toString().split('').map(i => parseInt(i, 10));
const toNumber = arr => arr.sort().join('');

const balance = (number) => {
  const iter = (digits) => {
    const minDigit = Math.min(...digits);
    const maxDigit = Math.max(...digits);
    if (maxDigit - minDigit <= 1) return digits;

    const tempDigitsArray = digits.map((digit) => {
      if (digit === minDigit) return digit + 1;
      if (digit === maxDigit) return digit - 1;
      return digit;
    });
    return iter(tempDigitsArray);
  };
  return toNumber(iter(toArray(number)));
};

const game = () => ({
  question: num,
  answer: balance(num),
});

export default () => engine(game, rule);
