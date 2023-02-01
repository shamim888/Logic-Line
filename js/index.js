// =======================head-1 section==========================
const min = document.querySelector(".cross")
const area = document.querySelector(".place")

min.addEventListener("click", function(){
    area.classList.add("hidden")
})


// =====================Menu Sec===================
const btn = document.querySelector(".mobile-menu-btn")
const menu = document.querySelector(".mobile-menu")

btn.addEventListener("click", function(){
    menu.classList.toggle("hidden")
})