const theAlerter = document.querySelector("#the-alerter");
const sandwichBuilder = document.querySelector("#sandwich-builder");
const haircutAppointment = document.querySelector("#haircut-appointment");
const createAccount = document.querySelector("#create-account");
const login = document.querySelector("#login");

const inputText = document.querySelector("#input-text");

const wheat = document.querySelector("#wheat");
const sourdough = document.querySelector("#sourdough");
const italian = document.querySelector("#italian");

const turkey = document.querySelector("#turkey");
const roastBeef = document.querySelector("#roastBeef");
const ham = document.querySelector("#ham");
const chickenBreast = document.querySelector("#chickenBreast");

const tomatoes = document.querySelector("#tomatoes");
const onions = document.querySelector("#onions");
const pickles = document.querySelector("#pickles");

const appointmentDate = document.querySelector("#appointment-date");
const hairCutter = document.querySelector("#hair-cutter-text");
const longHair = document.querySelector("#long-hair");
const shortHair = document.querySelector("#short-hair");

const usernameText = document.querySelector("#username-text");
const emailText = document.querySelector("#email-text");
const passwordText = document.querySelector("#password-text");
const confirmPasswordText = document.querySelector("#confirm-password-text");

const loginUsernameText = document.querySelector("#login-username-text");
const loginPasswordText = document.querySelector("#login-password-text");

theAlerter.addEventListener("submit", function (event) {
	event.preventDefault();
	console.log("The Alerter function called");
	let str = inputText.value;

	alert(str);

	theAlerter.reset();
});

sandwichBuilder.addEventListener("submit", function (event) {
	event.preventDefault();
	console.log("The Sandwich Builder function called");

	let str = "Your sandwich contains: ";

	if (wheat.checked) {
		str += "wheat bread, ";
	}

	if (sourdough.checked) {
		str += "sourdough bread, ";
	}

	if (italian.checked) {
		str += "italian bread, ";
	}

	if (wheat.checked || sourdough.checked || italian.checked) {
		str += "with ";
	}

	if (turkey.checked) {
		str += "turkey, ";
	}

	if (roastBeef.checked) {
		str += " roast beef, ";
	}

	if (ham.checked) {
		str += "ham, ";
	}

	if (chickenBreast.checked) {
		str += "chicken breast, ";
	}

	if (
		turkey.checked ||
		roastBeef.checked ||
		ham.checked ||
		chickenBreast.checked
	) {
		str += "with ";
	}

	if (tomatoes.checked) {
		str += "tomatoes, ";
	}

	if (onions.checked) {
		str += "onions, ";
	}

	if (pickles.checked) {
		str += "pickles, ";
	}

	alert(str);

	sandwichBuilder.reset();
});

haircutAppointment.addEventListener("submit", function (event) {
	event.preventDefault();

	let str =
		"Haircut scheduled for " +
		appointmentDate.value +
		" with " +
		hairCutter.value +
		" for ";

	if (longHair.checked) {
		str += "long hair.";
	}

	if (shortHair.checked) {
		str += "short hair.";
	}

	alert(str);

	haircutAppointment.reset();
});

let username = [];
let password = [];

createAccount.addEventListener("submit", function (event) {
	event.preventDefault();

	let str = "";

	if (usernameText.value.length < 3) {
		str += "User Name To Short! Try Again\n";
	}

	if (passwordText.value !== confirmPasswordText.value) {
		str += "Passwords Do Not Match! Try Again\n";
	}

	if (
		passwordText.value === confirmPasswordText.value &&
		passwordText.value.length < 4
	) {
		str += "Password Not Long Enough! Try Again\n";
	}

	if (!emailText.value.includes("@")) {
		str += "Not A Valid Email! Try Again\n";
	}

	if (
		usernameText.value.length >= 3 &&
		passwordText.value === confirmPasswordText.value &&
		passwordText.value.length >= 4 &&
		emailText.value.includes("@")
	) {
		str +=
			"User account created for " +
			usernameText.value +
			" with email of " +
			emailText.value;

		username.push(usernameText.value);
		password.push(passwordText.value);
	}

	alert(str);
	createAccount.reset();
});

console.log(username);
console.log(password);

login.addEventListener("submit", function (event) {
	event.preventDefault();
	let userPresent = false;
	let location = 0;

	let str = "";

	for (let i = 0; i < username.length; i++) {
		if (loginUsernameText.value === username[i]) {
			userPresent = true;
			location = i;
		}
	}
	console.log(location);
	console.log(userPresent);

	if (userPresent === true && loginPasswordText.value === password[location]) {
		str += "Successful Login!";
	} else {
		str += "Username or Password Invalid!!!";
	}

	alert(str);
	login.reset();
});
