// // lines 2-16+38 and 40 -45
$("form").on("submit", function (e) {
    e.preventDefault();

var search = $("#rdp_search").val();
console.log(search, "search");

var youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";


var queryURL = "https://www.googleapis.com/youtube/v3/search"

var options = {
    part: "snippet",
    key: youtubeApiKey,
    type: "video",
    q: encodeURIComponent($("#rdp_search").val()).replace(/%20/g, "+"),
    maxResults: 5,
    order: "viewCount",
    publishedAfter: "2015-01-01T00:00:00Z"
}

loadVids();

function loadVids() {
    $.getJSON(queryURL, options, function(data){
        console.log(data);
        var id = data.items[0].id.videoID;
        mainVid(id);
        resultsLoop(data);

    });
}

function mainVid(id) {
    
    onYouTubeIframeAPIReady();
    
    $("#rdp_videosHere").html(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `)
};

function resultsLoop(data) {

    $.each(data.items, function (i, item) {

        var thumb = item.snippet.thumbnails.medium.url;
        var title = item.snippet.title;
        var desc = item.snippet.description.substring(0, 100);
        var vid = data.items[i].id.videoID;

        $('#rdp_smallerVids').append(`
                        <article class="item" data-key="${vid}">

                            <img src="${thumb}" alt="" class="thumb">
                            <div class="details">
                                <h4>${title}</h4>
                                <p>${desc}</p>
                            </div>

                        </article>
                    `);
    });

}

});