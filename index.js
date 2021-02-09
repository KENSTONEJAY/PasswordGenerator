//Generate a password 
function passGenerate() {

let length = document.getElementById("").value;

//set available values 
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+{}|:<>?`-=[]\',./"
};

//make a loop
for(var i = 0; i values <= i++){
    password = password + values.charAt(Math.floor(Math.random( * Math.floor(values.length - 1))));

//diplay generated password in the display box 
document.getElementById("password").value = password;
}