// to do
// try and get other languages links to stop showing up

// jordans function making it so they have to type something in to get a search result
function checkInput() {

    if ($("#jrs_searchBar").val() === "") {
        //Check to see if there is any text entered
        // If there is no text within the input ten disable the button
        return false;

    };

};

// function for grabbing value of whatever button is clicked
function buttonChecked() {

    var radio = document.getElementsByName("radio");

    if (radio[0].checked) {
        var val = radio[0].value;
        return val;
        console.log(val)
    }

    else if (radio[1].checked) {
        var val = radio[1].value;
        return val;
        console.log(val)
    }

    else if (radio[2].checked) {
        var val = radio[2].value;
        return val;
        console.log(val)
    }

    else if (radio[3].checked) {
        var val = radio[3].value;
        return val;
        console.log(val)
    }

    else if (radio[4].checked) {
        var val = radio[4].value;
        return val;
        console.log(val)
    }

    else if (radio[5].checked) {
        var val = radio[5].value;
        return val;
        console.log(val)
    }

};



// $(".RDP_radioBtn").on("click", function (){
//     $("#jrs_searchBar").removeAttribute("readonly");
// });

// function workingSearchBar () {
//     var radio = document.getElementsByName("radio");
//     if (radio == "active") {
//     $("#jrs_searchBar").removeAttr("readonly");
// }
// }

//     workingSearchBar();


