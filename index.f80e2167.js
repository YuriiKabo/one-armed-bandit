const t={leftSimbol:document.querySelector(".left-simb"),centerSimbol:document.querySelector(".center-simb"),rightSimbol:document.querySelector(".right-simb"),btnStart:document.querySelector(".start-button"),scoreNum:document.querySelector(".score-num"),cont:document.querySelector(".cont"),topUpBtn:document.querySelector(".top-up"),restNum:document.querySelector(".rest-num"),gameResult:document.querySelector(".your-win-numb")};o(),document.addEventListener("keydown",(e=>{" "!==e.key&&"Enter"!==e.key||t.btnStart.classList.add("start-button-enter")})),document.addEventListener("keyup",(e=>{" "!==e.key&&"Enter"!==e.key||(n(),t.btnStart.classList.remove("start-button-enter"))})),t.btnStart.addEventListener("click",n),t.topUpBtn.addEventListener("click",(function(){let n=prompt("Поповніть рахунок!",2);t.scoreNum.textContent=Number(n),t.restNum.textContent=Number(n),e=Number(n),t.btnStart.disabled=!1,t.btnStart.style.backgroundColor="#ff0000"}));let e=0;function n(){r(1300,"leftSimbol"),r(2e3,"centerSimbol"),r(2700,"rightSimbol"),function(){let e=0;setTimeout((()=>{if("🍔"===t.leftSimbol.textContent&&"🍔"===t.centerSimbol.textContent&&"🍔"===t.rightSimbol.textContent){e=7;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("💰"===t.leftSimbol.textContent&&"💰"===t.centerSimbol.textContent&&"💰"===t.rightSimbol.textContent){e=12;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍺"===t.leftSimbol.textContent&&"🍺"===t.centerSimbol.textContent&&"🍺"===t.rightSimbol.textContent){e=8;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🇺🇦"===t.leftSimbol.textContent&&"🇺🇦"===t.centerSimbol.textContent&&"🇺🇦"===t.rightSimbol.textContent){e=30;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍒"===t.leftSimbol.textContent&&"🍒"===t.centerSimbol.textContent&&"🍒"===t.rightSimbol.textContent){e=5;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍋"===t.leftSimbol.textContent&&"🍋"===t.centerSimbol.textContent&&"🍋"===t.rightSimbol.textContent){e=8;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍔"===t.leftSimbol.textContent&&"🍔"===t.centerSimbol.textContent||"🍔"===t.centerSimbol.textContent&&"🍔"===t.rightSimbol.textContent){e=3;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("💰"===t.leftSimbol.textContent&&"💰"===t.centerSimbol.textContent||"💰"===t.centerSimbol.textContent&&"💰"===t.rightSimbol.textContent){e=3;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍺"===t.leftSimbol.textContent&&"🍺"===t.centerSimbol.textContent||"🍺"===t.centerSimbol.textContent&&"🍺"===t.rightSimbol.textContent){e=4;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🇺🇦"===t.leftSimbol.textContent&&"🇺🇦"===t.centerSimbol.textContent||"🇺🇦"===t.centerSimbol.textContent&&"🇺🇦"===t.rightSimbol.textContent){e=15;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍒"===t.leftSimbol.textContent&&"🍒"===t.centerSimbol.textContent||"🍒"===t.centerSimbol.textContent&&"🍒"===t.rightSimbol.textContent){e=2;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍋"===t.leftSimbol.textContent&&"🍋"===t.centerSimbol.textContent||"🍋"===t.centerSimbol.textContent&&"🍋"===t.rightSimbol.textContent){e=2;const n=e+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else{const e=Number(t.scoreNum.textContent)-1;t.scoreNum.textContent=e}}),3e3)}(),setTimeout((()=>{let e=Number(t.restNum.textContent)-1;t.restNum.textContent=e,"0"===t.restNum.textContent&&(o(),setTimeout((()=>{alert("Гра закінчена!!!")}),10))}),3e3),setTimeout((()=>{let n=Number(t.scoreNum.textContent)-e;t.gameResult.textContent=n}),3e3)}function o(){t.btnStart.disabled=!0,t.btnStart.style.backgroundColor="#ff9c9c"}function r(e,n){const o=setInterval((()=>{!function(e){const n=parseInt(6*Math.random());0===n?simbol="🍔":1===n?simbol="🍋":2===n?simbol="🍒":3===n?simbol="🇺🇦":4===n?simbol="🍺":5===n&&(simbol="💰");t[e].textContent=simbol}(n),setTimeout((()=>{clearInterval(o)}),e)}),70)}
//# sourceMappingURL=index.f80e2167.js.map