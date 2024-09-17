const searchbarcontainerEl= document.querySelector(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click",()=>{
    searchbarcontainerEl.classList.toggle("active");
});