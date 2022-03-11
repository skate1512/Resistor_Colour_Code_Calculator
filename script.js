//background-color: rgba(58, 56, 56, 0.575);
const body = document.body;
const hidden = document.querySelectorAll(".hidden");
const bandCount = document.getElementById("band-count");
const form = document.getElementById("colour-codes");
const instructionBtn = document.getElementById("instruction");
const infoPopup = document.querySelector(".info-popup");
const cross = document.querySelector(".cross");
const infoBtn = document.querySelector(".instructions-diagram");
const container = document.querySelector(".container");
const firstBandInput = document.getElementById("first-band");
const firstBandDisplay = document.getElementById("first");
const firstBandTopDisplay = document.getElementById("first-band-top");
const secondBandInput = document.getElementById("second-band");
const secondBandDisplay = document.getElementById("second");
const secondBandTopDisplay = document.getElementById("second-band-top");
const thirdBandInput = document.getElementById("third-band");
const thirdBandDisplay = document.getElementById("third");
const thirdBandTopDisplay = document.getElementById("third-band-top");
const multiplierInput = document.getElementById("res-multiplier");
const multiplierDisplay = document.getElementById("multiplier");
const multiplierTopDisplay = document.getElementById("multiplier-top");
const toleranceInput = document.getElementById("res-tolerance");
const toleranceDisplay = document.getElementById("tolerance");
const toleranceTopDisplay = document.getElementById("tolerance-top");
const findValue = document.getElementById("find-value");
const clear = document.getElementById("clear");
const resultDisplay = document.querySelector(".result");
const ogColour = "rgba(228, 216, 202, 0.746)";
const colours = {
	Black: "#000",
	Brown: "#512627",
	Red: "#CC0000",
	Orange: "#D87347",
	Yellow: "#E6C951",
	Green: "#528F65",
	Blue: "#0F5190",
	Violet: "#6967CE",
	Grey: "#7D7D7D",
	White: "#FFF",
	Gold: "#C08327",
	Silver: "#BFBEBF",
};
let numberOfBands = 4;
firstBandInput.addEventListener("change", () => {
	const colour = firstBandInput[firstBandInput.selectedIndex].text;
	const colourHex = getColour(colour);
	firstBandDisplay.innerText = firstBandInput.value;
	firstBandDisplay.style.backgroundColor = colourHex;
	firstBandTopDisplay.style.backgroundColor = colourHex;
	if (colourHex != "#FFF") {
		firstBandDisplay.style.color = "#FFF";
	} else firstBandDisplay.style.color = "#000";
});

secondBandInput.addEventListener("change", () => {
	const colour = secondBandInput[secondBandInput.selectedIndex].text;
	const colourHex = getColour(colour);
	secondBandDisplay.innerText = secondBandInput.value;
	secondBandDisplay.style.backgroundColor = colourHex;
	secondBandTopDisplay.style.backgroundColor = colourHex;
	if (colourHex != "#FFF") {
		secondBandDisplay.style.color = "#FFF";
	} else secondBandDisplay.style.color = "#000";
});

thirdBandInput.addEventListener("change", () => {
	const colour = thirdBandInput[thirdBandInput.selectedIndex].text;
	const colourHex = getColour(colour);
	thirdBandDisplay.innerText = thirdBandInput.value;
	thirdBandDisplay.style.backgroundColor = colourHex;
	thirdBandTopDisplay.style.backgroundColor = colourHex;
	if (colourHex != "#FFF") {
		thirdBandDisplay.style.color = "#FFF";
	} else thirdBandDisplay.style.color = "#000";
});

multiplierInput.addEventListener("change", () => {
	const colour = multiplierInput[multiplierInput.selectedIndex].text;
	const colourHex = getColour(colour);
	multiplierDisplay.innerText = multiplierInput.value;
	multiplierDisplay.style.backgroundColor = colourHex;
	multiplierTopDisplay.style.backgroundColor = colourHex;
	if (colourHex != "#FFF") {
		multiplierDisplay.style.color = "#FFF";
	} else multiplierDisplay.style.color = "#000";
});

toleranceInput.addEventListener("change", () => {
	const colour = toleranceInput[toleranceInput.selectedIndex].text;
	const colourHex = getColour(colour);
	toleranceDisplay.innerText = toleranceInput.value;
	toleranceDisplay.style.backgroundColor = colourHex;
	toleranceTopDisplay.style.backgroundColor = colourHex;
	if (colourHex != "#FFF") {
		toleranceDisplay.style.color = "#FFF";
	} else toleranceDisplay.style.color = "#000";
});

bandCount.addEventListener("change", () => {
	hidden.forEach((item) => item.classList.toggle("hidden"));
	if (numberOfBands == 4) numberOfBands = 5;
	else numberOfBands = 4;
});

instructionBtn.addEventListener("click", () => {
	infoPopup.style.display = "flex";
	infoBtn.style.display = "none";
	container.style.display = "none";
	body.style.backgroundColor = "rgba(58, 56, 56, 0.575)";
});

cross.addEventListener("click", () => {
	infoPopup.style.display = "none";
	infoBtn.style.display = "flex";
	container.style.display = "flex";
	body.style.backgroundColor = "#fff";
});

findValue.addEventListener("click", () => {
	resultDisplay.innerHTML = "";
	if (firstBandInput.value === "-") return;
	if (secondBandInput.value === "-") return;
	if (multiplierInput.value === "-") return;
	if (toleranceInput.value === "-") return;
	let val = firstBandInput.value + secondBandInput.value;
	console.log(val);
	if (numberOfBands === 5) {
		if (thirdBandInput.value === "-") return;
		val += thirdBandInput.value;
	}
	const intVal = +val;
	const multiplierValUnit = multiplierInput.value.split(" ");
	const multiplierVal = parseInt(multiplierValUnit[0].slice(1));
	let multiplierUnit = multiplierValUnit[1];
	let resistorVal = intVal * multiplierVal;
	if (resistorVal >= 1000) {
		resistorVal /= 1000;
		if (multiplierUnit[0] === "Ω") {
			multiplierUnit = "kΩ";
		} else if (multiplierUnit[0] === "k") {
			multiplierUnit = "MΩ";
		} else {
			multiplierUnit = "GΩ";
		}
	}
	const resultSpan = document.createElement("span");
	resultSpan.innerText = `${resistorVal} ${multiplierUnit} ${toleranceInput.value}`;
	resultDisplay.appendChild(resultSpan);
});

clear.addEventListener("click", () => {
	firstBandDisplay.innerText = "-";
	firstBandDisplay.style.backgroundColor = ogColour;
	firstBandTopDisplay.style.backgroundColor = ogColour;

	secondBandDisplay.innerText = "-";
	secondBandDisplay.style.backgroundColor = ogColour;
	secondBandTopDisplay.style.backgroundColor = ogColour;

	thirdBandDisplay.innerText = "-";
	thirdBandDisplay.style.backgroundColor = ogColour;
	thirdBandTopDisplay.style.backgroundColor = ogColour;

	multiplierDisplay.innerText = "-";
	multiplierDisplay.style.backgroundColor = ogColour;
	multiplierTopDisplay.style.backgroundColor = ogColour;

	toleranceDisplay.innerText = "-";
	toleranceDisplay.style.backgroundColor = ogColour;
	toleranceTopDisplay.style.backgroundColor = ogColour;
	resultDisplay.innerHTML = "";
	form.reset();
});

function getColour(option) {
	const colour = option.split(" ")[0];
	return colours[colour];
}
