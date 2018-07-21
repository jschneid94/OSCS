$(document).ready(function () {

    var esh_favoritescounter = 0;

    // display search results as object
    // youtube array
    // display each in a div
    // access div by class/id

    // on any result click, append to favorites section
    $(document).on("click", "results:button", function () {
        //$(this) needs to be the whole search div
        console.log($(this).parent()[0]);
        var esh_resulttomove = $(this).parent()[0];
        $(this).remove();
        $("#esh_favorites").append(esh_resulttomove);

        // save to local storage
        localStorage.setItem("favorites-" + esh_favoritescounter, esh_resulttomove);
        esh_favoritescounter++;



    });

    // how to get local storage to load on site
    // youtube - save url and embed thumbnail into favorites section
    // stack exchange - retrieve data name and url to display in favorites section
    // save as object if stack exchange


});