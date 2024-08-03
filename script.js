const header = document.querySelector(".header");
const search = document.querySelector(".search");

search.addEventListener("keyup", () => {
    header.innerHTML = search.value;
})