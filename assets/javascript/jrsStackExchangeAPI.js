// // Initialize API
// SE.init({
//     clientId: 12819,
//     key: 'sXqJXycdNOTwFnGKZUSDVw((',
//     // Used for cross domain communication, it will be validated
//     channelUrl: 'https://EneaAntonicelli.github/Project1/blank',
//     complete: function (data) {
//         $("#jrsSearchButton")
//     }
// });

var jrsSearchTerms = []

$(document).ready(function() {

    $("#jrsSearchButton").on("click", function() {
        event.preventDefault();

        // Grabs the search term and creates an array of each word
        var jrsUserInput = $("#jrsUserInput").val();
        jrsSearchTerms = jrsUserInput.split(" ");
        
        console.log(jrsSearchTerms);

        // Creates a string that will be used for the queryURL
        var jrsStackSearchTerm = jrsSearchTerms.join(" ");
        console.log(jrsStackSearchTerm);

        var jrsQueryUrl = "https://api.stackexchange.com/2.2/similar?order=desc&sort=relevance&title=" + jrsStackSearchTerm + "&site=stackoverflow&key=sXqJXycdNOTwFnGKZUSDVw((";
    
        $.ajax({
            url: jrsQueryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            var jrsResult = response.items;

            for (var i = 0; i < jrsResult.length; i++) {

                var jrsNewStackDiv = $("<div>");
                jrsNewStackDiv.addClass("row bg-dark");

                var jrsNewStackTitle = $("<a>");
                jrsNewStackTitle.attr("src", jrsResult[i].link).text(jrsResult[i].title);
                jrsNewStackTitle.addClass("col-md-12 bg-primary text-light mx-auto");

                // Bottom row with the results stats: view count and answer score
                var jrsStackStats = $("<div>");
                jrsStackStats.addClass("bg-dark rounded-bottom")

                    // View count
                    var jrsViewCount = $("<span>");
                    jrsViewCount.addClass("col-md-6 bg-success rounded-circle mx-auto")
                                .text(jrsResult[i].view_count);

                    // View answer score
                    var jrsStackScore = $("<span>");
                    jrsStackScore.addClass("col-md-6 bg-warning rounded-circle mx-auto")
                                 .text(jrsResult[i].score);

                jrsStackStats.append(jrsViewCount, jrsStackScore);

                jrsNewStackDiv.append(jrsNewStackTitle, jrsStackStats);

                $("#jrsStackOutput").append(jrsNewStackDiv);
            }

        });

    });
});