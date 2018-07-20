
$("form").on("submit", function (e) {
    e.preventDefault();

var search = $("#rdp_search").val();
console.log(search, "search");

var youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";

var player;


var queryURL = "https://www.googleapis.com/youtube/v3/search"

var options = {
    part: "snippet",
    key: youtubeApiKey,
    type: "video",
    q: encodeURIComponent($("#rdp_search").val()).replace(/%20/g, "+"),
    maxResults: 5,
    order: "viewCount",
    publishedAfter: "2016-01-01T00:00:00Z"
}

loadVids();

function loadVids() {
    $.getJSON(queryURL, options, function(data){
        console.log(data);
        var video = data.items[0].id.videoID;
        console.log(video, "video")
        mainVid(video);
        //resultsLoop(data);
        onYouTubeIframeAPIReady(video);
        

function onYouTubeIframeAPIReady() {
  player = new YT.Player('rdp_player', {
    height: '390',
    width: '640',
    videoId: video,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

    });
}

function mainVid(id) {
    
    $("#rdp_videosHere").html(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `)
};

// function resultsLoop(data) {

//     $.each(data.items, function (i, item) {

//         var thumb = item.snippet.thumbnails.medium.url;
//         var title = item.snippet.title;
//         var desc = item.snippet.description.substring(0, 100);
//         var vid = data.items[i].id.videoID;

//         $('#rdp_smallerVids').append(`
//                         <article class="item" data-key="${vid}">

//                             <img src="${thumb}" alt="" class="thumb">
//                             <div class="details">
//                                 <h4>${title}</h4>
//                                 <p>${desc}</p>
//                             </div>

//                         </article>
//                     `);
//     });

// }




var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

});