//Use RegEx to validate form
function validateForm() {
  var fname = document.forms["contactForm"]["fname"];
  var lname = document.forms["contactForm"]["lname"];
  var telephone = document.forms["contactForm"]["telephone"];

  var phone = document.forms["contactForm"]["telephone"].value;
  var phoneRegEx = /^[0-9][\s./0-9]*$/;
  var phoneResult = phoneRegEx.test(phone);

  var email = document.forms["contactForm"]["email"].value;
  var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/;
  var emailResult = emailRegEx.test(email);


  if (fname.value == "") {
    alert("Enter your first name!");
    return false;
  }

  if (lname.value == "") {
    alert("Enter your last name!");
    return false;
  }

  if (phoneResult == false) {
    alert("Enter a valid phone number!");
    return false;
  }

  if (emailResult == false) {
    alert("Enter a valid email!");
    return false;
  }

}
