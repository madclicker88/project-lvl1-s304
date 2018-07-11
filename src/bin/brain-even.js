#!/usr/bin/env node
import {
  welcome, greeting, getName, evenGreetingText, evenQuiz,
} from '..';

welcome();
evenGreetingText();
const userName = getName();
greeting(userName);
evenQuiz(userName);
