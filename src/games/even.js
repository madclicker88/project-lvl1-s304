import { randomNum } from '../utils';
import engine from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => ((number % 2 === 0) ? 'yes' : 'no');

const game = () => {
  const num = randomNum();
  return {
    question: num,
    answer: isEven(num),
  };
};

export default () => engine(game, rule);
