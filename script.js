


//Note: From version 2.25.0 you can only pass a formats argument, it could be an object of strings and functions:
let calendar = moment("01/20/23");
$("#currentDay").text(calendar.format('dddd, MMMM Do, YYYY'));

let currentDay = document.querySelector("#currentDay");

//The current time:
let time = moment();
$("#currentTime").text(time.format('hh:mm:ss'));



// I want to plug this into a bootstrap table / calendar. Or not? Double check the read me demo!
$moment("#currentDay").calendar({
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
});

moment().calendar({
  sameDay: function (now) {
    if (this.isBefore(now)) {
      return '[Will Happen Today]';
    } else {
      return '[Happened Today]';
    }
    /* ... */
  }
});