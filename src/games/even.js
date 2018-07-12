import randomNum from '../randomNum';
import base from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const num = randomNum();
  return {
    question: num,
    answer: (num % 2 === 0) ? 'yes' : 'no',
  };
};

export default () => base(game, rule);
