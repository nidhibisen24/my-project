function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (email !== "" && password !== "") {
       
        document.getElementById("login-box").style.display = "none";
        document.getElementById("welcomePage").style.display = "block";
    } else {
        alert("Invalid credentials. Please try again.");
        alert("Invalid credentials. Please enter currect email and password.");
    }
}