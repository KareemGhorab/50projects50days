const btns = document.querySelectorAll("button");
const lines = document.querySelectorAll(".inner-line");
const circles = document.querySelectorAll(".circle");

const mainColor = "#3498db";
const lightGrey = "#d3d3d3";
let currentLevel = 1;

btns[0].addEventListener("click", () => {
	if (currentLevel <= 1) {
		return;
	}

	circles[currentLevel - 1].style.borderColor = lightGrey;
	lines[currentLevel - 2].style.width = "0%";

	currentLevel--;
	btns[1].removeAttribute("disabled");
	if (currentLevel === 1) {
		btns[0].setAttribute("disabled", "disabled");
	}
});

btns[1].addEventListener("click", () => {
	if (currentLevel >= 4) {
		return;
	}
	circles[currentLevel].style.borderColor = mainColor;
	lines[currentLevel - 1].style.width = "100%";

	currentLevel++;
	btns[0].removeAttribute("disabled");
	if (currentLevel === 4) {
		btns[1].setAttribute("disabled", "disabled");
	}
});
