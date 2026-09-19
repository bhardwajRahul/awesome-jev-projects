/* Same-origin, pre-paint theme preference. No cookies or network requests. */
(()=>{try{if(window.top&&window.top!==window)window.top.location=window.location}catch{document.documentElement.replaceChildren?.()}
const key="awesome-jev-theme",root=document.documentElement,media=window.matchMedia("(prefers-color-scheme: dark)");let mode="system";
const valid=v=>v==="light"||v==="dark"||v==="system";
try{const saved=localStorage.getItem(key);if(valid(saved))mode=saved}catch{}
const resolved=()=>mode==="system"?(media.matches?"dark":"light"):mode;
function apply(){const theme=resolved();root.dataset.theme=theme;root.dataset.themeMode=mode;const meta=document.querySelector?.('meta[name="theme-color"]');if(meta)meta.setAttribute("content",theme==="dark"?"#101310":"#fafaf8");for(const button of document.querySelectorAll("[data-theme-toggle]")){const label=button.getAttribute(theme==="dark"?"data-theme-light-label":"data-theme-dark-label");if(label){button.setAttribute("aria-label",label);button.setAttribute("title",label)}}window.dispatchEvent(new CustomEvent("awesome-jev-theme-change",{detail:{mode,resolved:theme}}))}
function setMode(value){if(!valid(value))return;mode=value;try{if(value==="system")localStorage.removeItem(key);else localStorage.setItem(key,value)}catch{}apply()}
window.awesomeJevTheme=Object.freeze({getMode:()=>mode,getResolved:resolved,setMode,toggle:()=>setMode(resolved()==="dark"?"light":"dark")});
media.addEventListener("change",()=>{if(mode==="system")apply()});
window.addEventListener("storage",event=>{if(event.key===key||event.key===null){mode=valid(event.newValue)?event.newValue:"system";apply()}});
document.addEventListener("click",event=>{if(event.target instanceof Element&&event.target.closest("[data-theme-toggle]"))window.awesomeJevTheme.toggle()});
document.addEventListener("DOMContentLoaded",apply,{once:true});apply()})();
