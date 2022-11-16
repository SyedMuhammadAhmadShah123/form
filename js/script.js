let fullName = document.getElementById('name').value
let email = document.getElementById('email').value
let phoneNumber = document.getElementById('phoneNumber').value
let password = document.getElementById('pswd').value
let confirmPassword = document.getElementById('cPswd').value
// let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

console.log(fullName)
console.log(email)
console.log(phoneNumber)
console.log(password)
console.log(confirmPassword)

document.getElementById("tableR1").innerHTML = fullName
document.getElementById("tableR2").innerHTML = email
document.getElementById("tableR3").innerHTML = phoneNumber
document.getElementById("tableR4").innerHTML = password
document.getElementById("tableR5").innerHTML = confirmPassword

function isUpper(str) {
  return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function isLower(str) {
  return /[a-z]/.test(str) && !/[A-Z]/.test(str);
}
function hasSpecialCharacter(string) {
  // if(format.test(string)) {
  //   return true;
  // } else {
  //   return false;
  // }
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string)
}
function hasNumber(str){
  return /\d/.test(str)
}

function validateForm() {
    let fullName = document.forms["myForm"]["name"].value
    let email = document.forms["myForm"]["email"].value
    let phoneNumber = document.forms["myForm"]["phoneNumber"].value
    let password = document.forms["myForm"]["pswd"].value
    let confirmPassword = document.forms["myForm"]["cPswd"].value
    let upperCharacter = false
    let lowerCharacter = false
    let specialCharacter = false
    let isNumber = false

    // checking for empty fields
    if (fullName == "" || email == "" || phoneNumber == "" || password == "" || confirmPassword == "") {
      alert("All fields must be filled out")
      return false
    }
    
    // checking for minimum length of the password
    if ( password.length < 8 ) {
      return alert("Minimum length of password is at-least 8 Characters")
    }

    for(let i = 0; i < password.length; i++) {
      // checking for upper case
      if (isUpper(password[i])) {
         upperCharacter = true
      }
      // checking for lower case
      if (isLower(password[i])) {
        lowerCharacter = true
      }
      // checking for numbers
      if(hasNumber(password[i])){
        isNumber = true
      }
      // checking for special characters
      if(hasSpecialCharacter(password[i])) {
        specialCharacter = true
      }
    }
    if(!upperCharacter){
      return alert("There is no upper case")
    }
    if(!lowerCharacter){
      return alert("There is no Lower case")
    }
    if(!isNumber){
      return alert("There is no number")
    }
    if(!specialCharacter){
      return alert("There is no special character")
    }
    if(password != confirmPassword){
      return alert("Password and confirm password should be same.")
    }
    
    // for(let i = 0; i < password.length; i++) {
    //   // if (isLower(password[i])) {
    //   //    lowerCharacter = true
    //   // }
    // }
    // if(!lowerCharacter){
    //   alert("There is no Lower case")
    // }
    // if(password != confirmPassword){
    //   alert("Password and confirm password should be same.")
    // }
    // for(let i = 0; i < password.length; i++) {
    //   // if(hasSpecialCharacter(password[i])) {
    //   //   specialCharacter = true
    //   // }
    //   // if(hasNumber(password[i])){
    //   //   isNumber = true
    //   // }
    // }
    // if(!specialCharacter){
    //   alert("There is no special character")
    // }
    // if(!isNumber){
    //   alert("There is no number")
    // }
  }



