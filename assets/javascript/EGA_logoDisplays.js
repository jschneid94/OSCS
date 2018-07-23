// GITHUB API TOGGLE SWITCH

$("#EGA_githubApiLogo").on('click', function () {

  if ($("#EGA_spotifyLogo").is(':visible')) {
    $("#EGA_spotifyLogo").fadeOut(500);
    $("#EGA_spotifyApiLogo").toggleClass('EGA_activeToggle');
    
    setTimeout(function(){
      $("#EGA_githubLogo").fadeToggle(500)}, 500); 
      $(this).toggleClass('EGA_activeToggle'); 
      $("#EGA_githubContainer").fadeToggle(500);

  } else {
    $("#EGA_githubLogo").fadeToggle(500);
    $(this).toggleClass('EGA_activeToggle'); 
  }


});

// YOUTUBE API TOGGLE SWITCH

$("#EGA_youtubeApiLogo").on('click', function () {
  
  $("#EGA_youtubeLogo").fadeToggle();
  $(this).toggleClass('EGA_activeToggle'); 
  

});

// STACKOVERFLOW API TOGGLE SWITCH

$("#EGA_stackoverflowApiLogo").on('click', function () {

  if ($("#EGA_amazonLogo").is(':visible')) {
    $("#EGA_amazonLogo").fadeOut(500);
    $("#EGA_amazonApiLogo").toggleClass('EGA_activeToggle');

    setTimeout(function(){
    $("#EGA_stackoverflowLogo").fadeToggle(500)}, 500);
    $(this).toggleClass('EGA_activeToggle');

  } else {
    $("#EGA_stackoverflowLogo").fadeToggle(500);
    $(this).toggleClass('EGA_activeToggle');
  }


});

// AMAZON API TOGGLE SWITCH

$("#EGA_amazonApiLogo").on('click', function () {

  if ($("#EGA_stackoverflowLogo").is(':visible')) {
    $("#EGA_stackoverflowLogo").fadeOut(500);
    $("#EGA_stackoverflowApiLogo").toggleClass('EGA_activeToggle');

    setTimeout(function(){
    $("#EGA_amazonLogo").fadeToggle(500)}, 500);
    $(this).toggleClass('EGA_activeToggle');

  } else {
    $("#EGA_amazonLogo").fadeToggle(500);
    $(this).toggleClass('EGA_activeToggle');
  }

  

});

// SPOTIFY API TOGGLE SWITCH

$("#EGA_spotifyApiLogo").on('click', function () {

  if ($("#EGA_githubLogo").is(':visible')) {
    $("#EGA_githubLogo").fadeOut(500);
    $("#EGA_githubApiLogo").toggleClass('EGA_activeToggle');

    setTimeout(function(){
    $("#EGA_spotifyLogo").fadeToggle(500)}, 500);
    $(this).toggleClass('EGA_activeToggle'); 
    

  } else {
    $("#EGA_spotifyLogo").fadeToggle();
    $(this).toggleClass('EGA_activeToggle');
  }

   

});

// PREVENT SUBMIT BUTTON FROM REFRESHING PAGE

$('.EGA_searchBtn').click(function (e) {
  e.preventDefault();
});

// SIDE BAR FUNCTIONALITY
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });

  $('#EGA_sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});