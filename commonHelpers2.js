import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form"),n=document.querySelector("input[type=number]");document.querySelectorAll("input[type=radio]");i.addEventListener("submit",a);function a(o){o.preventDefault();const s=new FormData(o.target).get("state"),e=n.value;new Promise((t,m)=>{setTimeout(s==="fulfilled"?()=>{t(e)}:()=>{m(e)},e)}).then(t=>{r.success({message:`✅ Fulfilled promise in ${e}ms`})}).catch(t=>{r.error({message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map
