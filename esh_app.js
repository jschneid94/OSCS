var esh_stackcounter = 0;
var esh_ytcounter = 0;
var esh_ytArr = [];
var esh_stackArr = [];
var esh_favorited = false;

$(document).ready(function () {

    // on any result click, append to favorites section
    $(document).on("click", ".favorite", function () {
        //$(this) needs to be the whole search div
        //console.log($(this).parent()[0]);

        esh_ytArr = [];
        esh_stackArr = [];

        if (esh_favorited === false) {
            // youtube - save url and embed thumbnail into favorites section
            if ($(this).parents("#RDP_videosHere").length > 0) {
                var esh_ytthumbnail = $("#RDP_mainDiv").attr("data-key");
                var esh_yttitle = $(".RDP_titlediv").attr("data-key");

                // thumbnail dimensions: 480w x 360h
                // ** TODO: add youtube link to youtube favorite
                $("#EGA_youtubeSubmenu").append("<a href='http://youtube.com'><img width='100%' src='" + esh_ytthumbnail + "'></a>", esh_yttitle);

                // save to local storage as an array
                // ** TODO: add youtube link
                esh_ytArr.push(esh_ytthumbnail, esh_yttitle);
                localStorage.setItem("ytFav-" + esh_ytcounter, esh_ytArr);
                esh_ytcounter++;

                // if stackoverflow set as obj with views, score, title, stackoverflow link
            } else if ($(this).parents(".EGA_stackoverflowContainer").length > 0) {

                // ** TODO: get new class name from jordy
                var esh_stackresult = $(this).parent().find(".card-body");

                // stack exchange - set to local storage as an array
                esh_stackArr.push($(".card-title").attr("data-title"), $(".card-title").attr("data-link"));
                localStorage.setItem("stackFav-" + esh_stackcounter, JSON.stringify(esh_stackArr));
                esh_stackcounter++;

                // DONE: clone and append
                $("#EGA_stackoverflowSubmenu").append(esh_stackresult.clone());
            }
            esh_favorited = true;
        } else {
            // *TODO: unfavorite

        }

        // DONE: change button to favorited
        $(this).css("background-color", "#87C488");
        $(this).html("<i class='fas fa-star'></i> Favorited");       

    });

    // ** TODO: how to get local storage data to load on site

});