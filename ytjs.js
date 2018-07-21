// to do
// add classes to elements and add styles to css doc
// try and get russian links to stop showing up
// clean up main vid function
// need to change video content
// center text
// make description above links
// need to make the search recognize the radio button clicked



// add class to all results called results


$("form").on("click", "#RDP_makeVideo", function (e) {
    e.preventDefault();

    var youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";

    var queryURL = "https://www.googleapis.com/youtube/v3/search"

    var options = {
        part: "snippet",
        key: youtubeApiKey,
        type: "video",
        q: encodeURIComponent($("#RDP_search").val()).replace(/%20/g, "+"),
        maxResults: 5,
        order: "viewCount",
        relevanceLanguage: "en",
        regionCode: "US",
        publishedAfter: "2016-01-01T00:00:00Z"
    }

    $('#RDP_smallerVids').empty();
    loadVids();

    function loadVids() {
        $.getJSON(queryURL, options, function (data) {
            console.log(data, "data");
            var id = data.items[0].id.videoId;
            mainVid(data);
            resultsLoop(data);
        })
    }

    function mainVid(data) {
        var id = data.items[0].id.videoId;

        var mainDiv = $("<div class='results' id='RDP_mainDiv'></div>");
        
        var vidDiv = $("<iframe class='RDP_iframeSize' src='https://www.youtube.com/embed/" + id + "frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>");

        var descDiv = $("<div class='row'></div>");
        var desc = $("<p class='RDP_wordBreak col-md-10'>" + data.items[0].snippet.description + "</p>");
        var button = $("<div class='col-md-2'><button type='button' class='btn btn-light favorite'><i class='fas fa-star'></i>Favorite</button></div>");

        descDiv.append(desc, button);
        mainDiv.append(vidDiv, descDiv);

        $("#RDP_videosHere").html(mainDiv);
    
    };

    function resultsLoop(data) {

        $("#RDP_thumbDesc").html("Click a thumbnail below to watch a video");

        for (var i = 1; i < data.items.length; i++) {
            
            var vid = data.items[i].id.videoId;
            
            var newDiv = $("<div class='RDP_item' data-key='" + vid + "'></div>");
            var thumb = $("<a href='https://www.youtube.com/embed/" + vid + "' target ='_blank'><img src='" + data.items[i].snippet.thumbnails.high.url + "' alt='' class='RDP_thumb'></a>");

            var title = $("<p class='RDP_title'>" + data.items[i].snippet.title + "</p>");

            var titleDiv = $("<div class='RDP_titlediv'></div>")

            titleDiv.append(title);

            newDiv.append(thumb, titleDiv);

            $('#RDP_smallerVids').append(newDiv);
        }

    }

});