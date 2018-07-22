// Array to store all the individual search terms
var jrsSearchTerms = []

$(document).ready(function() {

    // When the submit button is pushed...
    $("#jrs_submit").on("click", function() {
        event.preventDefault();

        // Grabs the search term and creates an array of each word
        var jrsUserInput = $("#jrs_searchBar").val();
        jrsSearchTerms = jrsUserInput.split(" ");

        // Creates a string that will be used for the queryURL
        var jrsStackSearchTerm = jrsSearchTerms.join(" ");

        // Query URL with the following parameters:
            // similar --> yields results that contain similar keywords
            // pagesize --> returns a set amount of results, in this case 5
            // order --> returns the results in descending arrangement
            // sort --> sorts the results by most relevant to the keywords
            // title --> keywords that will be used for the search
            // site --> searches for results only in stack overflow
        var jrsQueryUrl = "https://api.stackexchange.com/2.2/similar?pagesize=5&order=desc&sort=relevance&title=" + jrsStackSearchTerm + "&site=stackoverflow&key=sXqJXycdNOTwFnGKZUSDVw((";
    
        $.ajax({
            url: jrsQueryUrl,
            method: "GET"
        }).then(function(response) {

            var jrsResult = response.items;
 
            // For loop will generate a new div for each result returned by the query
            for (var i = 0; i < jrsResult.length; i++) {

                // Creates new div for each result
                var jrsNewStackCard = $("<div>");
                jrsNewStackCard.addClass("card mb-3 results");

                // Break variable for separating hexagons
                var jrsBr = $("<br />")

                // Container for both columns
                var jrsNewCardContainer = $("<div>")
                jrsNewCardContainer.addClass("card-body row");

                // Column with the stack logo, view count, and top rated score.
                var jrsStatsColumn = $("<div>");
                jrsStatsColumn.addClass("col-md-3");

                    // Stack logo
                    var jrsStackLogo = $("<img>");
                    jrsStackLogo.addClass("row mx-auto mb-3 jrsStackLogo")
                                .attr("src", "assets/images/jrsStackLogo.png");

                    // Hexagon that will contain the view count
                    var jrsViewHex = $("<div>");
                    jrsViewHex.addClass("row mx-auto my-2 hexagon text-center");

                        // Text for view count
                        var jrsViewCount = $("<div>");
                        jrsViewCount.addClass("jrsStatText mx-auto my-auto")
                                    .text("Views ");
                        // Adds the count number on a new line
                        jrsViewCount.append("<div>" + jrsResult[i].view_count + "</div>");
                    jrsViewHex.append(jrsViewCount);

                    // Hexagon that will contain the top rated score
                    var jrsScoreHex = $("<div>");
                    jrsScoreHex.addClass("row mx-auto my-2 hexagon text-center");

                        // Text for rated score
                        var jrsScoreCount = $("<div>");
                        jrsScoreCount.addClass("jrsStatText mx-auto my-auto")
                                    .text("Score ");
                        // Adds the score number on a new line
                        jrsScoreCount.append("<div>" + jrsResult[i].score + "</div>");
                    jrsScoreHex.append(jrsScoreCount);

                // Appends the logo, the views hex, a break and the score hex to the left column
                jrsStatsColumn.append(jrsStackLogo, jrsViewHex, jrsBr, jrsScoreHex);

                // Column with the result title and link to stack overflow
                var jrsStackTitleButton = $("<div>");
                jrsStackTitleButton.addClass("col-md-9 jrsStackTitleButton");

                    // Title of the result question
                    var jrsStackTitle = $("<h5>");
                    jrsStackTitle.addClass("card-title text-center mb-2")
                                .text(jrsResult[i].title)
                                // Adds data attributes for later reference
                                .attr("data-resultNum", i)
                                .attr("data-link", jrsResult[i].link)
                                .attr("data-title", jrsResult[i].title);

                    // Button that sends user to result link on a new tab
                    var jrsStackButton = $("<a>");
                    jrsStackButton.addClass("btn row mx-auto text-light jrsStackButton")
                                .text("Go to StackOverflow")
                                .attr("href", jrsResult[i].link)
                                .attr("target", "_blank");
                // Appends the title and button to the right column.
                jrsStackTitleButton.append(jrsStackTitle, jrsStackButton);
                
                jrsNewCardContainer.append(jrsStatsColumn, jrsStackTitleButton);

                var esh_button = $("<button type='button' class='btn btn-light favorite'><i class='fas fa-star'></i> Favorite</button>");

                jrsNewStackCard.append(jrsNewCardContainer, esh_button);

                // Appends the div to the stack output column in the DOM
                $(".EGA_stackoverflowContainer").append(jrsNewStackCard);

            }

        });

    });
});