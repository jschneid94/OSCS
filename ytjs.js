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
}

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
                console.log(data, "data");
                mainVid(data);
                resultsLoop(data);
            });
        };

        // function making the larger video on screen and formatting it
        function mainVid(data) {
            var id = data.items[0].id.videoId;

            var mainDiv = $("<div class='results' id='RDP_mainDiv' data-key='" + data.items[0].snippet.thumbnails.high.url + "'></div>");

            var vidDiv = $("<iframe class='RDP_iframeSize' src='https://www.youtube.com/embed/" + id + "' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");

            var titleDiv = $("<div class='row RDP_bold' id='RDP_titleDiv' data-key='" + data.items[0].snippet.title + "'></div>")

            var title = $("<p class='RDP_title col-md-12'>" + data.items[0].snippet.title + "</p>");

            var descDiv = $("<div class='row'></div>");

            var desc = $("<p class='RDP_wordBreak col-md-10'>" + data.items[0].snippet.description + "</p>");

            var button = $("<div class='col-md-2'><button type='button' class='btn btn-light favorite'><i class='fas fa-star'></i> Favorite</button></div>");

            descDiv.append(desc, button);

            titleDiv.append(title);

            mainDiv.append(vidDiv, titleDiv, descDiv);

            $("#RDP_videosHere").html(mainDiv);

        };

        // loops in the smaller thumbnails
        function resultsLoop(data) {

            $("#RDP_thumbDesc").html("Click a thumbnail below to watch a video");

            for (var i = 1; i < data.items.length; i++) {

                var vid = data.items[i].id.videoId;

                var newDiv = $("<div class='RDP_item' data-key='" + data.items[i].snippet.thumbnails.high.url + "'></div>");

                var thumb = $("<a href='https://www.youtube.com/embed/" + vid + "' target ='_blank'><img src='" + data.items[i].snippet.thumbnails.high.url + "' alt='' class='RDP_thumb'></a>");

                var titleDiv = $("<div class='RDP_titlediv' data-key='" + data.items[0].snippet.title + "'></div>");

                var title = $("<p class='RDP_title'>" + data.items[i].snippet.title + "</p>");

                titleDiv.append(title);

                newDiv.append(thumb, titleDiv);

                $('#RDP_smallerVids').append(newDiv);
            };

        };

    });

});