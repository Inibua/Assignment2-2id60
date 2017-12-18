import {
    userGlobal,
    token,
    isLoggedIn
} from './userLoginSignup';

$(document).ready(() => {
    /*$("#uploadNewPostButton").click(uploadPost);*/
    $("#form").each(function () {
        $(this).submit(function (e) {
            console.log(e);
            return false;
        });
    });

    $("#form2").each(function () {
        $(this).submit(function (e) {
            console.log(e);
            e.preventDefault();
        });
    });

    $("#login-register").each(function () {
        $(this).submit(function (e) {
            console.log(e);
            e.preventDefault();
        });
    });

    postPost()

});

function typa() {
    console.log(userGlobal)
    console.log(token)
    console.log(isLoggedIn)
}

function uploadPost() {
    empty = " ";
    title = $("#title-new-post").val();
    $("#title-new-post").text(empty);
    imageLink = $("#link-picture-new-post").val();
    if (title == "") {
        alert("Please insert a title!");
        return;
    } else if (imageLink == "") {
        alert("Please insert a valid image url!");
        return;
    } else {
        let id = Math.floor(Math.random() * 100000) + 1
        $(".posts.content").prepend(createPost(id));
        $("#post" + id).find("#heading").text(title);
        $("#post" + id).find("#image").attr("src", imageLink)
        $("#closeUpload").trigger("click");
    }
}

function createPost(id) {

    const html = '<div class="single-post container" id="post' + id + '">' +
        '<div class="single-post-image-container">' +
        '<h2 class="single-post-heading" id ="heading"></h2>' +
        '<img class="single-post-image" id="image"/>' +
        '</div>' +
        '<div class="votes-comment-buttons">' +
        '<span class="votes-comments">' +
        '<span class="vote-buttons">' +
        '<button class="like-button" id="button' + id + '" onClick="changeColorLike(' + id + ')"><span class="glyphicon glyphicon-thumbs-up"></span> Like </button>' +
        '</span>' +
        '<span class="show-comment-button">' +
        '<button type="button" class="open-comments-button" onClick="openCommentsPost(' + id + ')"><span class="glyphicon glyphicon-comment"></span> Comments </button>' +
        '</span>' +
        '</span>' +
        '</div>' +
        '<div class="comments-container container" id="commentsPost' + id + '">' +
        '<div class="comments-content">' +
        '<div class="comments-body">' +
        '<div class="comments-write-comments">' +
        '<h4>Write Comment</h4>' +
        '<input type="comment" id="input-text-comment-id-' + id + '"/>' +
        '<button id="post-comment-post' + id + '" onClick="uploadComment(' + id + ')">Comment</button>' +
        '</div>' +
        '<div class="comments-content2">' +
        '</div> ' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div><!--end of single post container-->'

    return html;
}




function createComment(name, content) {
    let idComment = Math.floor(Math.random() * 100000) + 1
    const comment = '<div class="single-comment id=' + idComment + '">' +
        '   <h4>' + name + '</h4>' +
        '   <p>' + content + '</p>' +
        '</div>'
    return comment;
}

function uploadComment(id) {
    let idUser = Math.floor(Math.random() * 100000) + 1
    let name = "Some user" + idUser;
    content = $("#input-text-comment-id-" + id).val();
    if (content == "") {
        alert("Please insert some text in the field. Do not upload comments without content!");
        return;
    } else {
        $("#commentsPost" + id).find(".comments-content2").prepend(createComment(name, content));
    }
}

function changeColorLike(id) {
    let color = $("#button" + id)[0]['style']['background-color'];
    if (color === "aliceblue" || color === "") {
        $("#button" + id).css("background-color", '#00ccff');
    } else {
        $("#button" + id).css("background-color", 'aliceblue');
    }
}

function openCommentsPost(id) {
    let disp = $("#commentsPost" + id)[0]['style']['display'];
    console.log($("#commentsPost" + id).css('display'));
    if (disp != 'block') {
        $("#commentsPost" + id).css('display', 'block');
    } else {
        $("#commentsPost" + id).css('display', 'none');
    }
}

function uploadImgur() {
    this.data = data
    let image64 = data.image.slice(data.image.indexOf(',') + 1)
    let imageData = {
        image: image64
    }
    let imageUploadRequest = {
        method: 'POST',
        url: 'https://api.imgur.com/3/upload',
        headers: {
            'Authorization': 'Client-ID 5ac16d574a84514'
        },
        data: imageData,
        success: this.imageUploaded,
        error: this.errorCreate
    }

    // Send request to upload.
    return $.ajax(imageUploadRequest)
}

function postPost() {
    var settings = {
        async: true,
        crossDomain: true,
        url: "http://localhost:5000/furniture/create",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "authorization": userData.token
        },
        processData: false,
        data: "{\n\t\"title\": \"klasdfgk;lwusjt\",\n\t\n\t\"postUrl\": \"https://i.ytimg.com/vi/I7jgu-8scIA/maxresdefault.jpg\"\n}"
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
