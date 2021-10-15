var schedules = {};

 var date = (moment().format("dddd, MMMM Do, YYYY - hh:mm:ss a"));
 
$("#currentDay").text(date);


  var loadSchedules = function(){
      schedules = JSON.parse(localStorage.getItem("schedules"));
      if(!schedules){
          schedules = {
              pastSched: [],
              presentSched: [],
              futureSched: []
          }
        };
};

$(document).ready(function() {
    $("#saveBtn").click(function(){
        $("#textarea").val();
    });
});



var saveSchedules = function(){
    localStorage.setItem("schedules", JSON.stringify(schedules));
};