function toggleMenu(){
const menu=document.querySelector(".menu-links");
menu.style.display=menu.style.display==="flex"?"none":"flex";
}

/* Prevent mobile overflow bug */
window.addEventListener("load",()=>{
document.body.style.overflowX="hidden";
});
