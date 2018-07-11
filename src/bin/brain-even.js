#!/usr/bin/env node
import {
  welcome, greeting, getName, answerEvenText, evenQuiz,
} from '..';

welcome();
answerEvenText();
const userName = getName();
greeting(userName);
evenQuiz(userName);
