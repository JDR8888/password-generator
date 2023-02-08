// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    let acceptableLength = Math.floor(Math.random() * (129-8) + 8); //picks random int between 8 and 128 to autopopulate if the user doesn't input a number
    let charCheck = 0; // will be used make sure some type of char (lowercase, numbers, etc.) is selected
    var passwordLength = Number(prompt("how long you want your password? between 8 and 128 characters please", acceptableLength));
    let criteria = (passwordLength < 129 && passwordLength >=8);
    if(!criteria) { //if the user doesn't put in an acceptable length, i will reset passwordLength variable back to a random int between 8 and 128
        passwordLength = acceptableLength;
        alert('you failed at picking a number that matches criteria so we stepped in and handled it for you, mmmkay?');
    }
    var charList = "" //initiates string for our character set
    var password = ""; // initaiates string for building our random password
    if(window.confirm('do you want lowercase letters?')) {
        charList = charList + "abcdefghijklmnopqrstuvwxyz";
        charCheck = charCheck + 1;} //adds all lowercase characters to our empty string if yes
        
    if(window.confirm('do you want uppercase letters?')) {
        charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        charCheck = charCheck + 1;}
    // adds all uppercase characters to our string if yes

    if(window.confirm('do you want numnums??')) {
        charList = charList + "1234567890";
        charCheck = charCheck + 1;}  
    // adds all numnums to our string if yes
    if(window.confirm('do you want special characters?')) {
        charCheck = charCheck + 1;
        charList = charList + "!@#$%^&*()";}
         //adds spec char to string if yes. next, need to set a for loop to iterate # of times based on password length results, so can do for loop (let i=0; i<=passwordLength; i++) and for every iteration, will generate a random number between 0 and length of charList-1 to take charList[i] and append to password, so password += charList[i] and then when the loop is finished, we should have our full password and we will return it. 
        if (charCheck === 0) {
            alert('you messed up, kid. you gotta pick at least one character type for your password');
            generatePassword();
        } 
        var nextChar;
        for (let i = 0; i <= passwordLength; i++) {
            nextChar = Math.floor(Math.random() *(charList.length - 0));
            password = password + charList[nextChar];
            // console.log(nextChar);
            // console.log(password);
    }
    
    return password;
} 

generateBtn.addEventListener("click", writePassword);
    

/* var password = document.getElementById("password")*/