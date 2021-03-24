//Current Date needs to be generated & displayed upon rendering of the page
$(document).ready(function() {

    var today = moment();
    $('#currentDay').text(today.format("dddd, MMMM Do"));

    var currentTime = today.format("H");


//Timeblocks colors change according to past, present, future
    //Timeblock time needs to be compared with the current date to inform it what color it needs to be.

    var timeBlockEl = ["#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17"] ;

    for (i = 0; i < timeBlockEl.length; i++) {
        if (('#hour-' + currentTime) == timeBlockEl[i]) {
            $(timeBlockEl[i]).children().eq(1).attr('class', 'present');
        } else if (('#hour-' + currentTime) > timeBlockEl[i]) {
            $(timeBlockEl[i]).children().eq(1).attr('class', 'past');
        } else {
            $(timeBlockEl[i]).children().eq(1).attr('class', 'future');
        }
    }

//When Save Button is clicked then text is saved in local storage and persists even when pg is refreshed

    $('.saveBtn').on('click', function() {
        var eventInput = $(this).siblings('textarea').val();

        localStorage.setItem('schedule-' + i, eventInput);

        
    });



});   