$(document).ready(function () {

    // click event that calls youtubeAPI 
    $("form").on("click", "#jrs_submit", function (e) {
        e.preventDefault();

        // parameters for actual youtube call
        var youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";

        var queryURL = "https://www.googleapis.com/youtube/v3/search";

        // created search term that uses button clicked and what is typed in search bar
        var q = buttonChecked() + " " + ($("#jrs_searchBar").val()).replace(/%20/g, "+");

        // options used to determine what will be displayed
        var options = {
            part: "snippet",
            key: youtubeApiKey,
            type: "video",
            q: q,
            maxResults: 5,
            order: "viewCount",
            relevanceLanguage: "en",
            regionCode: "US",
            publishedAfter: "2017-01-01T00:00:00Z"
        };

        // empties small div so it doesn't keep appending
        $('#RDP_smallerVids').empty();

        // checking to see if anything was typed in search bar
        checkInput();

        // call load div function
        loadVids();

        // function that acutally calls youtubeAPI
        function loadVids() {

            $.getJSON(queryURL, options, function (data) {
                mainVid(data);
                resultsLoop(data);
            });

        };

        // function making the larger video on screen and formatting it
        function mainVid(data) {


            var mainDiv = $("<div class='results container' id='RDP_mainDiv' data-key='" + data.items[0].snippet.thumbnails.high.url + "' data-url='https://www.youtube.com/watch?v=" + data.items[0].id.videoId + "'></div>");

            var vidDiv = $("<iframe class='RDP_iframeSize col-md-12' src='https://www.youtube.com/embed/" + data.items[0].id.videoId + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");

            var row = $("<div class='row RDP_row'></div>");

            var titleDiv = $("<div class='col-md-12 RDP_bold' id='RDP_titleDiv' data-key='" + data.items[0].snippet.title + "'></div>");

            var title = $("<p class='RDP_title col-md-12'>" + data.items[0].snippet.title + "</p>");

            var descDiv = $("<div class='row RDP_row'></div>");

            var desc = $("<p class='RDP_wordBreak col-md-8'>" + data.items[0].snippet.description + "</p>");

            var button = $("<div class='col-md-4'><button type='button' class='btn btn-light favorite' data-toggle='modal' data-target='#favModal'><i class='fas fa-star'></i> Favorite</button></div>");

            descDiv.append(desc, button);

            row.append(title);

            titleDiv.append(row);

            mainDiv.append(vidDiv, titleDiv, descDiv);

            $("#RDP_videosHere").html(mainDiv);

        };

        // loops in the smaller thumbnails
        function resultsLoop(data) {

            $("#RDP_thumbDesc").html("Click a thumbnail below to watch a video");

            for (var i = 1; i < data.items.length; i++) {

                var vid = data.items[i].id.videoId;

                var newDiv = $("<div class='RDP_item' data-key='" + data.items[i].snippet.thumbnails.high.url + "'></div>");

                var thumb = $("<img src='" + data.items[i].snippet.thumbnails.high.url + "' alt='' class='RDP_thumb' data-embed='https://www.youtube.com/embed/" + vid + "' data-url='https://www.youtube.com/watch?v=" + vid + "' data-title='" + data.items[i].snippet.title + "' data-desc='" + data.items[i].snippet.description + "' data-thumb='" + data.items[i].snippet.thumbnails.high.url + "'>");

                var titleDiv = $("<div class='RDP_titlediv' data-key='" + data.items[i].snippet.title + "'></div>");

                var title = $("<p class='RDP_title'>" + data.items[i].snippet.title + "</p>");

                titleDiv.append(title);

                newDiv.append(thumb, titleDiv);

                $('#RDP_smallerVids').append(newDiv);

            };

            // on click to replace main vid embedded with one of the thumbnails
            $(".RDP_thumb").on("click", function () {
                console.log(this);
                var embed = $(this).attr("data-embed");

                var url = $(this).attr("data-url");

                var desc = $(this).attr("data-desc");

                var title = $(this).attr("data-title");

                var thumb = $(this).attr("data-thumb");

                var mainDiv = $("<div class='results container' id='RDP_mainDiv' data-key='" + thumb + "' data-url='" + url + "'></div>");

                var vidDiv = $("<iframe class='RDP_iframeSize col-md-12' src='" + embed + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");

                var row = $("<div class='row'></div>");

                var titleDiv = $("<div class='col-md-12 RDP_bold' id='RDP_titleDiv' data-key='" + title + "'></div>");

                var title = $("<p class='RDP_title col-md-12'>" + title + "</p>");

                var descDiv = $("<div class='row'></div>");

                var desc = $("<p class='RDP_wordBreak col-md-8'>" + desc + "</p>");

                var button = $("<div class='col-md-2'><button type='button' class='btn btn-light favorite' data-toggle='modal' data-target='#favModal'><i class='fas fa-star'></i> Favorite</button></div>");

                descDiv.append(desc, button);

                row.append(title);

                titleDiv.append(row);

                mainDiv.append(vidDiv, titleDiv, descDiv);

                $("#RDP_videosHere").html(mainDiv);

                $(".RDP_empty").empty();

                // calling function created below
                addMainVid();

                // function to add main video to the section with other thumbnails
                function addMainVid() {

                 

                    var desc = data.items[0].snippet.description;

                    var newDiv = $("<div class='RDP_item RDP_empty' data-key='" + data.items[0].snippet.thumbnails.high.url + "'></div>");

                    var thumb = $('<img src="' + data.items[0].snippet.thumbnails.high.url + '" alt="" class="RDP_thumb RDP_clickMe" data-embed="https://www.youtube.com/embed/' + data.items[0].id.videoId + '" data-url="https://www.youtube.com/watch?v=' + data.items[0].id.videoId + '" data-title="' + data.items[0].snippet.title + '" data-desc="' + desc + '" data-thumb="' + data.items[0].snippet.thumbnails.high.url + '">');

                    var titleDiv = $("<div class='RDP_titlediv' data-key='" + data.items[0].snippet.title + "'></div>");

                    var title = $("<p class='RDP_title'>" + data.items[0].snippet.title + "</p>");

                    titleDiv.append(title);

                    newDiv.append(thumb, titleDiv);

                    $('#RDP_smallerVids').prepend(newDiv);
                };

                // had to make another on click function to allow the prepended div to be clickable
                // was able to use same function from above
                $(".RDP_clickMe").on("click", function () {

                    var embed = $(this).attr("data-embed");

                    var url = $(this).attr("data-url");

                    var desc = $(this).attr("data-desc");

                    var title = $(this).attr("data-title");

                    var thumb = $(this).attr("data-thumb");

                    var mainDiv = $("<div class='results container' id='RDP_mainDiv' data-key='" + thumb + "' data-url='" + url + "'></div>");

                    var vidDiv = $("<iframe class='RDP_iframeSize col-md-12' src='" + embed + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");

                    var row = $("<div class='row'></div>");

                    var titleDiv = $("<div class='col-md-12 RDP_bold' id='RDP_titleDiv' data-key='" + title + "'></div>");

                    var title = $("<p class='RDP_title col-md-12'>" + title + "</p>");

                    var descDiv = $("<div class='row'></div>");

                    var desc = $("<p class='RDP_wordBreak col-md-8'>" + desc + "</p>");

                    var button = $("<div class='col-md-2'><button type='button' class='btn btn-light favorite' data-toggle='modal' data-target='#favModal'><i class='fas fa-star'></i> Favorite</button></div>");

                    descDiv.append(desc, button);

                    row.append(title);

                    titleDiv.append(row);

                    mainDiv.append(vidDiv, titleDiv, descDiv);

                    $("#RDP_videosHere").html(mainDiv);

                    $(".RDP_empty").empty();

                    // calling the function to create the main video again to make sure layout is the same
                    addMainVid();
                });

            });

        };

    });

});