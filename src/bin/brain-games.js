#!/usr/bin/env node
import { getName, greeting } from '..';
import evenQuizz from './brain-even';

console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
const name = getName();
greeting(name);
evenQuizz(name);
