import"./assets/styles-CvqGU_S2.js";import{f,i as y}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),h=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),o=document.querySelector("[data-start]");let s;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],D()}};f(r,b);function D(){s<Date.now()?(y.show({title:"ERROR:  ",titleColor:"red",message:"Please choose a date in the future",messageColor:"red",position:"topCenter",closeOnEscape:!0,closeOnClick:!0}),o.disabled=!0):(r.disabled=!0,o.disabled=!1)}function q(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:l,seconds:m}}function a(e){return String(e).padStart(2,"0")}function i({days:e,hours:t,minutes:n,seconds:d}){h.textContent=a(e),p.textContent=a(t),C.textContent=a(n),S.textContent=a(d)}function v(){o.disabled=!0,r.disabled=!0,setInterval(()=>{const t=s-new Date;if(t<=0){clearInterval(timerInterval),o.disabled=!1,r.disabled=!1,i({days:0,hours:0,minutes:0,seconds:0});return}const n=q(t);i(n)},1e3)}o.addEventListener("click",v);
//# sourceMappingURL=1-timer.js.map
