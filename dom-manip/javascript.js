const container = document.querySelector("div#container");
console.log(container);

const redP = document.createElement("p");
redP.style.color = "red";
redP.textContent = "Hey I'm red!";
const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";
container.appendChild(redP);
container.appendChild(blueH3);

const divBlack = document.createElement("div");
divBlack.style.cssText = "border-block-color: black; border: solid; background-color: pink;";


const h1P = document.createElement("h1")
h1P.textContent = "I'm in a div"
const divP = document.createElement("p")
divP.textContent = "ME TOO!"

divBlack.appendChild(h1P)
divBlack.appendChild(divP)
container.appendChild(divBlack);


// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with 
// the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, 
// append the <h1> and <p> to it before adding it to the container.