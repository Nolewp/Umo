
const holder = () => {
    let hldr = document.createElement("div")
    hldr.innerText = '';
    hldr.classList.add("menuDiv")
    return hldr
}


const h1content = (div) => {
    let hOne = document.createElement("h1");
    hOne.classList.add("menu");
    hOne.innerText = "Menu";
    div.appendChild(hOne)

    return div
}

let menuArray = [
    ["Lasagna", 15.99],
    ["Spaghetti", 16.99],
    ["Veal", 16.99],
    ["Burger", 12.99],
];

const appendMenuItems = (lt, div) => {

    let itemHldr = document.createElement("div")
    itemHldr.innerText = '';
    itemHldr.classList.add("menuItemDiv")

    lt.forEach(element => {
        
        let food = element[0];
        let price = element[1];
        console.log(food)
        itemHldr.innerHTML += `
        <a id="menuItem">
            <div id="item">
                <p id="food"> ${food}</p>
                <p id="price">${price}</p>
            </div>
        </a>`;});
    div.appendChild(itemHldr)
    return div
}

const loadMenu = () => {
    let bandiv = holder();
    h1content(bandiv);
    appendMenuItems(menuArray, bandiv);
    return bandiv;
}

export {
    loadMenu
}