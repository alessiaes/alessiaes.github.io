function validateForm() {
  var x = document.forms["myForm"]["subject"].value;
  if (x == "") {
    alert("Message must be filled out");
    return false;
  }
}

function myFunction() {
  alert("The form was submitted successfully!");
}

