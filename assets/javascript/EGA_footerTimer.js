
// REAL TIME TIMER IN THE FOOTER

function displayRealTime() {
    setInterval(function () {
        $('#EGA_footer').html("The current time is: " + moment().format('hh:mm A'))
    }, 1000);
}
displayRealTime();
