// GITHUB API TOGGLE SWITCH

$("#EGA_githubApiLogo").on('click', function () {

  if ($("#EGA_spotifyLogo").is(':visible')) {
    $("#EGA_spotifyLogo").fadeOut(500);
    
    setTimeout(function(){
      $("#EGA_githubLogo").fadeToggle(500)}, 500);

  } else {
    $("#EGA_githubLogo").fadeToggle(500);
  }

});

// YOUTUBE API TOGGLE SWITCH

$("#EGA_youtubeApiLogo").on('click', function () {
  
  $("#EGA_youtubeLogo").fadeToggle();

});

// STACKOVERFLOW API TOGGLE SWITCH

$("#EGA_stackoverflowApiLogo").on('click', function () {

  if ($("#EGA_amazonLogo").is(':visible')) {
    $("#EGA_amazonLogo").fadeOut(500);

    setTimeout(function(){
    $("#EGA_stackoverflowLogo").fadeToggle(500)}, 500);

  } else {
    $("#EGA_stackoverflowLogo").fadeToggle(500);
  }

});

// AMAZON API TOGGLE SWITCH

$("#EGA_amazonApiLogo").on('click', function () {

  if ($("#EGA_stackoverflowLogo").is(':visible')) {
    $("#EGA_stackoverflowLogo").fadeOut(500);

    setTimeout(function(){
    $("#EGA_amazonLogo").fadeToggle(500)}, 500);

  } else {
    $("#EGA_amazonLogo").fadeToggle(500);
  }

});

// SPOTIFY API TOGGLE SWITCH

$("#EGA_spotifyApiLogo").on('click', function () {

  if ($("#EGA_githubLogo").is(':visible')) {
    $("#EGA_githubLogo").fadeOut(500);

    setTimeout(function(){
    $("#EGA_spotifyLogo").fadeToggle(500)}, 500);

  } else {
    $("#EGA_spotifyLogo").fadeToggle();
  }

});

// PREVENT SUBMIT BUTTON FROM REFRESHING PAGE

$('.EGA_searchBtn').click(function (e) {
  e.preventDefault();
});