
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

                // Creates new div for each result
                var jrsNewStackCard = $("<div>");
                jrsNewStackCard.addClass("card");

                var jrsBr = $("<br />")

                var jrsNewCardContainer = $("<div>")
                jrsNewCardContainer.addClass("card-body row");

                // Column with the stack logo, view count, and top rated score.
                var jrsStatsColumn = $("<div>");
                jrsStatsColumn.addClass("col-md-3");

                    // Stack logo
                    var jrsStackLogo = $("<img>");
                    jrsStackLogo.addClass("row mx-auto mb-3 jrsStackLogo")
                                .attr("src", "assets/images/jrsStackLogo.png");

                    // View Count
                    var jrsViewHex = $("<div>");
                    jrsViewHex.addClass("row mx-auto my-2 hexagon text-center");

                        var jrsViewCount = $("<div>");
                        jrsViewCount.addClass("jrsStatText mx-auto my-auto")
                                    .text("Views ");
                        jrsViewCount.append("<div>" + jrsResult[i].view_count + "</div>");
                    jrsViewHex.append(jrsViewCount);

                    // Top rated score
                    var jrsScoreHex = $("<div>");
                    jrsScoreHex.addClass("row mx-auto my-2 hexagon text-center");

                        var jrsScoreCount = $("<div>");
                        jrsScoreCount.addClass("jrsStatText mx-auto my-auto")
                                    .text("Score ");
                        jrsScoreCount.append("<div>" + jrsResult[i].score + "</div>");
                    jrsScoreHex.append(jrsScoreCount);

                jrsStatsColumn.append(jrsStackLogo, jrsViewHex, jrsBr, jrsScoreHex);

                // Column with the result title and link to stack overflow
                var jrsStackTitleButton = $("<div>");
                jrsStackTitleButton.addClass("col-md-9 jrsStackTitleButton");

                    // Title
                    var jrsStackTitle = $("<h5>");
                    jrsStackTitle.addClass("card-title text-center mb-2")
                                .text(jrsResult[i].title)
                                .attr("data-resultNum", i)
                                .attr("data-link", jrsResult[i].link)
                                .attr("data-title", jrsResult[i].title);

                    // Button
                    var jrsStackButton = $("<a>");
                    jrsStackButton.addClass("btn row mx-auto text-light jrsStackButton")
                                .text("Go to StackOverflow")
                                .attr("href", jrsResult[i].link)
                                .attr("target", "_blank");
                jrsStackTitleButton.append(jrsStackTitle, jrsStackButton);

                jrsNewCardContainer.append(jrsStatsColumn, jrsStackTitleButton);

                jrsNewStackCard.append(jrsNewCardContainer);

                $("#jrsStackOutput").append(jrsNewStackCard, "<br />");

            }

        });

    });
});