$(document).ready(() => {

    //SDK.User.loadNav();


//.click er et clickevent der er sat på login_button når der sker et event
    $("#return_button").click(() => {

        window.location.href = "index.html";

    });

    $("#login_button").click(() => {

        const username = $("#username").val();
        const password = $("#password").val();

        console.log(username)
        console.log(password)

        SDK.login(username, password, (err, data) => {
            if (!username || !password) {
                window.alert("Brugernavn eller kode er ikke skrevet. Prøv igen");
            } else {
                SDK.login(username, password, (err, data) => {
                    if (err && err.xhr.status === 401) {
                        window.alert("Forkert brugernavn eller kode");
                    } else if (err) {
                        window.alert('Error')
                        log.console("Error")
                    } else {
                        window.location.href = "user.html"
                    };


                });

            }
        });
    });
});
/*const username = $("#inputUsername").val();
const password = $("#inputPassword").val();

SDK.User.login(email, password, (err, data) => {
    if (err && err.xhr.status === 401) {
        $(".form-group").addClass("has-error");
    }
    else if (err) {
        console.log("BAd stuff happened")
    } else {
        window.location.href = "my-page.html";
    }
});*/

