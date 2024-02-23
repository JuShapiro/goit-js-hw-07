const input = document.querySelector("input");
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click",()=>createBoxes(Number(input.value)));
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount){
  if(amount < 1 || amount > 100){
    return alert("Введіть число від 1 до 100");
  }

  destroyBoxes();

  let size = 30;
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.width =`${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxesArray.push(element);
    size += 10
  }
  boxesContainer.append(...boxesArray);
  input.value = "";
};

function destroyBoxes() {
  boxesContainer.innerHTML ="";
  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
