var textarea = [];
var date = moment().format("dddd, MMMM Do, YYYY - hh:mm:ss a");
$("#currentDay").text(date);

$(document).ready(function () {
  //This function called when the button is clicked
  $("#saveBtn").click(function () {
    // val() method is used to get the values from
    // textarea and stored in txt variable
    var textarea = $("textarea").val() + " at 8:00am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn1").click(function () {
    var textarea = $("#textArea1").val() + " at 8:30am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn2").click(function () {
    var textarea = $("#textArea2").val() + " at 9:00am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn3").click(function () {
    var textarea = $("#textArea3").val() + " at 9:30am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn4").click(function () {
    var textarea = $("#textArea4").val() + " at 10:00am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn5").click(function () {
    var textarea = $("#textArea5").val() + " at 10:30am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn6").click(function () {
    var textarea = $("#textArea6").val() + " at 12:00pm";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn7").click(function () {
    var textarea = $("#textArea7").val() + " at 1:00am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn8").click(function () {
    var textarea = $("#textArea8").val() + " at 3:15pm";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  $("#saveBtn9").click(function () {
    var textarea = $("#textArea9").val() + " at 5:00am";
    alert("Your schedule was save!");
    console.log(textarea);
  });
  
});


$(document).ready(function () {
  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });

  $("*[data-store]").on("keyup", function (itm) {
    localStorage.setItem("item-" + $(this).attr("data-store"), $(this).val());
  });
});
