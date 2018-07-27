// ICEBOX: local storage vars
// var esh_stackcounter = 0;
// var esh_ytcounter = 0;
// var esh_ytArr = [];
// var esh_stackArr = [];

$(document).ready(function () {

    // on any result click, append to favorites section
    $(document).on("click", ".favorite", function () {
        //whole search div
        //console.log($(this).parent()[0]);

        // ICEBOX: reset arrays
        // esh_ytArr = [];
        // esh_stackArr = [];

        // youtube - save url and embed thumbnail into favorites section
        if ($(this).parents("#RDP_videosHere").length > 0) {
            var esh_ytthumbnail = $("#RDP_mainDiv").attr("data-key");
            var esh_yttitle = $("#RDP_titleDiv").attr("data-key");
            var esh_yturl = $("#RDP_mainDiv").attr("data-url");

            // DONE: add youtube link to youtube favorite
            var esh_ytfavdiv = $("<div>");
            esh_ytfavdiv.addClass("esh_ytfav");
            esh_ytfavdiv.html("<a href='" + esh_yturl + "' target='_blank'><img width='100%' src='" + esh_ytthumbnail + "'></a><a href='" + esh_yturl + "' target='_blank'>" + esh_yttitle + "</a>");
            // ICEBOX: close icon
            //esh_ytfavdiv.prepend("<div class='esh_unfavClose'><button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
            $("#EGA_youtubeSubmenu").append(esh_ytfavdiv);

            // ICEBOX: save to local storage as an array
            // esh_ytArr.push(esh_ytthumbnail, esh_yttitle, esh_yturl);
            // localStorage.setItem("ytFav-" + esh_ytcounter, JSON.stringify(esh_ytArr));
            // esh_ytcounter++;

            // if stackoverflow set as obj with views, score, title, stackoverflow link
        } else if ($(this).parents(".EGA_stackoverflowContainer").length > 0) {
            // $(this) = favorite btn

            var esh_stackresult = $(this).parent().find(".jrsCardBody");

            // ICEBOX: stack exchange - set to local storage as an array
            // esh_stackArr.push(esh_stackresult.find(".EGA_cardTitle").attr("data-title"), esh_stackresult.find(".EGA_cardTitle").attr("data-link"));
            // localStorage.setItem("stackFav-" + esh_stackcounter, JSON.stringify(esh_stackArr));
            // esh_stackcounter++;

            // DONE: clone and append
            var esh_newStackFav = esh_stackresult.clone()
            esh_newStackFav.addClass("esh_stackfav");
            // ICEBOX: close btn 
            //esh_newStackFav.prepend("<div class='esh_unfavClose'><button type='button' class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
            $("#EGA_stackoverflowSubmenu").append(esh_newStackFav);
        }

        // add class "favorited"
        // DONE: change button to favorited
        $(this).removeClass("favorite").addClass("favorited").html("<i class='fas fa-star'></i> Favorited").attr("data-target", "#unfavModal");

    });

    $(document).on("click", ".favorited", function () {

        var esh_theUrlToFind = $(this).parent().find("h5").data("link");

        // DONE: on click, change favorited button to favorite
        $(this).removeClass("favorited").addClass("favorite").html("<i class='fas fa-star'></i> Favorite").attr("data-target", "#favModal");

        // DONEZO: remove chosen YOUTUBE result from sidebar
        // if main yt vid data-url matches any favorited yt video url on .favorited btn click, remove favorite div from sidebar
        $(".esh_ytfav").each(function () {
            var esh_ytunfave = $(this).find("a").attr("href");
            if ($(".results").attr("data-url") === esh_ytunfave) {
                // OMGIDIDIT: point to yt fav div when it matches to remove
                $(this).remove();
            }
        });

        // DONE: remove chosen STACK result from sidebar
        $(".esh_stackfav").each(function () {
            var esh_stackunfav = $(this).find("a").attr("href");
            console.log("in favorite" + esh_stackunfav);
            //var esh_stackresulthref = $(".jrsCard").find("a").attr("href");
            //console.log("in result" + result_href);
            if (esh_stackunfav === esh_theUrlToFind) {
                $(this).remove();
            }
        });
    });

    // DONE: change button on hover to unfavorite
    $(document).on("mouseenter", ".favorited", function () {
        $(this).html("<i class='fas fa-star'></i> Unfavorite?");
    });
    $(document).on("mouseleave", ".favorited", function () {
        $(this).html("<i class='fas fa-star'></i> Favorited");
    });

    // ICEBOX: how to get local storage data to load on site

});