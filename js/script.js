let fullName = document.getElementById('name').value
let email = document.getElementById('email').value
let phoneNumber = document.getElementById('phoneNumber').value
let password = document.getElementById('pswd').value
let confirmPassword = document.getElementById('cPswd').value

console.log(fullName)
console.log(email)
console.log(phoneNumber)
console.log(password)
console.log(confirmPassword)

document.getElementById("tableR1").innerHTML = fullName
document.getElementById("tableR2").innerHTML = email
document.getElementById("tableR3").innerHTML = phoneNumber
document.getElementById("tableR4").innerHTML = password
document.getElementById("tableR4").innerHTML = confirmPassword

