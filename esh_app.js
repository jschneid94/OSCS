var esh_stackcounter = 0;
var esh_ytcounter = 0;
var esh_ytArr = [];
var esh_stackArr = [];

$(document).ready(function () {

    // on any result click, append to favorites section
    $(document).on("click", ".favorite", function () {
        //$(this) needs to be the whole search div
        console.log($(this).parent()[0]);

        esh_ytArr = [];
        esh_stackArr = [];

        // youtube - save url and embed thumbnail into favorites section
        if ($(this).parents("#RDP_videosHere").length > 0) {
            var esh_ytthumbnail = $(".RDP_item").attr("data-key");
            var esh_yttitle = $(".RDP_titlediv").attr("data-key");

            // change button to favorited

            // thumbnail dimensions: 480w x 360h
            $("#EGA_youtubeSubmenu").append("<img width='100%' src='" + esh_ytthumbnail + "'>", esh_yttitle);

            // save to local storage
            esh_ytArr.push(esh_ytthumbnail, esh_yttitle);
            localStorage.setItem("ytFav-" + esh_ytcounter, esh_ytArr);
            esh_ytcounter++;

            // if stackoverflow set as obj with views, score, title, stackoverflow link
            // stack exchange - retrieve data name and url to save to local storage
        } else if ($(this).parents(".EGA_stackoverflowContainer").length > 0) {
            var esh_stackresult = $(this).parent()[0];
            esh_stackArr.push($(".card-title").attr("data-title"), $(".card-title").attr("data-link"));
            localStorage.setItem("stackFav-" + esh_stackcounter, JSON.stringify(esh_stackArr));
            esh_stackcounter++;

            // change button to favorited

            $("#EGA_stackoverflowSubmenu").append(esh_stackresult);
        }


    });

    // how to get local storage to load on site

});