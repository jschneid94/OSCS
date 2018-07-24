var esh_stackcounter = 0;
var esh_ytcounter = 0;
var esh_ytArr = [];
var esh_stackArr = [];

$(document).ready(function () {

    // on any result click, append to favorites section
    $(document).on("click", ".favorite", function () {
        //$(this) needs to be the whole search div
        //console.log($(this).parent()[0]);

        // reset arrays
        esh_ytArr = [];
        esh_stackArr = [];

        // youtube - save url and embed thumbnail into favorites section
        if ($(this).parents("#RDP_videosHere").length > 0) {
            var esh_ytthumbnail = $("#RDP_mainDiv").attr("data-key");
            var esh_yttitle = $(".RDP_titlediv").attr("data-key");
            var esh_yturl = $("#RDP_mainDiv").attr("data-url");

            // thumbnail dimensions: 480w x 360h
            // DONE: add youtube link to youtube favorite
            var esh_ytfavdiv = $("<div>");
            esh_ytfavdiv.addClass("esh_ytfav");
            esh_ytfavdiv.html("<a href='" + esh_yturl + "' target='_blank'><img width='100%' src='" + esh_ytthumbnail + "'></a><a href='" + esh_yturl + "' target='_blank'>" + esh_yttitle + "</a>");
            $("#EGA_youtubeSubmenu").append(esh_ytfavdiv);

            // save to local storage as an array
            // DONE: add youtube link
            esh_ytArr.push(esh_ytthumbnail, esh_yttitle, esh_yturl);
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

        // add class "favorited"
        // DONE: change button to favorited
        $(this).removeClass("favorite").addClass("favorited").html("<i class='fas fa-star'></i> Favorited").attr("data-target", "#unfavModal");

    });

    $(document).on("click", ".favorited", function () {
        // DONE: on click, change favorited button to favorite
        $(this).removeClass("favorited").addClass("favorite").html("<i class='fas fa-star'></i> Favorite").attr("data-target", "#favModal");

        // ** TODO: remove chosen YOUTUBE result from sidebar
        // if (this) main yt vid data-url matches any favorited yt video url on .favorited btn click, remove favorite div from sidebar
        // if ($(this).closest(".results").attr("data-url") === $("#EGA_youtubeSubmenu").find(".esh_ytfav").attr("href")) {
        //     console.log("original link " + $(this).closest(".results").attr("data-url"));
        //     console.log("is this the right link? " + $("#EGA_youtubeSubmenu").find(".esh_ytfav").attr("href"));
        // }

        // ** TODO: remove chosen STACK result from sidebar
    });
    
    // DONE: change button on hover to unfavorite
    $(document).on("mouseenter", ".favorited", function() {
        $(this).html("<i class='fas fa-star'></i> Unfavorite?");
    });
    $(document).on("mouseleave", ".favorited", function() {
        $(this).html("<i class='fas fa-star'></i> Favorited");
    });

    // ********* TODO: how to get local storage data to load on site

});