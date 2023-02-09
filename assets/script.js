// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var charList = ""; //initiates string for our character set
    var password = ""; // initaiates string for building our random password
    let charCheck = 0; // will be used make sure some type of char (lowercase, numbers, etc.) is selected

    if(window.confirm('We can do lowercase letters, how does that sound?')) {
        charList = charList + "abcdefghijklmnopqrstuvwxyz";
        charCheck =+ charCheck + 1;} 
        //adds all lowercase characters to our empty string if yes

    if(window.confirm('What about uppercase letters?')) {
        charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        charCheck = charCheck + 1;}
    // adds all uppercase characters to our string if yes

    if(window.confirm('How do you feel about numbers ??')) {
        charList = charList + "1234567890";
        charCheck = charCheck + 1;}  
    // adds all numnums to our string if yes

    if(window.confirm('Special characters are half off today, want to try some of those?')) {
        charCheck = charCheck + 1;
        charList = charList + "!@#$%^&*()";}
         //adds spec char to string if yes. 
         //time for quality control. if the user picked at least one of the different character sets available, charCheck will be > 0 and we will just move past the next conditional statement. however, if the user didn't pick any of the options they will have to start over, and we go back to the beginning of the function. 
    if (charCheck === 0) {
        alert("Yikes. You messed up, kid. You need to pick at least one character type for your password. Because it's your lucky day you get to keep trying until you get it right.");
            generatePassword();} //recursion will bring us back to the start if our quality check is triggered

    let acceptableLength = Math.floor(Math.random() * (129-8) + 8); //picks random int between 8 and 128 to autopopulate if the user doesn't input a number. this will only be needed if the user does not pick an appropriate length. 
    var passwordLength = Number(prompt("How long would you like your password? Between 8 and 128 characters please. We can pick a length for you if you don't feel like it or if you forget how numbers work.", acceptableLength));
    var criteria = (passwordLength < 129 && passwordLength >=8);

//if the user doesn't put in an acceptable length, the function will reset passwordLength variable back to a random int between 8 and 128
    if(!criteria) { 
        passwordLength = acceptableLength;
        alert('Wow. You failed to pick a number that matches criteria but we stepped in and handled it for you, mmmkay?'); }

        var nextChar; // initialize variable to hold the index # of character list to pick from for each new character being added to the password. next - the for loop will iterate # of times equal to the length that we need our password to be (i.e. an iteration to place a random character in every single index of the password) 
        for (var i = 0; i < passwordLength; i++) {
            nextChar = Math.floor(Math.random() *(charList.length - 0)); 
            password = password + charList[nextChar];
    }
    
    return password;
} 

generateBtn.addEventListener("click", writePassword);
