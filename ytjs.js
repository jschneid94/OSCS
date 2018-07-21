// to do
// add classes to elements and add styles to css doc
// try and get russian links to stop showing up
// clean up main vid function
// need to change video content
// center text
// make description above links
// need to make the search recognize the radio button clicked

// RDP_thumbDesc Click a thumbnail to watch a video

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
            mainVid(id);
            resultsLoop(data);
        })
    }

    function mainVid(id) {

        $("#RDP_videosHere").html(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `)
    };

    function resultsLoop(data) {

        for (var i = 1; i < data.items.length; i++) {
            
            var vid = data.items[i].id.videoId;

            var spacingDiv = $("<div class='col-md-1'>")
            
            var newDiv = $("<div class='item' data-key='" + vid + "'>");
            var thumb = $("<a href='https://www.youtube.com/embed/" + vid + "' target ='_blank'><img src='" + data.items[i].snippet.thumbnails.medium.url + "' alt='' class='thumb'></a>");
            var title = $("<h4>" + data.items[i].snippet.title + "</h4>");
            var desc = $("<p>" + data.items[i].snippet.description.substring(0, 100) + "</p>");

            newDiv.append(thumb, title, desc);


            $('#RDP_smallerVids').append(newDiv);
        }

    }

});