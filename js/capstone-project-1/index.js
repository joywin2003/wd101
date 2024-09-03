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

const dobInput = document.getElementById("dob");
const formatDate = (date) => date.toISOString().split("T")[0];
dobInput.setAttribute("min", formatDate(minDate));
dobInput.setAttribute("max", formatDate(maxDate));

dobInput.addEventListener("input", () => {
  console.log(new Date(dob.value), new Date(minDate));
  if (dob.value === "") {
    dobInput.setCustomValidity("Date of birth is required.");
  } else if (
    new Date(dob.value) < new Date(minDate) ||
    new Date(dob.value) > new Date(maxDate)
  ) {
    dobInput.setCustomValidity(`Date of birth must be between 18 and 55.`);
  } else {
    dobInput.setCustomValidity("");
  }
});

document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!acceptTerms.checked) {
    acceptTerms.setCustomValidity("You must accept the terms and conditions.");
  } else {
    acceptTerms.setCustomValidity("");
  }
  acceptTerms.reportValidity();
  if (document.getElementById("user-form").checkValidity()) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Form not submitted successfully!");
  }
});
