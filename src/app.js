const height = document.getElementById("height");
const width = document.getElementById("width"); 
const button = document.getElementById("generateCard");

const upperIcon = document.getElementById("upperSuitIcon");
const suit = document.getElementById("suit");
const bottomIcon = document.getElementById("bottomSuitIcon");

const cardBodyDimensions=document.querySelector(".cardBody");

const suits = ["♦", "♥", "♠", "♣"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];



window.onload = function() {
  generateCard();
    alert("Web load successfully!");
    width.placeholder=`${cardBodyDimensions.offsetWidth}px`;
    width.value=`${cardBodyDimensions.offsetWidth}`;
    height.placeholder=`${cardBodyDimensions.offsetHeight}px`;
    height.value=`${cardBodyDimensions.offsetHeight}`;
};



function updateCardBody() {
  if (height.value) cardBodyDimensions.style.height = `${height.value}px`;
  if (width.value) cardBodyDimensions.style.width = `${width.value}px`;

    const fontSizeBase = Math.min(height.value, width.value); // base proporcional
    upperIcon.style.fontSize = `${fontSizeBase * 0.25}px`;
    suit.style.fontSize = `${fontSizeBase * 0.3}px`;
    bottomIcon.style.fontSize = `${fontSizeBase * 0.25}px`;

}

function generateCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  upperIcon.textContent = randomSuit;
  suit.textContent = randomNumber;
  bottomIcon.textContent = randomSuit;
  if(randomSuit === "♥" || randomSuit === "♦") {
    upperIcon.style.color = "#ff0000";
    bottomIcon.style.color = "#ff0000";
  }
}

const interval= setInterval(generateCard,"10000");



height.addEventListener("input", ()=>{
  updateCardBody() ;
/*La logica del siguiente if es para que el valor del input height no baje de 0.
Por que hacerlo asi y no poniendo un min="0"?
R/: Porque cuando hago un min="0" tanto poniendolo en el HTML o manipulando el DOM con JS, el estilo de la clase .inputs reduce si width y se deforma.
Por qe?ue suced
R/: No se, lo unico que se es que es mas facil aplicar una sencilla logica en JS que echarle horas al CSS JAJAJAJJJAJA */
  if(height.value<0)
    height.value= 0;
});


width.addEventListener("input", updateCardBody);


button.addEventListener("click", ()=>{
  generateCard();
  clearInterval(interval);
});
