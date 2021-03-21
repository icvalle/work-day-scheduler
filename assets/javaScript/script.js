//Current Date needs to be generated & displayed upon rendering of the page
    //Make a variable for Current Date so I can reference it multiple times
var today = moment();
$('#currentDay').text(today.format("dddd, MMMM Do"));


//Timeblocks colors change according to past, present, future
    //Timeblock time needs to be compared with the current date to inform it what color it needs to be. 
        //'if timeblock time == current date then change style color to present color'
        //'if timeblock time < current date then change style color to past color'
        //'if timeblock time > current date then change style color to future color'

//When Timeblock is clicked, then I can enter text

//When Save Button is clicked then text is saved in local storage and persists even when pg is refreshed
