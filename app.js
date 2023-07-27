var userName = document.querySelector("input[name = u_name]");
var userDob = document.querySelector("#u_dob");
var btnResult = document.querySelector("#btn-result");
var outputDiv = document.querySelector("#output");

// function checkPrime(number){

// if(userDob.value % 2 == 0){

// }

// }
function ou(){
    outputDiv.innerText = "User name is: " + userName.value
    console.log("clicked");
}

btnResult.addEventListener("click", ou);