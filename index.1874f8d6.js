!function(){var t={leftSimbol:document.querySelector(".left-simb"),centerSimbol:document.querySelector(".center-simb"),rightSimbol:document.querySelector(".right-simb"),btnStart:document.querySelector(".start-button"),scoreNum:document.querySelector(".score-num"),cont:document.querySelector(".cont"),topUpBtn:document.querySelector(".top-up"),restNum:document.querySelector(".rest-num"),gameResult:document.querySelector(".your-win-numb")};o(),document.addEventListener("keydown",(function(e){" "!==e.key&&"Enter"!==e.key||t.btnStart.classList.add("start-button-enter")})),document.addEventListener("keyup",(function(e){" "!==e.key&&"Enter"!==e.key||(n(),t.btnStart.classList.remove("start-button-enter"))})),t.btnStart.addEventListener("click",n),t.topUpBtn.addEventListener("click",(function(){var n=prompt("Поповніть рахунок!",100);t.scoreNum.textContent=Number(n),t.restNum.textContent=Number(n),e=Number(n),t.btnStart.disabled=!1,t.btnStart.style.backgroundColor="#ff0000"}));var e=0;function n(){var n;n=setInterval((function(){var e,o;e=parseInt(6*Math.random()),o=0,0===e?o="🍔":1===e?o="🍋":2===e?o="🍒":3===e?o="🇺🇦":4===e?o="🍺":5===e&&(o="💰"),t.leftSimbol.textContent=o,setTimeout((function(){clearInterval(n)}),1300)}),70),function(){var e=setInterval((function(){!function(){var e=parseInt(6*Math.random()),n=0;0===e?n="🍔":1===e?n="🍋":2===e?n="🍒":3===e?n="🇺🇦":4===e?n="🍺":5===e&&(n="💰");t.centerSimbol.textContent=n}(),setTimeout((function(){clearInterval(e)}),2e3)}),70)}(),function(){var e=setInterval((function(){!function(){var e=parseInt(6*Math.random()),n=0;0===e?n="🍔":1===e?n="🍋":2===e?n="🍒":3===e?n="🇺🇦":4===e?n="🍺":5===e&&(n="💰");t.rightSimbol.textContent=n}(),setTimeout((function(){clearInterval(e)}),2700)}),70)}(),setTimeout((function(){if("🍔"===t.leftSimbol.textContent&&"🍔"===t.centerSimbol.textContent&&"🍔"===t.rightSimbol.textContent){var e=7+Number(t.scoreNum.textContent);t.scoreNum.textContent=e}else if("💰"===t.leftSimbol.textContent&&"💰"===t.centerSimbol.textContent&&"💰"===t.rightSimbol.textContent){var n=12+Number(t.scoreNum.textContent);t.scoreNum.textContent=n}else if("🍺"===t.leftSimbol.textContent&&"🍺"===t.centerSimbol.textContent&&"🍺"===t.rightSimbol.textContent){var o=8+Number(t.scoreNum.textContent);t.scoreNum.textContent=o}else if("🇺🇦"===t.leftSimbol.textContent&&"🇺🇦"===t.centerSimbol.textContent&&"🇺🇦"===t.rightSimbol.textContent){var r=30+Number(t.scoreNum.textContent);t.scoreNum.textContent=r}else if("🍒"===t.leftSimbol.textContent&&"🍒"===t.centerSimbol.textContent&&"🍒"===t.rightSimbol.textContent){var m=5+Number(t.scoreNum.textContent);t.scoreNum.textContent=m}else if("🍋"===t.leftSimbol.textContent&&"🍋"===t.centerSimbol.textContent&&"🍋"===t.rightSimbol.textContent){var i=8+Number(t.scoreNum.textContent);t.scoreNum.textContent=i}else if("🍔"===t.leftSimbol.textContent&&"🍔"===t.centerSimbol.textContent||"🍔"===t.centerSimbol.textContent&&"🍔"===t.rightSimbol.textContent){var u=3+Number(t.scoreNum.textContent);t.scoreNum.textContent=u}else if("💰"===t.leftSimbol.textContent&&"💰"===t.centerSimbol.textContent||"💰"===t.centerSimbol.textContent&&"💰"===t.rightSimbol.textContent){var l=3+Number(t.scoreNum.textContent);t.scoreNum.textContent=l}else if("🍺"===t.leftSimbol.textContent&&"🍺"===t.centerSimbol.textContent||"🍺"===t.centerSimbol.textContent&&"🍺"===t.rightSimbol.textContent){var c=4+Number(t.scoreNum.textContent);t.scoreNum.textContent=c}else if("🇺🇦"===t.leftSimbol.textContent&&"🇺🇦"===t.centerSimbol.textContent||"🇺🇦"===t.centerSimbol.textContent&&"🇺🇦"===t.rightSimbol.textContent){var b=15+Number(t.scoreNum.textContent);t.scoreNum.textContent=b}else if("🍒"===t.leftSimbol.textContent&&"🍒"===t.centerSimbol.textContent||"🍒"===t.centerSimbol.textContent&&"🍒"===t.rightSimbol.textContent){var s=2+Number(t.scoreNum.textContent);t.scoreNum.textContent=s}else if("🍋"===t.leftSimbol.textContent&&"🍋"===t.centerSimbol.textContent||"🍋"===t.centerSimbol.textContent&&"🍋"===t.rightSimbol.textContent){var C=2+Number(t.scoreNum.textContent);t.scoreNum.textContent=C}else{var x=Number(t.scoreNum.textContent)-1;t.scoreNum.textContent=x}}),3e3),setTimeout((function(){var e=Number(t.restNum.textContent)-1;t.restNum.textContent=e,"0"===t.restNum.textContent&&(o(),alert("Гра закінчена!!!"))}),3e3),setTimeout((function(){var n=Number(t.scoreNum.textContent)-e;t.gameResult.textContent=n}),3e3)}function o(){t.btnStart.disabled=!0,t.btnStart.style.backgroundColor="#ff9c9c"}}();
//# sourceMappingURL=index.1874f8d6.js.map
