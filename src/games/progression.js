import { randomNum } from '../utils';
import engine from '..';

const progressionLength = 10;

const rule = 'What number is missing in this progression?';
const hideNumber = (progression, i) => progression.map((value, index) => (index === i ? '..' : value));

const makeProgression = (size, start, step) => Array(size)
  .fill(null)
  .map((_, index) => start + index * step);

const game = () => {
  const progressionStep = randomNum(10, 1);
  const progressionStart = randomNum(50);

  const progressionArray = makeProgression(progressionLength, progressionStart, progressionStep);
  const indexToHide = randomNum(9, 0);
  return {
    question: hideNumber(progressionArray, indexToHide).join(' '),
    answer: String(progressionArray[indexToHide]),
  };
};

export default () => engine(game, rule);
