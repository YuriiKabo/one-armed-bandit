const e={leftSimbol:document.querySelector(".left-simb"),centerSimbol:document.querySelector(".center-simb"),rightSimbol:document.querySelector(".right-simb"),btnStart:document.querySelector(".start-button"),scoreNum:document.querySelector(".score-num"),cont:document.querySelector(".cont"),topUpBtn:document.querySelector(".top-up"),restNum:document.querySelector(".rest-num"),gameResult:document.querySelector(".your-win-numb")};r(),document.addEventListener("keydown",(t=>{" "!==t.key&&"Enter"!==t.key||e.btnStart.classList.add("start-button-enter")})),document.addEventListener("keyup",(t=>{" "!==t.key&&"Enter"!==t.key||(n(),e.btnStart.classList.remove("start-button-enter"))})),e.btnStart.addEventListener("click",n),e.topUpBtn.addEventListener("click",(function(){let n=prompt("Поповніть рахунок!",20);e.scoreNum.textContent=Number(n),e.restNum.textContent=Number(n),t=Number(n),e.btnStart.disabled=!1,e.btnStart.style.backgroundColor="#ff0000"}));let t=0;function n(){!function(){const t=setInterval((()=>{!function(t){let n=0;switch(t){case 0:n="🍔";break;case 1:n="🍋";break;case 2:n="🍒";break;case 3:n="🇺🇦";break;case 4:n="🍺";break;case 5:n="💰"}e.leftSimbol.textContent=n}(parseInt(6*Math.random())),setTimeout((()=>{clearInterval(t)}),1300)}),70)}(),function(){const t=setInterval((()=>{!function(t){let n=0;switch(t){case 0:n="🍔";break;case 1:n="🍋";break;case 2:n="🍒";break;case 3:n="🇺🇦";break;case 4:n="🍺";break;case 5:n="💰"}e.centerSimbol.textContent=n}(parseInt(6*Math.random())),setTimeout((()=>{clearInterval(t)}),2e3)}),70)}(),function(){const t=setInterval((()=>{!function(t){let n=0;switch(t){case 0:n="🍔";break;case 1:n="🍋";break;case 2:n="🍒";break;case 3:n="🇺🇦";break;case 4:n="🍺";break;case 5:n="💰"}e.rightSimbol.textContent=n}(parseInt(6*Math.random())),setTimeout((()=>{clearInterval(t)}),2700)}),70)}(),function(){let t=0;setTimeout((()=>{const n=e.leftSimbol.textContent,r=e.centerSimbol.textContent,s=e.rightSimbol.textContent;if("🍔"===n&&"🍔"===r&&"🍔"===s)t=7,o(t);else if("💰"===n&&"💰"===r&&"💰"===s)t=12,o(t);else if("🍺"===n&&"🍺"===r&&"🍺"===s)t=8,o(t);else if("🇺🇦"===n&&"🇺🇦"===r&&"🇺🇦"===s)t=30,o(t);else if("🍒"===n&&"🍒"===r&&"🍒"===s)t=5,o(t);else if("🍋"===n&&"🍋"===r&&"🍋"===s)t=8,o(t);else if("🍔"===n&&"🍔"===r||"🍔"===r&&"🍔"===s)t=3,o(t);else if("💰"===n&&"💰"===r||"💰"===r&&"💰"===s)t=3,o(t);else if("🍺"===n&&"🍺"===r||"🍺"===r&&"🍺"===s)t=4,o(t);else if("🇺🇦"===n&&"🇺🇦"===r||"🇺🇦"===r&&"🇺🇦"===s)t=15,o(t);else if("🍒"===n&&"🍒"===r||"🍒"===r&&"🍒"===s)t=2,o(t);else if("🍋"===n&&"🍋"===r||"🍋"===r&&"🍋"===s)t=2,o(t);else{const t=Number(e.scoreNum.textContent)-1;e.scoreNum.textContent=t}}),3e3)}(),setTimeout((()=>{let n=Number(e.scoreNum.textContent)-t;e.gameResult.textContent=n}),3e3),setTimeout((()=>{setTimeout((()=>{let t=Number(e.restNum.textContent)-1;e.restNum.textContent=t,"0"===e.restNum.textContent&&(r(),alert("Гра закінчена!!!"))}),3e3)}),300)}function r(){e.btnStart.disabled=!0,e.btnStart.style.backgroundColor="#ff9c9c"}function o(t){const n=t+Number(e.scoreNum.textContent);e.scoreNum.textContent=n}
//# sourceMappingURL=index.f8f10521.js.map