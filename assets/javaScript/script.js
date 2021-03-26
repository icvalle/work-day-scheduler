//Current Date needs to be generated & displayed upon rendering of the page
$(document).ready(function() {
    var today = moment();
    $('#currentDay').text(today.format("dddd, MMMM Do"));

    var currentTime = today.format("H");
    
    var timeBlockEl = ["#hour-09", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17"] ;

    var event9AMSaved = localStorage.getItem("event9AM");
    var hr0El = $(timeBlockEl[0]).children().eq(1);
    hr0El.text(event9AMSaved);

    var event10AMSaved = localStorage.getItem("event10AM");
    var hr1El = $(timeBlockEl[1]).children().eq(1);
    hr1El.text(event10AMSaved);

    var event11AMSaved = localStorage.getItem("event11AM");
    var hr2El = $(timeBlockEl[2]).children().eq(1);
    hr2El.text(event11AMSaved);

    var event12PMSaved = localStorage.getItem("event12PM");
    var hr3El = $(timeBlockEl[3]).children().eq(1);
    hr3El.text(event12PMSaved);

    var event1PMSaved = localStorage.getItem("event1PM");
    var hr4El = $(timeBlockEl[4]).children().eq(1);
    hr4El.text(event1PMSaved);

    var event2PMSaved = localStorage.getItem("event2PM");
    var hr5El = $(timeBlockEl[5]).children().eq(1);
    hr5El.text(event2PMSaved);

    var event3PMSaved = localStorage.getItem("event3PM");
    var hr6El = $(timeBlockEl[6]).children().eq(1);
    hr6El.text(event3PMSaved);

    var event4PMSaved = localStorage.getItem("event4PM");
    var hr7El = $(timeBlockEl[7]).children().eq(1);
    hr7El.text(event4PMSaved);

    var event5PMSaved = localStorage.getItem("event5PM");
    var hr8El = $(timeBlockEl[8]).children().eq(1);
    hr8El.text(event5PMSaved);

//Timeblocks colors change according to past, present, future
    //Timeblock time needs to be compared with the current date to inform it what color it needs to be.

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
    });

    $(timeBlockEl[7]).children().eq(2).on('click', function () {
        var h16Event = $(timeBlockEl[7]).children().eq(1).val();
        localStorage.setItem("event4PM", h16Event);
    });

    $(timeBlockEl[6]).children().eq(2).on('click', function () {
        var h15Event = $(timeBlockEl[6]).children().eq(1).val();
        localStorage.setItem("event3PM", h15Event);
    });

    $(timeBlockEl[5]).children().eq(2).on('click', function () {
        var h14Event = $(timeBlockEl[5]).children().eq(1).val();
        localStorage.setItem("event2PM", h14Event);
    });

    $(timeBlockEl[4]).children().eq(2).on('click', function () {
        var h13Event = $(timeBlockEl[4]).children().eq(1).val();
        localStorage.setItem("event1PM", h13Event);
    });

    $(timeBlockEl[3]).children().eq(2).on('click', function () {
        var h12Event = $(timeBlockEl[3]).children().eq(1).val();
        localStorage.setItem("event12PM", h12Event);
    });

    $(timeBlockEl[2]).children().eq(2).on('click', function () {
        var h11Event = $(timeBlockEl[2]).children().eq(1).val();
        localStorage.setItem("event11AM", h11Event);
    });

    $(timeBlockEl[1]).children().eq(2).on('click', function () {
        var h10Event = $(timeBlockEl[1]).children().eq(1).val();
        localStorage.setItem("event10AM", h10Event);
    });

    $(timeBlockEl[0]).children().eq(2).on('click', function () {
        var h9Event = $(timeBlockEl[0]).children().eq(1).val();
        localStorage.setItem("event9AM", h9Event);
    });

});   