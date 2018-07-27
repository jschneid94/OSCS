// Array to store all the individual search terms
var jrsSearchTerms = [];

// Funtion to empty the Stack Overlfow column
function emptyColumn() {
    $(".EGA_stackoverflowContainer").empty();
}

// Function to check if the search results bar has any input in it
function checkInput() {
    
    if ($("#jrs_searchBar").val() === "") {
        //Check to see if there is any text entered
        // If there is no text within the input then don't return anything
        return false;
    }

}

function buttonChecked() {

    var radio = document.getElementsByName("radio");
    var val;
    if(radio[0].checked) {
        var val = radio[0].value;
        console.log(val);
        return val;
    }
    else if(radio[1].checked) {
        var val = radio[1].value;
        console.log(val);
        return val;
    }
    else if(radio[2].checked) {
        var val = radio[2].value;
        console.log(val);
        return val;
    }
    else if(radio[3].checked) {
        var val = radio[3].value;
        console.log(val)
        return val;
    }
    else if(radio[4].checked) {
        var val = radio[4].value;
        console.log(val);
        return val;
    }
    else if(radio[5].checked) {
        var val = radio[5].value;
        console.log(val);
        return val;
    }

}

$(document).ready(function() {

    // When the submit button is pushed...
    $("#jrs_submit").on("click", function() {

        event.preventDefault();

        // Empty the column before pushing results
        emptyColumn();

        // Check if user has typed anything in the search bar
        checkInput();   

        // Grabs the search term and creates an array of each word
        var jrsUserInput = $("#jrs_searchBar").val();
        jrsSearchTerms = jrsUserInput.split(" ");

        // 
        var jrsRadioButton = buttonChecked();
        jrsSearchTerms.unshift(jrsRadioButton);

        // Creates a string that will be used for the queryURL
        var jrsStackSearchTerm = jrsSearchTerms.join(" ");
        console.log(jrsStackSearchTerm);

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

                // Grid row for dynamic content
                var jrsNewStackDiv = $("<div>");
                jrsNewStackDiv.addClass("jrsRow row");

                // Grid column for dynamic content
                var jrsNewCardContainer = $("<div>");
                jrsNewCardContainer.addClass("col-sm-12")

                // Card to contain all content
                var jrsNewCard = $("<div>");
                jrsNewCard.addClass("card jrsCard");

                // Card body for all content
                var jrsNewCardBody = $("<div>");
                jrsNewCardBody.addClass("card-body jrsCardBody EGA_cardBody");

                // STATS SECTION
                var jrsStatsSection = $("<div>");
                jrsStatsSection.addClass("jrsStatsSection");

                    // Stack Overflow Logo
                    var jrsStackLogo = $("<img>");
                    jrsStackLogo.addClass("jrsImg")
                                .attr("src", "assets/images/jrsStackLogo.png");

                    // Stack Overflow view count
                    var jrsViewBox = $("<div>");
                    jrsViewBox.addClass("jrsStat EGA_viewBox my-2");

                        var jrsViewCount = $("<div>");
                        jrsViewCount.text("Views")
                               .append("<div>" + jrsResult[i].view_count + "</div>");

                        jrsViewBox.append(jrsViewCount);

                    // Stack Overflow score
                    var jrsScoreBox = $("<div>");
                    jrsScoreBox.addClass("jrsStat EGA_viewBox my-2")

                        var jrsScoreCount = $("<div>");
                        jrsScoreCount.text("Score")
                                     .append("<div>" + jrsResult[i].score + "</div>");

                        jrsScoreBox.append(jrsScoreCount);
                        
                    jrsStatsSection.append(jrsStackLogo, jrsViewBox, jrsScoreBox);

                // TITLE AND BUTTON SECTION
                var jrsTitleSection = $("<div>");
                jrsTitleSection.addClass("jrsTitleSection");

                    // Stack Overflow Question
                    var jrsTitle = $("<h5>");
                    jrsTitle.addClass("card-title mb-2 EGA_cardTitle")
                            .text(jrsResult[i].title)
                            .attr("data-link", jrsResult[i].link)
                            .attr("data-title", jrsResult[i].title);
                        
                    // Section containing the button
                    var jrsButtonSection = $("<div>");

                        // Button that sends user to link in a new tab
                        var jrsButton = $("<a>");
                        jrsButton.attr("href", jrsResult[i].link)
                                 .attr("target", "_blank")
                                 .addClass("btn btn-primary mx-auto jrsButton")
                                 .text("Visit page");

                        jrsButtonSection.append(jrsButton);

                    jrsTitleSection.append(jrsTitle, jrsButtonSection);

                jrsNewCardBody.append(jrsStatsSection, jrsTitleSection);

                jrsNewCard.append(jrsNewCardBody);
                jrsNewCardContainer.append(jrsNewCard);

                var esh_button = $("<button type='button' class='btn btn-light favorite' data-toggle='modal' data-target='#favModal'><i class='fas fa-star'></i> Favorite</button>");

                jrsNewStackDiv.append(jrsNewCardContainer, esh_button);

                // Appends the div to the stack output column in the DOM
                $(".EGA_stackoverflowContainer").append(jrsNewStackDiv);
                                 
            }

        });

    });
});