//adding the username h2 element as a var to be updated
const toBeUpdatedUserName = document.getElementById("username");
//adding the var for custom Description
const toBeUpdatedDesc = document.getElementById("description");
//creating a var for the input obtained from the textfield with id input
let userInput = document.getElementById("input") 
//creating a var for the message display area
const msgDisplay = document.querySelector(".msgDisplay ul");

//creating a var for msgContainer (the parent div to the ul)
const msgContainer = document.querySelector(".msgDisplay");


//creating a username, whatever you want it to be
let username = "Default";
//create your own custom description
let description = "Default Description"

//Updating the username.
toBeUpdatedUserName.innerText = "@" + username;
//Updating the description
toBeUpdatedDesc.innerText = description;




