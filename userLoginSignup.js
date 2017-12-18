var userGlobal = {}
var token = ""
var isLoggedIn = false
/*begin functions required during register*/
function register() {
    let username = $("#username").val();
    let password = $("#password").val();
    let userObject = {
        username: username,
        password: password
    }
    console.log(userObject)
    let registerRequest = {
        async: true,
        crossDomain: true,
        url: "http://localhost:5000/auth/signup",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        },
        processData: false,
        data: JSON.stringify(userObject)
    }

    $.ajax(registerRequest)
        .done(response => registerUserSuccess(response))
        .fail(err => {
            console.log('error', err)
            registerUserFail(err.responseJSON.message)
        })
    console.log(registerRequest)
}

function registerUserSuccess(response) {
    console.log(response)
    userGlobal = response.user
    isLoggedIn = true
    changeLoginNavBarToUserName()
}

function registerUserFail(message) {

}
/*end functions required during register*/

/*begin functions required during login*/
function login() {
    let username = $("#username").val();
    let password = $("#password").val();
    let userObject = {
        username: username,
        password: password
    }
    console.log(userObject)
    var loginRequest = {
        async: true,
        crossDomain: true,
        url: "http://localhost:5000/auth/login",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache"
        },
        processData: false,
        data: JSON.stringify(userObject)
    }

    $.ajax(loginRequest).done(function (response) {
        token = response.token
        userGlobal = response.user
        isLoggedIn = true
        changeLoginNavBarToUserName()
        console.log(response);
    });
}
/*end functions required during register*/

function changeLoginNavBarToUserName() {
    let name = userGlobal.username;
    let htmlUserName = '<span class="profile-name"> Welcome ' + name + ' </span>'
    $("#login-navbar").empty()
    $("#login-navbar").append(htmlUserName)
    $("#login-navbar").css("padding-top", "8px")
}

exports = {
    userGlobal,
    token,
    isLoggedIn
}