let colors = ["#fc0394", "#a103fc", "#03fcba", ""];
let colorIndex = 0;
function theme() {
    let logo_container = document.querySelector(".logo"); 
    let icon = document.getElementsByClassName("fa-solid");
    let link = document.getElementsByTagName("a");
    let head = document.getElementsByTagName("h1");
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    // first logo container
    logo_container.style.backgroundColor = colors[colorIndex];
    //Iterate through anchor tags
    Array.from(link).forEach(element => {
        element.style.color = colors[colorIndex];
    });
    //Iterate through fa-solid icon elements
    Array.from(icon).forEach(element => {
        element.style.color = colors[colorIndex];
    });
    //Iterate through h1 tag
    Array.from(head).forEach(element => {
        element.style.color = colors[colorIndex];
    });
    //Change background of #business_banner
    document.getElementById("business_banner").style.backgroundColor = colors[colorIndex];
    colorIndex++;
}