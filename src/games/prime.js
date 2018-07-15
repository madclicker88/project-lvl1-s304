import { randomNum } from '../utils';
import engine from '..';

const minDivisor = 1;
const rule = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (i) => {
    if (i === num) return true;
    if (num % i === 0 && i < num) return false;
    return iter(i + 1);
  };
  return iter(minDivisor);
};

const game = () => {
  const number = randomNum();
  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => engine(game, rule);
