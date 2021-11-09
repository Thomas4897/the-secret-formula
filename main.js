const form = document.querySelector("form");
const inputText = document.querySelector("#input-text");

const inputSubmit = document.querySelector("#input-submit");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	let str = inputText.value;

	alert(str);
});
