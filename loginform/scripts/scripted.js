var attempts = 3;

function validate(){
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (name == "crownwale" && password == "080ade"){
        alert("Welcome back "+name+", it been a while");
        window.location = "/Letter-headed/index.html";
        return false;
    }
    else{
        attempts--;
        alert("You have "+ attempts + "attempts left of 3");
        window.location = "/loginform/index.html";

        if(attempts == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}