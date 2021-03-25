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
    
    $(timeBlockEl[8]).children().eq(2).on('click', function () {
        var h17Event = $(timeBlockEl[8]).children().eq(1).val();
        localStorage.setItem("event5PM", h17Event);
        var event5PMSaved = localStorage.getItem("event5PM")
        var hr17El = $(timeBlockEl[8]).children().eq(1);
        hr17El.text(event5PMSaved);
    });

    $(timeBlockEl[7]).children().eq(2).on('click', function () {
        var h16Event = $(timeBlockEl[7]).children().eq(1).val();
        localStorage.setItem("event4PM", h16Event);
        localStorage.getItem("event4PM");
        
    });

    $(timeBlockEl[6]).children().eq(2).on('click', function () {
        var h15Event = $(timeBlockEl[6]).children().eq(1).val();
        localStorage.setItem("event3PM", h15Event);
        localStorage.getItem("event3PM");
        
    });

    $(timeBlockEl[5]).children().eq(2).on('click', function () {
        var h14Event = $(timeBlockEl[5]).children().eq(1).val();
        localStorage.setItem("event2PM", h14Event);
        localStorage.getItem("event2PM");
        
    });

    $(timeBlockEl[4]).children().eq(2).on('click', function () {
        var h13Event = $(timeBlockEl[4]).children().eq(1).val();
        localStorage.setItem("event1PM", h13Event);
        localStorage.getItem("event1PM");
        
    });

    $(timeBlockEl[3]).children().eq(2).on('click', function () {
        var h12Event = $(timeBlockEl[3]).children().eq(1).val();
        localStorage.setItem("event12PM", h12Event);
        localStorage.getItem("event12PM");
        
    });

    $(timeBlockEl[2]).children().eq(2).on('click', function () {
        var h11Event = $(timeBlockEl[2]).children().eq(1).val();
        localStorage.setItem("event11AM", h11Event);
        localStorage.getItem("event11AM");
        
    });

    $(timeBlockEl[1]).children().eq(2).on('click', function () {
        var h10Event = $(timeBlockEl[1]).children().eq(1).val();
        localStorage.setItem("event10AM", h10Event);
        localStorage.getItem("event10AM");
        
    });

    $(timeBlockEl[0]).children().eq(2).on('click', function () {
        var h9Event = $(timeBlockEl[0]).children().eq(1).val();
        localStorage.setItem("event9AM", h9Event);
        localStorage.getItem("event9AM");
        
    });




});   