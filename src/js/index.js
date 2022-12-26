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
  invertCountDown();
  totalResult();
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
    numsEqSimbols1();
    setTimeout(() => {
      clearInterval(intId);
    }, 1300);
  }, 70);
}
function onStartSecondRandom() {
  const intId = setInterval(() => {
    numsEqSimbols2();
    setTimeout(() => {
      clearInterval(intId);
    }, 2000);
  }, 70);
}

function onStartThirdRandom() {
  const intId = setInterval(() => {
    numsEqSimbols3();
    setTimeout(() => {
      clearInterval(intId);
    }, 2700);
  }, 70);
}

function numsEqSimbols1() {
  const random1 = parseInt(Math.random() * 6);
  let simbolOne = 0;
  if (random1 === 0) {
    simbolOne = '🍔';
  } else if (random1 === 1) {
    simbolOne = '🍋';
  } else if (random1 === 2) {
    simbolOne = '🍒';
  } else if (random1 === 3) {
    simbolOne = '🇺🇦';
  } else if (random1 === 4) {
    simbolOne = '🍺';
  } else if (random1 === 5) {
    simbolOne = '💰';
  }

  refs.leftSimbol.textContent = simbolOne;
}

function numsEqSimbols2() {
  const random1 = parseInt(Math.random() * 6);
  let simbolTwo = 0;
  if (random1 === 0) {
    simbolTwo = '🍔';
  } else if (random1 === 1) {
    simbolTwo = '🍋';
  } else if (random1 === 2) {
    simbolTwo = '🍒';
  } else if (random1 === 3) {
    simbolTwo = '🇺🇦';
  } else if (random1 === 4) {
    simbolTwo = '🍺';
  } else if (random1 === 5) {
    simbolTwo = '💰';
  }

  refs.centerSimbol.textContent = simbolTwo;
}
function numsEqSimbols3() {
  const random1 = parseInt(Math.random() * 6);
  let simbolThree = 0;
  if (random1 === 0) {
    simbolThree = '🍔';
  } else if (random1 === 1) {
    simbolThree = '🍋';
  } else if (random1 === 2) {
    simbolThree = '🍒';
  } else if (random1 === 3) {
    simbolThree = '🇺🇦';
  } else if (random1 === 4) {
    simbolThree = '🍺';
  } else if (random1 === 5) {
    simbolThree = '💰';
  }

  refs.rightSimbol.textContent = simbolThree;
}

function on() {
  let score = 0;
  setTimeout(() => {
    if (
      refs.leftSimbol.textContent === '🍔' &&
      refs.centerSimbol.textContent === '🍔' &&
      refs.rightSimbol.textContent === '🍔'
    ) {
      score = 7;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      refs.leftSimbol.textContent === '💰' &&
      refs.centerSimbol.textContent === '💰' &&
      refs.rightSimbol.textContent === '💰'
    ) {
      score = 12;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      refs.leftSimbol.textContent === '🍺' &&
      refs.centerSimbol.textContent === '🍺' &&
      refs.rightSimbol.textContent === '🍺'
    ) {
      score = 8;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      refs.leftSimbol.textContent === '🇺🇦' &&
      refs.centerSimbol.textContent === '🇺🇦' &&
      refs.rightSimbol.textContent === '🇺🇦'
    ) {
      score = 30;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      refs.leftSimbol.textContent === '🍒' &&
      refs.centerSimbol.textContent === '🍒' &&
      refs.rightSimbol.textContent === '🍒'
    ) {
      score = 5;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      refs.leftSimbol.textContent === '🍋' &&
      refs.centerSimbol.textContent === '🍋' &&
      refs.rightSimbol.textContent === '🍋'
    ) {
      score = 8;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      (refs.leftSimbol.textContent === '🍔' &&
        refs.centerSimbol.textContent === '🍔') ||
      (refs.centerSimbol.textContent === '🍔' &&
        refs.rightSimbol.textContent === '🍔')
    ) {
      score = 3;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      (refs.leftSimbol.textContent === '💰' &&
        refs.centerSimbol.textContent === '💰') ||
      (refs.centerSimbol.textContent === '💰' &&
        refs.rightSimbol.textContent === '💰')
    ) {
      score = 3;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      (refs.leftSimbol.textContent === '🍺' &&
        refs.centerSimbol.textContent === '🍺') ||
      (refs.centerSimbol.textContent === '🍺' &&
        refs.rightSimbol.textContent === '🍺')
    ) {
      score = 4;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      (refs.leftSimbol.textContent === '🇺🇦' &&
        refs.centerSimbol.textContent === '🇺🇦') ||
      (refs.centerSimbol.textContent === '🇺🇦' &&
        refs.rightSimbol.textContent === '🇺🇦')
    ) {
      score = 15;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      (refs.leftSimbol.textContent === '🍒' &&
        refs.centerSimbol.textContent === '🍒') ||
      (refs.centerSimbol.textContent === '🍒' &&
        refs.rightSimbol.textContent === '🍒')
    ) {
      score = 2;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else if (
      (refs.leftSimbol.textContent === '🍋' &&
        refs.centerSimbol.textContent === '🍋') ||
      (refs.centerSimbol.textContent === '🍋' &&
        refs.rightSimbol.textContent === '🍋')
    ) {
      score = 2;
      const totalScore = score + Number(refs.scoreNum.textContent);
      refs.scoreNum.textContent = totalScore;
    } else {
      const totalScore = Number(refs.scoreNum.textContent) - 1;
      refs.scoreNum.textContent = totalScore;
    }
  }, 3000);
}
