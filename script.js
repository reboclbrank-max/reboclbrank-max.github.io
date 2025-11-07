
document.addEventListener('DOMContentLoaded',()=>{
 const y=new Date().getFullYear();
 document.querySelectorAll('[data-year]').forEach(e=>e.textContent=y);
});
