function validate() {

    let email_id = "admin@database.com";
    let password = "donotshare";

    let user_mail_id = document.getElementById("inputEmail").value;
    let user_password = document.getElementById("inputPassword").value;

    if ((email_id === user_mail_id) && (password === user_password)) {
        document.getElementById("loginForm").submit();
    } else {

        // document.getElementById("error").innerText = "Incorrect Username / Password";
        // window.confirm("Invalid User");
        document.getElementById("myModal").style.display = "block";
    }


}


document.getElementById("close_1").onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}