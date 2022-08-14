// global var's

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
function createBlock(string) {
  // target class of container from document
  var container = $(".container");

  // using jquery to create elements
  // timeBlock creates div as a row
  var timeBlock = $("<div>").addClass("row");

  //   column containing event time
  var hourEl = $("<div>").addClass("col-lg-2 hour");
  var hourlyTime = $("<p>").text(string);
  hourlyTime.css("font-weight", "bold");

  // column containing text area
  var textEl = $("<textarea>")
    .addClass("col-lg-8 form-control")
    .attr("id", "text-area");

  // column containing button
  var saveBtn = $("<button>").addClass("saveBtn col-lg-2");
  var idiomatic = $("<i>").text("Save");

  // using jquery to append elements to document
  hourEl.append(hourlyTime);
  saveBtn.append(idiomatic);
  timeBlock.append(hourEl, textEl, saveBtn);
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
    var setHour = moment().set("hour", 9);
    // with each iteratoin setHour increases by numerator
    var addHour = moment(setHour).add(numerator, "h");
    // sets display format
    var displayHour = addHour.format("h a");

    //   passing in hour as an argument during function call
    createBlock(displayHour);
  }
}
appendBlockWithTime();
// Write function to display each timeblock in past, present, or future
// colors based on css classes

// write function to save event entered upon button click into
// localstorage

// using event delegation, create event listener on save button for
// dynamic content
