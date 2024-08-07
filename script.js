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

var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getMinutes() * 0.5;
        document.querySelector(".analog-sec").style.transform = "rotate(" + second + "deg)";
        document.querySelector(".analog-min").style.transform = "rotate(" + minute + "deg)";
        document.querySelector(".analog-hour").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);