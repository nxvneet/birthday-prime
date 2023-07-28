var userName = document.querySelector("#u_name");
var uDob = document.querySelector("#u_dob");
var btnResult = document.querySelector("#btn-result");
var outputDiv = document.querySelector("#output");
var outputDiv2 = document.querySelector("#output2");



function isUserNameValid(userName) {
    return /^[a-zA-Z]+$/.test(userName);
}

function isDateOfBirthValid(userDob) {
    return /^\d{4}$/.test(userDob);
}

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


    // Validate userDob and userName
    if (userName === '') {
        output.innerHTML = "Please enter your name.";
    } else if (userDob === '') {
        output.innerHTML = "Please enter your date of birth (in DDMM format).";
    } else if (!isDateOfBirthValid(userDob)) {
        output.innerHTML = "Please enter a valid date of birth with exactly 4 digits (0-9).";
    } else if (!isUserNameValid(userName)) {
        output.innerHTML = "Please enter a valid name with characters a-z and A-Z only.";
    } else {
        // Proceed with prime check if inputs are valid
        if (dateOfBirthPrime(userDob)) {
            output.innerHTML = userName + " your date of birth is " + "<span class='prime-txt'> PRIME</span>";
        } else {
            output.innerHTML = userName + " your date of birth is" + " <span class='not-prime-txt'> NOT PRIME</span>";
        }
    }

}

btnResult.addEventListener("click", result);