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

                var jrsNewStackCard = $("<div>");
                jrsNewStackCard.addClass("card");

                var jrsBr = $("<br />")

                var jrsNewCardContainer = $("<div>")
                jrsNewCardContainer.addClass("card-body row");

                var jrsStatsColumn = $("<div>");
                jrsStatsColumn.addClass("col-md-3");

                    var jrsStackLogo = $("<img>");
                    jrsStackLogo.addClass("row mx-auto mb-3 jrsStackLogo")
                                .attr("src", "assets/images/jrsStackLogo.png");

                    var jrsViewHex = $("<div>");
                    jrsViewHex.addClass("row mx-auto my-2 hexagon text-center");

                        var jrsViewCount = $("<div>");
                        jrsViewCount.addClass("jrsStatText mx-auto my-auto")
                                    .text("Views ");
                        jrsViewCount.append("<div>" + jrsResult[i].view_count + "</div>");
                    jrsViewHex.append(jrsViewCount);

                    var jrsScoreHex = $("<div>");
                    jrsScoreHex.addClass("row mx-auto my-2 hexagon text-center");

                        var jrsScoreCount = $("<div>");
                        jrsScoreCount.addClass("jrsStatText mx-auto my-auto")
                                    .text("Score ");
                        jrsScoreCount.append("<div>" + jrsResult[i].score + "</div>");
                    jrsScoreHex.append(jrsScoreCount);

                jrsStatsColumn.append(jrsStackLogo, jrsViewHex, jrsBr, jrsScoreHex);

                var jrsStackTitleButton = $("<div>");
                jrsStackTitleButton.addClass("col-md-9 jrsStackTitleButton");

                    var jrsStackTitle = $("<h5>");
                    jrsStackTitle.addClass("card-title text-center mb-2")
                                .text(jrsResult[i].title);

                    var jrsStackButton = $("<a>");
                    jrsStackButton.addClass("btn row mx-auto text-light jrsStackButton")
                                .text("Go to StackOverflow")
                                .attr("href", jrsResult[i].link)
                                .attr("target", "_blank")
                                .attr("data-link", jrsResult[i].link)
                                .attr("data-title", jrsResult[i].title);
                jrsStackTitleButton.append(jrsStackTitle, jrsStackButton);

                jrsNewCardContainer.append(jrsStatsColumn, jrsStackTitleButton);

                jrsNewStackCard.append(jrsNewCardContainer);

                $("#jrsStackOutput").append(jrsNewStackCard, "<br />");

                // var jrsNewStackTitle = $("<a>");
                // jrsNewStackTitle.attr("src", jrsResult[i].link).text(jrsResult[i].title);
                // jrsNewStackTitle.addClass("row h4 bg-primary text-light px-2 py-2 mx-auto")
                //                 .attr("data-link", jrsResult[i].link)
                //                 .attr("data-title", jrsResult[i].title);;

                // // Bottom row with the results stats: view count and answer score
                // var jrsStackStats = $("<div>");
                // jrsStackStats.addClass("row bg-dark py-1 px-5")

                //     // View count
                //     var jrsViewCount = $("<span>");
                //     jrsViewCount.addClass("col-md-6 bg-success rounded-circle mx-auto text-center")
                //                 .text(jrsResult[i].view_count);

                //     // View answer score
                //     var jrsStackScore = $("<span>");
                //     jrsStackScore.addClass("col-md-6 bg-warning rounded-circle mx-auto text-center")
                //                 .text(jrsResult[i].score);

                // jrsStackStats.append(jrsViewCount, jrsStackScore);

                // jrsNewCardContainer.append(jrsNewStackTitle, jrsStackStats);
                // jrsNewStackCard.append(jrsNewCardContainer);

                // $("#jrsStackOutput").append(jrsNewStackCard, "<br />");
            }

        });

    });
});