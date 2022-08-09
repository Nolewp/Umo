
const holder = () => {
    let hldr = document.createElement("div")
    hldr.innerText = '';
    hldr.classList.add("menuDiv")
    return hldr
}


const h1content = () => {
    let hOne = document.createElement("h3");
    hOne.classList.add("mainCourse");
    hOne.innerText = "Main Course";
    return hOne
}
const startersDiv = () => {
    let starters = document.createElement("h3");
    starters.classList.add("startersCourse");
    starters.innerText = "Starters";
    return starters
}   

let mainArray = [
    ["Lasagna", 15],
    ["Spaghetti", 16],
    ["Veal", 16],
    ["Burger", 12],
];

let startArray = [
    ["Salad", 15],
    ["Soup", 16],
    ["Tacos", 16],
    ["Clams", 12],
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
                <p id="food"> ${food} ${price} </p>
            </div>
        </a>`;});
    div.appendChild(itemHldr)
    return div
}

const addtoMain = () => {

}

const loadMenu = () => {
    let bandiv = holder();
    let start = appendMenuItems(startArray,  startersDiv());
    let mainCourse = appendMenuItems(mainArray, h1content());
    bandiv.appendChild(start);
    bandiv.appendChild(mainCourse);
    
    
    return bandiv;
}

export {
    loadMenu
}