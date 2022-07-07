const nav = () => {
    const head = document.createElement('header');
    const navigator = document.createElement('nav');
  
    // use your function!
    head.appendChild(navigator);
    navigator.textContent = '';
    navigator.classList.add('nav');
    const title = document.createElement('button');
    const navmenue = document.createElement('button');
    
  
    navmenue.classList.add("menuBtn");
    navmenue.textContent = "Menu";
  
  
    title.classList.add("umoBtn");
    title.textContent = "Umo!";
  
    
    navigator.appendChild(title);
    navigator.appendChild(navmenue);

    return head;
  }

  const loadNav = () => {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(nav());
  }
  

  export {
    loadNav
  };