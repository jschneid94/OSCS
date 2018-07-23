var esh_stackcounter = 0;
var esh_ytcounter = 0;
var esh_ytArr = [];
var esh_stackArr = [];

$(document).ready(function () {

    // on any result click, append to favorites section
    $(document).on("click", ".favorite", function () {
        //$(this) needs to be the whole search div
        //console.log($(this).parent()[0]);

        esh_ytArr = [];
        esh_stackArr = [];

        // youtube - save url and embed thumbnail into favorites section
        if ($(this).parents("#RDP_videosHere").length > 0) {
            var esh_ytthumbnail = $("#RDP_mainDiv").attr("data-key");
            var esh_yttitle = $(".RDP_titlediv").attr("data-key");

            // thumbnail dimensions: 480w x 360h
            $("#EGA_youtubeSubmenu").append("<img width='100%' src='" + esh_ytthumbnail + "'>", esh_yttitle);

            // save to local storage
            esh_ytArr.push(esh_ytthumbnail, esh_yttitle);
            localStorage.setItem("ytFav-" + esh_ytcounter, esh_ytArr);
            esh_ytcounter++;

            // if stackoverflow set as obj with views, score, title, stackoverflow link
        } else if ($(this).parents(".EGA_stackoverflowContainer").length > 0) {

            // ** TODO: get new class name from jordy
            var esh_stackresult = $(this).parent().find(".card-body");

            // stack exchange - set and retrieve data name and url to save to local storage
            esh_stackArr.push($(".card-title").attr("data-title"), $(".card-title").attr("data-link"));
            localStorage.setItem("stackFav-" + esh_stackcounter, JSON.stringify(esh_stackArr));
            esh_stackcounter++;

            // DONE: clone and append
            $("#EGA_stackoverflowSubmenu").append(esh_stackresult.clone());
        }

        // ** TODO: modal to alert user it was favorited successfully

        // ** TODO: change button to favorited
        

    });

    // ** TODO: unfavorite an item in sidebar


    // ** TODO: how to get local storage data to load on site

});