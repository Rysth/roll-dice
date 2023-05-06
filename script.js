const appDice = document.querySelector("#app__dice");
const appButton = document.querySelector("#app__button");
const appList = document.querySelector("#app__list");

const diceElements = [
	"&#9856;",
	"&#9857;",
	"&#9858;",
	"&#9859;",
	"&#9860;",
	"&#9861;",
];

let counter = 0;

appButton.addEventListener("click", () => {
	appDice.classList.add("animation__roll");
	setTimeout(() => {
		appDice.classList.remove("animation__roll");
		rollDice();
	}, 1000);
});

const rollDice = () => {
	const number = Math.floor(Math.random() * 6);
	const diceFace = getDiceFace(number);
	addListElement(diceFace);
	appDice.innerHTML = diceFace;
};

const getDiceFace = (index) => {
	return diceElements[index];
};

const addListElement = (html) => {
	counter++;
	const element = document.createElement("LI");
	element.className = "app__item";
	element.innerHTML = `Roll ${counter}: <span class="app__value">${html}</span>`;

	appList.appendChild(element);
};
