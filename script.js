


//Note: From version 2.25.0 you can only pass a formats argument, it could be an object of strings and functions:
let calendar = moment("01/20/23");
$("#currentDay").text(calendar.format('dddd, MMMM Do, YYYY'));

let currentDay = document.querySelector("#currentDay");

//The current time:
setInterval(function(){let time = moment();
$("#currentTime").text(time.format('hh:mm:ss'));
}
,1000)


localStoarge.setItems
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage



// moment().calendar({
//   sameDay: function (now) {
//     if (this.isBefore(now)) {
//       return '[Will Happen Today]';
//     } else {
//       return '[Happened Today]';
//     }
//     /* ... */
//   }
// });