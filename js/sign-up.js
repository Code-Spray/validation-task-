let form = document.querySelector("form");

// Check each requested field and throw an error if one is not valid
function checkData(ob, fields) {
	const { username, email, password, confirm_password } = ob;
	fields.forEach((field) => {
		if (field === "username") {
			if (username.length < 3) {
				throw new Error("The username must be bigger then 2");
			}
		} else if (field === "email") {
			// Email must be long enough, have "@" after the 3rd character, and no "@." together
			if (email.length < 5 || !email.includes("@", 3) || email.includes("@.")) {
				throw new Error("Invalid Email Format");
			}
		} else if (field === "password") {
			if (password.length < 3) {
				throw new Error("Enter stronger password");
			}
		} else if (field === "confirm_password") {
			console.log("confirm_password = ", confirm_password);
			console.log("password = ", password);
			if (confirm_password !== password) {
				throw new Error("The two passwords don't match");
			}
		} else {
			throw new Error(`Unknown field: ${field}`);
		}
	});
}

// Read the current values from the form inputs
function getFormData() {
	return {
		username: document.getElementById("username").value,
		email: document.getElementById("email").value,
		password: document.getElementById("password").value,
		confirm_password: document.getElementById("conform-password").value,
	};
}

form.addEventListener("submit", (ev) => {
	// Stop the page from reloading so we can check the data first
	ev.preventDefault();

	const formOb = getFormData();

	try {
		checkData(formOb, ["username", "email", "password", "confirm_password"]);
		// Everything is fine, go to the success page
		window.location.href = "success.html";
	} catch (error) {
		console.log(`Error while checking the data : ${error.message}`);
		document.getElementById("error").innerHTML = error.message;
	}
});
