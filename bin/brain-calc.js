#!/usr/bin/env node

import { runGame } from '../src/index.js';
import getGameData from '../src/games/calc.js';

const gameDescription = 'What is the result of the expression?';

runGame(gameDescription, getGameData);

