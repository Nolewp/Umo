const footHolder = () => {
    const foot = document.createElement('div')
    foot.innerText = '';
    foot.classList.add('footer')
    return foot
} 

const foothOneContent = (div) => {
    const name = document.createElement('h3')
    name.innerText = "Umo Restaurant";
    return div
}

const footHours = (div) => {
    let hoursDiv = document.createElement('div');
    hoursDiv.innerText = '';

    const hours = document.createElement('h4');
    hours.innerText = "Hours";
    hoursDiv.appendChild(hours);

    const hours1 = document.createElement('p');
    hours1.innerText = 'Monday - Thursday: 11AM - 10PM';
    hoursDiv.appendChild(hours1);

    const hours2 = document.createElement('p');
    hours2.innerText = ' ';
    hoursDiv.appendChild(hours2);

    const hours3 = document.createElement('p');
    hours3.innerText = 'Friday - Saturday: 11AM - 11PM';
    hoursDiv.appendChild(hours3);

    const hours4 = document.createElement('p');
    hours4.innerText = '';
    hoursDiv.appendChild(hours4);

    const hours5 = document.createElement('p');
    hours5.innerText = 'Sunday: Closed';
    hoursDiv.appendChild(hours5);

    div.appendChild(hoursDiv)
    return div
}

const loadFooter = () => {
    let footer = footHolder();
    foothOneContent(footer);
    footHours(footer);
    return(footer)
  }
  

  export {
    loadFooter
  };