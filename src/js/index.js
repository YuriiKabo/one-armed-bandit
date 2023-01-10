const refs = {
  leftSimbol: document.querySelector('.left-simb'),
  centerSimbol: document.querySelector('.center-simb'),
  rightSimbol: document.querySelector('.right-simb'),
  btnStart: document.querySelector('.start-button'),
  scoreNum: document.querySelector('.score-num'),
  cont: document.querySelector('.cont'),
  topUpBtn: document.querySelector('.top-up'),
  restNum: document.querySelector('.rest-num'),
  gameResult: document.querySelector('.your-win-numb'),
};
const {
  leftSimbol,
  centerSimbol,
  rightSimbol,
  btnStart,
  scoreNum,
  cont,
  topUpBtn,
  restNum,
  gameResult,
} = refs;

disabledBtnStart();

document.addEventListener('keydown', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    btnStart.classList.add('start-button-enter');
  }
});

document.addEventListener('keyup', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    onStartGame();
    btnStart.classList.remove('start-button-enter');
  }
});

btnStart.addEventListener('click', onStartGame);
topUpBtn.addEventListener('click', onCallPrompt);
let investScore = 0;
function onCallPrompt() {
  let result = prompt('Поповніть рахунок!', 20);
  scoreNum.textContent = Number(result);
  restNum.textContent = Number(result);
  investScore = Number(result);

  enabledBtnStart();
}

// const id = setInterval(() => {
//   onStartGame();
//   setTimeout(() => {
//     clearInterval(id);
//   }, 400000);
// }, 3000);

function onStartGame() {
  onStartFirstRandom();
  onStartSecondRandom();
  onStartThirdRandom();
  on();
  totalResult();
  setTimeout(() => {
    invertCountDown();
  }, 300);
}

function totalResult() {
  setTimeout(() => {
    let deltaScore = Number(scoreNum.textContent) - investScore;
    gameResult.textContent = deltaScore;
  }, 3000);
}

function invertCountDown() {
  setTimeout(() => {
    let restNumber = Number(restNum.textContent) - 1;
    restNum.textContent = restNumber;
    if (restNum.textContent === '0') {
      disabledBtnStart();
      alert('Гра закінчена!!!');
    }
  }, 3000);
}

function enabledBtnStart() {
  btnStart.disabled = false;
  btnStart.style.backgroundColor = '#ff0000';
}

function disabledBtnStart() {
  btnStart.disabled = true;
  btnStart.style.backgroundColor = '#ff9c9c';
}

function onStartFirstRandom() {
  const intId = setInterval(() => {
    numsEqSimbols1(parseInt(Math.random() * 6));
    setTimeout(() => {
      clearInterval(intId);
    }, 1300);
  }, 70);
}
function onStartSecondRandom() {
  const intId = setInterval(() => {
    numsEqSimbols2(parseInt(Math.random() * 6));
    setTimeout(() => {
      clearInterval(intId);
    }, 2000);
  }, 70);
}

function onStartThirdRandom() {
  const intId = setInterval(() => {
    numsEqSimbols3(parseInt(Math.random() * 6));
    setTimeout(() => {
      clearInterval(intId);
    }, 2700);
  }, 70);
}

function numsEqSimbols1(random) {
  let simbolOne = 0;
  switch (random) {
    case 0:
      simbolOne = '🍔';
      break;
    case 1:
      simbolOne = '🍋';
      break;
    case 2:
      simbolOne = '🍒';
      break;
    case 3:
      simbolOne = '🇺🇦';
      break;
    case 4:
      simbolOne = '🍺';
      break;
    case 5:
      simbolOne = '💰';
      break;
  }

  leftSimbol.textContent = simbolOne;
}

function numsEqSimbols2(random) {
  let simbolTwo = 0;
  switch (random) {
    case 0:
      simbolTwo = '🍔';
      break;
    case 1:
      simbolTwo = '🍋';
      break;
    case 2:
      simbolTwo = '🍒';
      break;
    case 3:
      simbolTwo = '🇺🇦';
      break;
    case 4:
      simbolTwo = '🍺';
      break;
    case 5:
      simbolTwo = '💰';
      break;
  }

  centerSimbol.textContent = simbolTwo;
}
function numsEqSimbols3(random) {
  let simbolThree = 0;
  switch (random) {
    case 0:
      simbolThree = '🍔';
      break;
    case 1:
      simbolThree = '🍋';
      break;
    case 2:
      simbolThree = '🍒';
      break;
    case 3:
      simbolThree = '🇺🇦';
      break;
    case 4:
      simbolThree = '🍺';
      break;
    case 5:
      simbolThree = '💰';
      break;
  }
  rightSimbol.textContent = simbolThree;
}
function addScore(score) {
  const totalScore = score + Number(scoreNum.textContent);
  scoreNum.textContent = totalScore;
}

function on() {
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
