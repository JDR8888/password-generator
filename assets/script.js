// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var charList = "" //initiates string for our character set
    var password = ""; // initaiates string for building our random password
    if(window.confirm('do you want lowercase letters?')) {
        charList = charList + "abcdefghijklmnopqrstuvwxyz";}
    
    if(window.confirm('do you want uppercase letters?')) {
        charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
    
    if(window.confirm('do you want numnums??')) {
        charList = charList + "1234567890";}  
    
    if(window.confirm('do you want special characters?')) {
        charList = charList + "!@#$%^&*()";}
    


    /*if(window.confirm('do you want uppercase letters?')) {
            charList charList + "";}

    if(window.confirm('do you want numbers?')) {
        charList = charList + "1234567890";}
    
    if(window.confirm('do you want special characters?')) {
                    charList = charList + ""; } */


    return charList;
} 


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