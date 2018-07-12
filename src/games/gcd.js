import { randomNum } from '../utils';
import engine from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};

const game = () => {
  const a = randomNum();
  const b = randomNum();

  return {
    question: `${a} ${b}`,
    answer: gcd(a, b).toString(),
  };
};

export default () => engine(game, rule);
