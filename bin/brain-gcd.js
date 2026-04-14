#!/usr/bin/env node

import { runGame } from '../src/index.js'
import getGameData from '../src/games/gcd.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

runGame(gameDescription, getGameData)
