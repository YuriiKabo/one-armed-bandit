const t={leftSimbol:document.querySelector(".left-simb"),centerSimbol:document.querySelector(".center-simb"),rightSimbol:document.querySelector(".right-simb"),btnStart:document.querySelector(".start-button"),scoreNum:document.querySelector(".score-num"),cont:document.querySelector(".cont"),topUpBtn:document.querySelector(".top-up"),restNum:document.querySelector(".rest-num"),gameResult:document.querySelector(".your-win-numb")},{leftSimbol:e,centerSimbol:n,rightSimbol:o,btnStart:r,scoreNum:c,cont:a,topUpBtn:s,restNum:u,gameResult:l}=t;b(),document.addEventListener("keydown",(t=>{" "!==t.key&&"Enter"!==t.key||r.classList.add("start-button-enter")})),document.addEventListener("keyup",(t=>{" "!==t.key&&"Enter"!==t.key||(i(),r.classList.remove("start-button-enter"))})),r.addEventListener("click",i),s.addEventListener("click",(function(){let t=prompt("Поповніть рахунок!",20);c.textContent=Number(t),u.textContent=Number(t),m=Number(t),r.disabled=!1,r.style.backgroundColor="#ff0000"}));let m=0;function i(){!function(){const t=setInterval((()=>{!function(t){let n=0;switch(t){case 0:n="🍔";break;case 1:n="🍋";break;case 2:n="🍒";break;case 3:n="🇺🇦";break;case 4:n="🍺";break;case 5:n="💰"}e.textContent=n}(parseInt(6*Math.random())),setTimeout((()=>{clearInterval(t)}),1300)}),70)}(),function(){const t=setInterval((()=>{!function(t){let e=0;switch(t){case 0:e="🍔";break;case 1:e="🍋";break;case 2:e="🍒";break;case 3:e="🇺🇦";break;case 4:e="🍺";break;case 5:e="💰"}n.textContent=e}(parseInt(6*Math.random())),setTimeout((()=>{clearInterval(t)}),2e3)}),70)}(),function(){const t=setInterval((()=>{!function(t){let e=0;switch(t){case 0:e="🍔";break;case 1:e="🍋";break;case 2:e="🍒";break;case 3:e="🇺🇦";break;case 4:e="🍺";break;case 5:e="💰"}o.textContent=e}(parseInt(6*Math.random())),setTimeout((()=>{clearInterval(t)}),2700)}),70)}(),function(){let t=0;setTimeout((()=>{const r=e.textContent,a=n.textContent,s=o.textContent;"🍔"===r&&"🍔"===a&&"🍔"===s?(t=7,d(t)):"💰"===r&&"💰"===a&&"💰"===s?(t=12,d(t)):"🍺"===r&&"🍺"===a&&"🍺"===s?(t=8,d(t)):"🇺🇦"===r&&"🇺🇦"===a&&"🇺🇦"===s?(t=30,d(t)):"🍒"===r&&"🍒"===a&&"🍒"===s?(t=5,d(t)):"🍋"===r&&"🍋"===a&&"🍋"===s?(t=8,d(t)):"🍔"===r&&"🍔"===a||"🍔"===a&&"🍔"===s||"💰"===r&&"💰"===a||"💰"===a&&"💰"===s?(t=3,d(t)):"🍺"===r&&"🍺"===a||"🍺"===a&&"🍺"===s?(t=4,d(t)):"🇺🇦"===r&&"🇺🇦"===a||"🇺🇦"===a&&"🇺🇦"===s?(t=15,d(t)):("🍒"===r&&"🍒"===a||"🍒"===a&&"🍒"===s||"🍋"===r&&"🍋"===a||"🍋"===a&&"🍋"===s)&&(t=2,d(t));const u=Number(c.textContent)-1;c.textContent=u}),3e3)}(),setTimeout((()=>{let t=Number(c.textContent)-m;l.textContent=t}),3e3),setTimeout((()=>{setTimeout((()=>{let t=Number(u.textContent)-1;u.textContent=t,"0"===u.textContent&&(b(),alert("Гра закінчена!!!"))}),3e3)}),300)}function b(){r.disabled=!0,r.style.backgroundColor="#ff9c9c"}function d(t){const e=t+Number(c.textContent);c.textContent=e}
//# sourceMappingURL=index.ee4e01fc.js.map