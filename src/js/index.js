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
// console.log(Object.keys(refs));
disabledBtnStart();

document.addEventListener('keydown', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    refs.btnStart.classList.add('start-button-enter');
  }
});

document.addEventListener('keyup', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    onStartGame();
    refs.btnStart.classList.remove('start-button-enter');
  }
});

refs.btnStart.addEventListener('click', onStartGame);
refs.topUpBtn.addEventListener('click', onCallPrompt);
let investScore = 0;
function onCallPrompt() {
  let result = prompt('Поповніть рахунок!', 20);
  refs.scoreNum.textContent = Number(result);
  refs.restNum.textContent = Number(result);
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
    let deltaScore = Number(refs.scoreNum.textContent) - investScore;
    refs.gameResult.textContent = deltaScore;
  }, 3000);
}

function invertCountDown() {
  setTimeout(() => {
    let restNumber = Number(refs.restNum.textContent) - 1;
    refs.restNum.textContent = restNumber;
    if (refs.restNum.textContent === '0') {
      disabledBtnStart();
      alert('Гра закінчена!!!');
    }
  }, 3000);
}

function enabledBtnStart() {
  refs.btnStart.disabled = false;
  refs.btnStart.style.backgroundColor = '#ff0000';
}

function disabledBtnStart() {
  refs.btnStart.disabled = true;
  refs.btnStart.style.backgroundColor = '#ff9c9c';
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

  refs.leftSimbol.textContent = simbolOne;
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

  refs.centerSimbol.textContent = simbolTwo;
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
  refs.rightSimbol.textContent = simbolThree;
}

function on() {
  let score = 0;
  setTimeout(() => {
    const left = refs.leftSimbol.textContent;
    const center = refs.centerSimbol.textContent;
    const right = refs.rightSimbol.textContent;
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
    } else {
      const totalScore = Number(refs.scoreNum.textContent) - 1;
      refs.scoreNum.textContent = totalScore;
    }
  }, 3000);
}

function addScore(score) {
  const totalScore = score + Number(refs.scoreNum.textContent);
  refs.scoreNum.textContent = totalScore;
}
