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
    $(".RDP_container").fadeToggle();
    $(".RDP_secretContainer").fadeToggle();
    $(".RDP_secretContainer2").fadeToggle();
    $(".RDP_secretContainer2").toggleClass("RDP_flex");
  
  });
  
  
  // STACKOVERFLOW API TOGGLE SWITCH
  
  $("#EGA_stackoverflowApiLogo").on('click', function () {
  
    if ($("#EGA_amazonLogo").is(':visible')) {
      $("#EGA_amazonLogo").fadeOut(500);
      $("#EGA_amazonApiLogo").toggleClass('EGA_activeToggle');
  
      setTimeout(function(){
      $("#EGA_stackoverflowLogo").fadeToggle(500)}, 500);
      $(this).toggleClass('EGA_activeToggle');
      $(".EGA_stackoverflowContainer").fadeToggle();
  
    } else {
      $("#EGA_stackoverflowLogo").fadeToggle(500);
      $(this).toggleClass('EGA_activeToggle');
      $(".EGA_stackoverflowContainer").fadeToggle();
    }
  
  });
  
  // AMAZON API TOGGLE SWITCH
  
  $("#EGA_amazonApiLogo").on('click', function () {
  
    if ($("#EGA_stackoverflowLogo").is(':visible')) {
      $(".EGA_stackoverflowContainer").fadeToggle();
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

  // REAL TIME TIMER IN THE FOOTER

function displayRealTime() {
    setInterval(function () {
        $('#EGA_footer').html("The current time is: " + moment().format('hh:mm A'))
    }, 1000);
}
displayRealTime();
  
  // SIDE BAR FUNCTIONALITY
  
  ( function( $ ) {
    $( document ).ready(function() {
    $('#cssmenu > ul > li > a').click(function() {
      $('#cssmenu li').removeClass('active');
      $(this).closest('li').addClass('active');	
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        checkElement.slideUp('normal');
      }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('#cssmenu ul ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
      }
      if($(this).closest('li').find('ul').children().length == 0) {
        return true;
      } else {
        return false;	
      }		
    });
    });
    } )( jQuery );