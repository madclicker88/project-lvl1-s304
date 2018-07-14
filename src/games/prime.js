import { randomNum } from '../utils';
import engine from '..';

const MIN_DIVISOR = 2;
const rule = '';

const isPrime = (num) => {
  const iter = (i) => {
    if (i === num) return true;
    if (num % i === 0 && i < num) return false;
    return iter(i + 1);
  };
  return iter(MIN_DIVISOR);
};

const game = () => {
  const number = randomNum();
  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => engine(game, rule);
