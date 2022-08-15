// global var's
var container = $(".container");

// write function to display current day using moment.js
function displayDate() {
  // set var for current date using moment.js
  var date = moment().format("dddd, MMMM Do");
  // using jquery, set the date and display to the document element
  // with an id of "currentDay"
  var currentDay = $("#currentDay");
  currentDay.text(date);
}

displayDate();

// write function which dynamically creates a card,
// which displays "hour", a textblock, and a button
function createBlock(time) {
  // target class of container from document

  // using jquery to create elements
  // timeBlock creates div as a row
  var timeBlock = $("<div>").addClass("row");

  //   column containing event time
  var hourEl = $("<div>").addClass("col-lg-2 hour");
  var hourlyTime = $("<p>")
    .text(time)
    .css("font-weight", "bold")
    .attr("id", "hour");

  // column containing div with child form
  var divWithForm = $("<div>").addClass("col-lg-10");

  // form with class row
  var formEl = $("<form>").addClass("row");

  // column containing text area
  var textEl = $("<textarea>")
    .addClass("col-lg-10 form-control")
    .attr({ id: "text-area", type: "text", name: "calendar-event" });

  // column containing button
  var saveBtn = $("<input>")
    .attr({"type": "submit", "value": "submit"})
    .addClass("saveBtn col-lg-2");
//   var idiomatic = $("<i>").text("Save");

  // using jquery to append elements to document
  hourEl.append(hourlyTime);
//   saveBtn.append(idiomatic);
  formEl.append(textEl, saveBtn);
  divWithForm.append(formEl);
  timeBlock.append(hourEl, divWithForm);
  container.append(timeBlock);
}

// write function which appends card to document for the hours of
// 9 - 5 using moment.js
function appendBlockWithTime() {
  // set to negative value to account for numerator during first iteration of for loop
  // this allows the setHour of 9am to add 0 hours and remain at 9am, but increase
  // by 1 hour with each successive iteration
  var num = -1;
  for (i = 0; i <= 8; i++) {
    // numerator increases by 1
    var numerator = (num += 1);
    var setHour = moment().set("hour", 13);
    // with each iteratoin setHour increases by numerator
    var addHour = moment(setHour).add(numerator, "h");
    // sets display format
    var displayHour = addHour.format("h a");

    //   passing in hour as an argument during function call
    createBlock(displayHour);
    displayColor(displayHour);
  }
}

appendBlockWithTime();

// Write function to display each timeblock in past, present, or future
// colors based on css classes
function displayColor(hour) {
  var now = moment().format("h a");
  var textArea = $("#text-area");

  if (hour < now) {
    textArea.addClass("past");
  }
  // else if (hour === now) {
  //   textArea.addClass("present");
  // } else if (hour > now) {
  //   textArea.addClass("future");
  // }

  console.log("current hour " + now);
  console.log("calender hour " + hour);

  console.log(hour < now);
  // console.log(moment(hour).isBefore(now));

  // console.log(hour === now);
  // console.log(moment(hour).isSame(now));

  // console.log(hour > now);
  // console.log(moment(hour).isAfter(now));

  // console.log(moment(hour).isBefore(now));
  // console.log(!(moment(hour).isBefore(now)));
  // console.log(moment(hour) === moment(now));
}

// write function to save event entered upon button click into
// localstorage
function sendToLocalStorage(event) {
  event.preventDefault();
  var calendarEvent = $('textarea[name="calendar-event"]').val();
  console.log(calendarEvent);
}

// using event delegation, create event listener on save button for
// dynamic content
container.on("click", ".saveBtn", sendToLocalStorage);
