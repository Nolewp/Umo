
const holder = () => {
    let hldr = document.createElement("div")
    hldr.innerText = '';
    hldr.classList.add("menuDiv")
    return hldr
}


const content = (div) => {
    let hOne = document.createElement("h1");
    hOne.classList.add("menu");
    hOne.innerText = "Menu";
    div.appendChild(hOne)

    let pOne  = document.createElement("p");
    pOne.classList.add("menu-item");
    pOne.innerText = "Lasnaga";
    div.appendChild(pOne)

    return div
}


const loadMenu = () => {
    let bandiv = holder();
    content(bandiv);
    return bandiv;
}

export {
    loadMenu
}