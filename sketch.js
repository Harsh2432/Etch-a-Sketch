const body = document.querySelector("body");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    body.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 1000);

const options = document.querySelector(".options");

const customColor = document.createElement("button");
customColor.classList.add("customColor");
customColor.textContent = "Color Mode";
customColor.style.cssText = "color: black; justify-content: center; align-items: center; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px; height: 50px; width: 200px;";
customColor.style.backgroundColor = getRandomColor();

customColor.addEventListener("click", () => {
    customColor.style.backgroundColor = getRandomColor();
});

options.appendChild(customColor);

const rainbowColor = document.createElement("button");
rainbowColor.classList.add("rainbowColor");
rainbowColor.textContent = "Rainbow Mode";
rainbowColor.style.cssText = "color: black; justify-content: center; align-items: center; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px; height: 50px; width: 200px;";

function rainbowButtonColor() {
    rainbowColor.style.backgroundColor = getRandomColor();
}

setInterval(rainbowButtonColor, 1000);

options.appendChild(rainbowColor);

const eraser = document.createElement("button");
eraser.classList.add("eraser");
eraser.textContent = "Eraser";
eraser.style.cssText = "color: black; justify-content: center; align-items: center; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px; height: 50px; width: 200px;";

options.appendChild(eraser);

const clear = document.createElement("button");
clear.classList.add("clear");
clear.textContent = "Clear";
clear.style.cssText = "color: black; justify-content: center; align-items: center; font-family: monospace; font-size: 18px; font-weight: bold; padding: 10px; border-radius: 10px; height: 50px; width: 200px;";

const boxes = document.querySelector(".boxes");

options.appendChild(clear);

function boxMaker() {
    const drawBoxes = document.createElement("button");
    drawBoxes.classList.add("drawBoxes");
    drawBoxes.style.cssText = "height: 30px; width: 30px; padding: 5px; border: #E5E7EB;";
    boxes.appendChild(drawBoxes);
}

for(let i = 0; i < 312; i++) {
    boxMaker();
}