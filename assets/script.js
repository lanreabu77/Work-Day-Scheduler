// Display today's day and date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        $(".timeBlock").each(function () {
            var id = $(this).attr("id");
            var currentHour = moment().format("HH00");
        
            if (currentHour === id) {
                $(this).parent().addClass("present");
            } else if (currentHour < id) {
                $(this).parent().addClass("past");
            } else {
                $(this).parent().addClass("future");


            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
});

// Use this button to save text to local storage when clicked

$("#saveAllBtn").click(function () {

    $(".saveBtn").each(function () {

        localStorage.setItem(this.id, $(this).prev().val());
    });
});

// Use this to delete local storage and reload page when clicked

$("#clearBtn").click(function () {

    localStorage.clear();
    location.reload();
    window.scrollTo(0, 0);
});




