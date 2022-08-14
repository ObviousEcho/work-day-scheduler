// set var for current date using moment.js
var date = moment().format("dddd, MMMM Do");

// write function to display current day using moment.js
function displayDate() {
    // using jquery, set the date and display to the document element
    // with an id of "currentDay"
    var currentDay = $('#currentDay');
    currentDay.text(date);
}

displayDate();


// write function which dynamically creates a card, using bootstrap,
// which displays "hour", a textblock, and a button
function createCard() {
    var container = $('.container');

    var timeBlock = $('<div>').addClass('row');
    var hourEl = $('<div>').addClass('col-lg-2 hour');
    var hourlyTime = $('<p>').text("9am");
    var textEl = $('<textarea>').addClass('col-lg-8 form-control').attr('id', 'text-area').attr('rows','3');
    var saveBtn = $('<button>').addClass('saveBtn col-lg-2').text("Save");

    hourEl.append(hourlyTime);
    timeBlock.append(hourEl, textEl, saveBtn);
    container.append(timeBlock);
}

createCard();

// write function which appends card to document for the hours of
// 9 - 5 using moment.js


// Write function to display each timeblock in past, present, or future
// colors based on css classes

// write function to save event entered upon button click into
// localstorage


// using event delegation, create event listener on save button for
// dynamic content