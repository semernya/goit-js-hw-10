import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as l,i as m}from"./assets/vendor-c2cf587c.js";document.querySelector("#datetime-picker");const o=document.querySelector("[data-start]"),f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let s=0;o.disabled=!0;o.addEventListener("click",q);l("input[type=text]",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]-e>0?o.disabled=!1:(o.disabled=!0,m.show({message:"Please choose a date in the future!"})),s=t[0]}});function p(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:i}}function r(t){return String(t).padStart(2,0)}function D({days:t,hours:e,minutes:a,seconds:n}){f.textContent=r(t),h.textContent=r(e),y.textContent=r(a),S.textContent=r(n)}function q(){const t=s,e=setInterval(()=>{const a=new Date,n=t-a;if(o.disabled=!0,n<0){clearInterval(e);return}D(p(n))},1e3)}
//# sourceMappingURL=commonHelpers.js.map