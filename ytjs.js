// to do

// try and get other languages links to stop showing up

// need to make the search recognize the radio button clicked

// click event that calls youtubeAPI 
$("form").on("click", "#jrs_submit", function (e) {
    e.preventDefault();

    // parameters for actual youtube call
    var youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";

    var queryURL = "https://www.googleapis.com/youtube/v3/search";

    var options = {
        part: "snippet",
        key: youtubeApiKey,
        type: "video",
        q: encodeURIComponent($("#jrs_searchBar").val()).replace(/%20/g, "+"),
        maxResults: 5,
        order: "viewCount",
        relevanceLanguage: "en",
        regionCode: "US",
        publishedAfter: "2017-01-01T00:00:00Z"
    };

    // empties small div so it doesn't keep appending
    $('#RDP_smallerVids').empty();

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