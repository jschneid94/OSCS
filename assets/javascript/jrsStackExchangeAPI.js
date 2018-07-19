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
        var jrsStackSearchTerm = jrsSearchTerms.join(";");
        console.log(jrsStackSearchTerm);

        var jrsQueryUrl = "https://api.stackexchange.com/2.2/search?order=desc&sort=relevance&tagged=" + jrsStackSearchTerm + "&site=stackoverflow&key=sXqJXycdNOTwFnGKZUSDVw((";
    
        $.ajax({
            url: jrsQueryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });

    });
});