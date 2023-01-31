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
  let result = prompt('Поповніть рахунок!', 2);
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
  onStartRandom(1300, 'leftSimbol');
  onStartRandom(2000, 'centerSimbol');
  onStartRandom(2700, 'rightSimbol');
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
      setTimeout(() => {
        alert('Гра закінчена!!!');
      }, 10);
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

function onStartRandom(timeout, symbol) {
  const intId = setInterval(() => {
    makeSymbol(symbol);
    setTimeout(() => {
      clearInterval(intId);
    }, timeout);
  }, 70);
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

function makeSymbol(simbolPlace) {
  const random = parseInt(Math.random() * 6);

  if (random === 0) {
    simbol = '🍔';
  } else if (random === 1) {
    simbol = '🍋';
  } else if (random === 2) {
    simbol = '🍒';
  } else if (random === 3) {
    simbol = '🇺🇦';
  } else if (random === 4) {
    simbol = '🍺';
  } else if (random === 5) {
    simbol = '💰';
  }

  refs[simbolPlace].textContent = simbol;
}
