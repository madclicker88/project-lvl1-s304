#!/usr/bin/env node
import { getName, greeting } from '..';

export const welcome = () => console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
welcome();
export const name = getName();
greeting(name);
