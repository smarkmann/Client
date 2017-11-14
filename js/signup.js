$(document).ready(() => {

    $("#return_button").on("click", () => {

        window.location.href = "index.html";

    });

    $("#create_button").on("click", () => {

        const username = $("#username").val();
        const password = $("#password").val();
        const passwordV = $("#passwordV").val();

        if(!username || !password || !passwordV) {
            alert("Username or password has not been typed. Please try again");
        } else {
            if(password.valueOf() === passwordV.valueOf()) {
                SDK.signup(username, password, (err, data) => {
                    if (err && err.xhr.status == 400) {
                        console.log("Klient fejl");
                    }
                    else if (err) {
                        console.log("Fejl");
                    } else {
                        window.alert("Du er oprettet i systemet");

                        window.location.href = "login.html"
                    }
                });
            }else {
                alert("kodeordet matcher ikke. Prøv igen");
            }

        }
    });
});