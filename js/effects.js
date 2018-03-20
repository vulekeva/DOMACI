$(document).ready(function() {
// On Click SignIn Button Checks For Valid E-mail And All Field Should Be Filled
    $("#ulogujSe").click(function() {
        var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if ($("#loginemail").val() == '' || $("#loginpassword").val() == '') {
            alert("Popunite sva polja...!!!!!!");
        } else if (!($("#loginemail").val()).match(email)) {
            alert("Please enter valid Email...!!!!!!");
        } else {
            alert("You have successfully Logged in...!!!!!!");
            $("form")[0].reset();
        }
    });
    $("#registrujSe").click(function() {
        var email = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if ($("#name").val() == '' || $("#registeremail").val() == '' || $("#registerpassword").val() == '' || $("#contact").val() == '') {
            alert("Please fill all fields...!!!!!!");
        } else if (!($("#registeremail").val()).match(email)) {
            alert("Please enter valid Email...!!!!!!");
        } else {
            alert("You have successfully Sign Up, Now you can login...!!!!!!");
            $("#form")[0].reset();
            $("#ulogujSe").slideUp("slow", function() {
                $("#ulogujSe").slideDown("slow");
            });
        }
    });
// On Click SignUp It Will Hide Login Form and Display Registration Form
    $("#signup").click(function() {
        $("#ulogujSe").slideUp("slow", function() {
            $("#registrujSe").slideDown("slow");
        });
    });
// On Click SignIn It Will Hide Registration Form and Display Login Form
    $("#signin").click(function() {
        $("#registrujSe").slideUp("slow", function() {
            $("#ulogujSe").slideDown("slow");
        });
    });
});