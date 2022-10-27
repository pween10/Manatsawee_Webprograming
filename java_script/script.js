document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#login").onsubmit = function () {
        // get value for input
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let checkUsername = false;
    let checkPassword = false;
    let check = false;
    let consoleMessageUsername="";
    let consoleMessagePassword="";
    
   //alert(" username : " + username + " password : " +password );

        if (username.length >=8){
            checkUsername = true
        }else{
            checkUsername = false;
            consoleMessageUsername = "Please input username more than 8 characters!";
        }
        if (username.length >=8){
            checkPassword = true
        }else{
            checkPassword = false;
            consoleMessagePassword = "Please input password more than 8 characters!";
        }

        document.querySelector("#errorUsername").innerHTML = consoleMessageUsername;
        document.querySelector("#errorPassword").innerHTML = consoleMessagePassword;

        check = checkUsername & checkPassword ;
        alert(check);
        return check;




    };
    });