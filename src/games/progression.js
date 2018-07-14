import { randomNum } from '../utils';
import engine from '..';

const PROGRESSION_LENGTH = 10;

const rule = 'What number is missing in this progression?';
const hideNumber = (progression, i) => progression.map((value, index) => (index === i ? '..' : value));

const makeProgression = () => {
  const PROGRESSION_STEP = randomNum(10, 1);
  const PROGRESSION_START = randomNum(50);
  const iter = (count = 0, i = PROGRESSION_START, progression = []) => {
    if (count === PROGRESSION_LENGTH) return progression;
    progression.push(i);
    return iter(count + 1, i + PROGRESSION_STEP, progression);
  };
  return iter();
};

const game = () => {
  const progressionArray = makeProgression();
  const indexToHide = randomNum(9, 0);
  return {
    question: hideNumber(progressionArray, indexToHide).join(' '),
    answer: String(progressionArray[indexToHide]),
  };
};

export default () => engine(game, rule);
