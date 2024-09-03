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

acceptTerms.addEventListener("input", () => {
  validate(acceptTerms, "Please accept the terms and conditions.");
});

const today = new Date();
const minAge = 18;
const maxAge = 55;

const minDate = new Date(
  today.getFullYear() - maxAge,
  today.getMonth(),
  today.getDate()
);
const maxDate = new Date(
  today.getFullYear() - minAge,
  today.getMonth(),
  today.getDate()
);

const dobValue = new Date(dob.value);
const dobInput = document.getElementById("dob");
const formatDate = (date) => date.toISOString().split("T")[0];
dobInput.setAttribute("min", formatDate(minDate));
dobInput.setAttribute("max", formatDate(maxDate));

dob.addEventListener("input", () => {
  if (dob.value === "") {
    dob.setCustomValidity("Date of birth is required.");
  } else if (dobValue < minDate || dobValue > maxDate) {
    dob.setCustomValidity(
      `Date of birth must be between ${minAge} and ${maxAge} years old.`
    );
  } else {
    dob.setCustomValidity("");
  }
});

document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (document.getElementById("user-form").checkValidity()) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Form not submitted successfully!");
  }
});
