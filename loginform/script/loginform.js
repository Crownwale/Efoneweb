var attempts = 3;

function validate(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(userName == "The HM" && password == "08028642800"){
        alert("Welcome back " + userName + ", it been a While");
        window.location = "/IDcrad.HM/idcard.html";
        return false;
    } else {
        attempts--;
        alert("You have just "+attempts+" attempts left of 3");
        window.location = "/loginform/index.html";

        if(attempts == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}