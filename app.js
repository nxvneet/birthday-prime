var userName = document.querySelector("#u_name");
var uDob = document.querySelector("#u_dob");
var btnResult = document.querySelector("#btn-result");
var outputDiv = document.querySelector("#output");
var outputDiv2 = document.querySelector("#output2");

// var day;
// var month;

// function validation(){

//     if(userName != "[a-zA-Z]"){
//         alert("Username can't have anything other than a-zA-Z - Try again!");
//         return false;
//     }
//     else if(uDob != "[0-9]"){
//         alert("Date of birth can be added in DDMM format only");
//         return false;
//     }
//     else{
//         return true;
//     }

// }

function checkPrime(number) {

    if (number <= 1) {
        return false;
    }
    for (var i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;

}

function dateOfBirthPrime(userDob) {

    var day = Number(userDob.slice(0, 2));
    var month = Number(userDob.slice(2, 4));

    return checkPrime(day) && checkPrime(month);

}


function result() {
    var userDob = uDob.value;
    if (dateOfBirthPrime(userDob) == true) {
        outputDiv.innerHTML = userName.value + " your date of birth is " + "<span class='prime-txt'> PRIME</span>";

    } else {
        outputDiv.innerHTML = userName.value + " your date of birth is" + " <span class='not-prime-txt'> NOT PRIME</span>";

    }

}

btnResult.addEventListener("click", result);