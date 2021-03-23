//Current Date needs to be generated & displayed upon rendering of the page
    //Make a variable for Current Date so I can reference it multiple times
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do"));
var currentTime = today.format("hA");

var eventBlockEl = $('textarea[name="event"]');

//Timeblocks colors change according to past, present, future
    //Timeblock time needs to be compared with the current date to inform it what color it needs to be.
var timeBlockEl = ["#AM9", "#AM10", "#AM11", "#PM12", "#PM1", "#PM2", "#PM3", "#PM4", "#PM5"] ;

        //'if timeblock time == current date then change style color to present color'
       /*
       if (currentTime == $('#AM9').children().eq(0).text()) {
            $('#AM9').children().eq(1).attr('class', 'present');
        //'if timeblock time < current date then change style color to past color'
        } else if (currentTime > $('#AM9').children().eq(0).text()) {
            $('#AM9').children().eq(1).attr('class', 'past');
        //'if timeblock time > current date then change style color to future color'
        } else {
            $('#AM9').children().eq(1).attr('class', 'future');
        } 
        */

    for (i = 0; i < timeBlockEl.length; i++) {
        if (currentTime == ($(timeBlockEl[i]).children().eq(0).text())) {
            $(timeBlockEl[i]).children().eq(1).attr('class', 'present');
        } else if (currentTime > ($(timeBlockEl[i]).children().eq(0).text())) {
            $(timeBlockEl[i]).children().eq(1).attr('class', 'past');
        } else if (currentTime < ($(timeBlockEl[i]).children().eq(0).text())) {
            $(timeBlockEl[i]).children().eq(1).attr('class', 'future');
        } else {}
    }

        

//When Save Button is clicked then text is saved in local storage and persists even when pg is refreshed
$(timeBlockEl[8]).children().eq(2).on('click', function () {
    var pm5Event = $(timeBlockEl[8]).children().eq(1).val();
    localStorage.setItem("event5PM", pm5Event);
    localStorage.getItem("event5PM");
    $(timeBlockEl[8]).children().eq(1).text(event5PM).persist();
});
    