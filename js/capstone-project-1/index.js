const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const acceptTerms = document.getElementById("acceptTerms");

console.log(name.value);

const validate = (element, message) => {
  if (element.validity.valueMissing || element.validity.typeMismatch) {
    element.setCustomValidity(message);
  } else {
    element.setCustomValidity("");
  }
  element.reportValidity();
};

email.addEventListener("input", () => {
  validate(email, "Please enter a valid email address.");
});
name.addEventListener("input", () => {
  validate(name, "Name is required.");
});
password.addEventListener("input", () => {
  validate(password, "Password is required.");
});
dob.addEventListener("input", () => {
  validate(dob, "Date of birth is required.");
});
acceptTerms.addEventListener("input", () => {
  validate(acceptTerms, "Please accept the terms and conditions.");
});

document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (document.getElementById("user-form").checkValidity()) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Form not submitted successfully!");
  }
});
