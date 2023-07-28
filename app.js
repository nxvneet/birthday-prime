var userName = document.querySelector("#u_name");
var uDob = document.querySelector("#u_dob");
var btnResult = document.querySelector("#btn-result");
var outputDiv = document.querySelector("#output");




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
    var userNameValue = userName.value;


    if (userNameValue === "" && userDob === "") {
        outputDiv.innerHTML = "<span class='error-txt'>Error: Please fill in both username and date of birth fields.</span>";
        return;
    }


    if (dateOfBirthPrime(userDob) == true) {
        outputDiv.innerHTML = userName.value + " your date of birth is " + "<span class='prime-txt'> PRIME</span>";

    } else {
        outputDiv.innerHTML = userName.value + " your date of birth is" + " <span class='not-prime-txt'> NOT PRIME</span>";

    }

}

btnResult.addEventListener("click", result);

userName.addEventListener("input", function() {
    var userNameValue = userName.value.trim();
    var userDobValue = uDob.value.trim();

    if (userNameValue !== "" && userDobValue === "") {
        outputDiv.innerHTML = "<span class='error-txt'>Error: Please fill in the date of birth field.</span>";
    } else {
        outputDiv.innerHTML = "";
    }
});

uDob.addEventListener("input", function() {
    var userNameValue = userName.value.trim();
    var userDobValue = uDob.value.trim();

    if (userNameValue === "" && userDobValue !== "") {
        outputDiv.innerHTML = "<span class='error-txt'>Error: Please fill in the username field.</span>";
    } else {
        outputDiv.innerHTML = "";
    }
});