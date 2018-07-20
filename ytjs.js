// // lines 2-16+38 and 40 -45
$("form").on("submit", function (e) {
    e.preventDefault();
//     // prepare the request
//     var request = gapi.client.youtube.search.list({
//         part: "snippet",
//         type: "video",
//         q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//         maxResults: 5,
//         order: "viewCount",
//         publishedAfter: "2015-01-01T00:00:00Z"
//     });
//     //execute request
//     request.execute(function(response) {
//         console.log(response);
//     });
//     console.log("is the button click happening?")
//     // In this case, the "this" keyword refers to the button that was clicked
var search = $("#search").val();
console.log(search, "search");

var youtubeApiKey = "AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8";


var queryURL = "https://www.googleapis.com/youtube/v3/search"

var options = {
    part: "snippet",
    key: youtubeApiKey,
    type: "video",
    q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
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
        // results();

    });
}

function mainVid(id) {
    
    
    
    $("#videosHere").html(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `)
};

// function results() {



//     $("#videosHere").html(`
//     <iframe width="300" height="300" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
//     `);

// }
// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     // After the data comes back from the API
//     .then(function(response) {
//       // Storing an array of results in the results variable
//       var results = response;
//       console.log(results);
//     });

});

// function googleApiClientReady() {
//     gapi.client.setAPIKey("AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8");
//     gapi.client.load("youtube", "v3", function (){
//       // yt api is ready  
//     });
// }

// // After the API loads, call a function to enable the search box.
// // function handleAPILoaded() {
// //     $('#search-button').attr('disabled', false);
// //   }
  
// //   // Search for a specified string.
// //   function search() {
// //     var q = $('#query').val();
// //     var request = gapi.client.youtube.search.list({
// //       q: q,
// //       part: 'snippet'
// //     });
  
// //     request.execute(function(response) {
// //       var str = JSON.stringify(response.result);
// //       $('#search-container').html('<pre>' + str + '</pre>');
// //     });
// //   }


// function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

// $(function() {
//     $("form").on("submit", function(e) {
//        e.preventDefault();
//        // prepare the request
//        var request = gapi.client.youtube.search.list({
//             part: "snippet",
//             type: "video",
//             q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//             maxResults: 3,
//             order: "viewCount",
//             publishedAfter: "2015-01-01T00:00:00Z"
//        }); 
//        // execute the request
//        request.execute(function(response) {
//           var results = response.result;
//           $("#results").html("");
//           $.each(results.items, function(index, item) {
//             $.get("item.html", function(data) {
//                 $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
//             });
//           });
//           resetVideoHeight();
//        });
//     });
    
//     $(window).on("resize", resetVideoHeight);
// });

// function resetVideoHeight() {
//     $(".video").css("height", $("#results").width() * 9/16);
// }

// function init() {
//     gapi.client.setApiKey("AIzaSyDZ4WJqvmeaEhTRbGq9uNHPYjUy4pnlsn8");
//     gapi.client.load("youtube", "v3", function() {
//         // yt api is ready
//     });
// }