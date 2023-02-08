// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  return 'string with stuff in it';
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* var password = document.getElementById("password");

function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    var password = "";
    var passwordLength = randomNum(8, 128);

for(var i=0; i < passwordLength; i++) {
  var j = Math.floor(Math.random()*chars.length);
  password += chars.substring(j, j +1);
}
    document.getElementById("password").value = password;
}

console.log(randomNum(8, 128));
console.log(password) */