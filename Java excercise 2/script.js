document.getElementById("demo").addEventListener("click", bak);

function bak() {
    document.getElementById("demo").style.color = "red";
}


function changeHeadingText() {
    var headingElement = document.getElementById("myHeading");
    headingElement.textContent = "Interactive Java Page";
    headingElement.style.color = 'gray';
    headingElement.style.fontFamily = 'Roboto';
}

function changeBackground(color) {
    document.querySelector('.contentBox').style.backgroundColor = color;
}

function 