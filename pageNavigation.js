function toPosts() {
    $("#navbar-info").removeClass("active");
    $("#navbar-profile").removeClass("active");
    $("#info-page").css("display", "none");
    $("#profile-page").css("display", "none");
    $("#navbar-posts").addClass("active");
    $("#posts-page").css("display", "block");
}

function toInfo() {
    $("#navbar-posts").removeClass("active");
    $("#navbar-profile").removeClass("active");
    $("#posts-page").css("display", "none");
    $("#profile-page").css("display", "none");
    $("#navbar-info").addClass("active");
    $("#info-page").css("display", "block");
}

function toProfile() {
    $("#navbar-info").removeClass("active");
    $("#navbar-posts").removeClass("active");
    $("#posts-page").css("display", "none");
    $("#info-page").css("display", "none");
    $("#navbar-profile").addClass("active");
    $("#profile-page").css("display", "block");
}
