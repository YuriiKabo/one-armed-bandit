import {
  addScore,
  leftSimbol,
  centerSimbol,
  rightSimbol,
  scoreNum,
} from './index.js';

function classificWins() {
  let score = 0;
  setTimeout(() => {
    const left = leftSimbol.textContent;
    const center = centerSimbol.textContent;
    const right = rightSimbol.textContent;
    if (left === '🍔' && center === '🍔' && right === '🍔') {
      score = 7;
      addScore(score);
    } else if (left === '💰' && center === '💰' && right === '💰') {
      score = 12;
      addScore(score);
    } else if (left === '🍺' && center === '🍺' && right === '🍺') {
      score = 8;
      addScore(score);
    } else if (left === '🇺🇦' && center === '🇺🇦' && right === '🇺🇦') {
      score = 30;
      addScore(score);
    } else if (left === '🍒' && center === '🍒' && right === '🍒') {
      score = 5;
      addScore(score);
    } else if (left === '🍋' && center === '🍋' && right === '🍋') {
      score = 8;
      addScore(score);
    } else if (
      (left === '🍔' && center === '🍔') ||
      (center === '🍔' && right === '🍔')
    ) {
      score = 3;
      addScore(score);
    } else if (
      (left === '💰' && center === '💰') ||
      (center === '💰' && right === '💰')
    ) {
      score = 3;
      addScore(score);
    } else if (
      (left === '🍺' && center === '🍺') ||
      (center === '🍺' && right === '🍺')
    ) {
      score = 4;
      addScore(score);
    } else if (
      (left === '🇺🇦' && center === '🇺🇦') ||
      (center === '🇺🇦' && right === '🇺🇦')
    ) {
      score = 15;
      addScore(score);
    } else if (
      (left === '🍒' && center === '🍒') ||
      (center === '🍒' && right === '🍒')
    ) {
      score = 2;
      addScore(score);
    } else if (
      (left === '🍋' && center === '🍋') ||
      (center === '🍋' && right === '🍋')
    ) {
      score = 2;
      addScore(score);
    }
    const totalScore = Number(scoreNum.textContent) - 1;
    scoreNum.textContent = totalScore;
  }, 3000);
}

export { classificWins };
