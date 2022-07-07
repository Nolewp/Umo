
import './style.css';
import {loadNav} from './navigation';
import {loadBillbord} from './billbord';


loadNav()


const main = document.getElementById("main");
const menuBtn = document.querySelector(".menuBtn");
const umoBtn = document.querySelector(".umoBtn")


const makeDiv = () => {
    const mainbody =  document.createElement("div");
    mainbody.textContent = '';
    mainbody.classList.add("pageBdy");
    return mainbody
}

function removeChildren(d) {
    while (d.firstChild) {
        d.removeChild(d.firstChild);
    }
}

main.appendChild(makeDiv());
let pageBdy = document.querySelector(".pageBdy");

pageBdy.appendChild(loadBillbord());



menuBtn.addEventListener("click", () => {
    let pageBdy = document.querySelector(".pageBdy");
    removeChildren(pageBdy);
    console.log("remove page body");
})
umoBtn.addEventListener("click", () => {
    let pageBdy = document.querySelector(".pageBdy");
    removeChildren(pageBdy);
    pageBdy.appendChild(loadBillbord());
    console.log("remove page body");
})







  