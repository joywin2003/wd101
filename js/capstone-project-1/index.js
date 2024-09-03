let form = document.getElementById("form");

let formSubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndconditions = document.getElementById("acceptTerms").checked;
  console.log(name, email, password, dob, acceptedTermsAndconditions);
};
