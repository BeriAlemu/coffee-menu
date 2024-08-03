const header = document.querySelector(".header");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-bar");

let i = true
searchBtn.addEventListener("click", () => {
    if (i) {
        search.style.display = "block"
        i = false
    } else if (!i) {
        search.style.display = "none"
        i = true
    }
})
