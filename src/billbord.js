import {changeToMenu} from './index';

const holder = () => {
    let hldr = document.createElement("div")
    hldr.innerText = '';
    hldr.classList.add("bannerDiv")
    return hldr
}


const content = (div) => {
    let hOne = document.createElement("h1");
    hOne.classList.add("banner");
    hOne.innerText = "Welcome to Umo the best food in town!";
    div.appendChild(hOne)

    let pOne  = document.createElement("p");
    pOne.classList.add("banner");
    pOne.innerText = "We have a full menu of dishes just waiting for you to try!";
    div.appendChild(pOne)

    let navmenu = document.createElement('button');
    navmenu.classList.add("bannerBtn");
    navmenu.textContent = "See what we are cooking";
    div.appendChild(navmenu)

    return div
}

const loadBillbord = () => {
    let bandiv = holder();
    content(bandiv);
    return bandiv;
}
export {
    loadBillbord
}