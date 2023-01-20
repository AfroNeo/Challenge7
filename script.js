


//Note: From version 2.25.0 you can only pass a formats argument, it could be an object of strings and functions:
let calendar = moment("01/20/23");
$("#currentDay").text(calendar.format('dddd, MMMM Do, YYYY'));

let currentDay = document.querySelector("#currentDay");

//The current time:
setInterval(function(){let time = moment();
$("#currentTime").text(time.format('hh:mm:ss'));
}
,1000)








//LOCAL STORAGE
//my localStorage funtion, call and listenter

const input = document.querySelector("input"),
      h2 = document.querySelector("h2");

h2.innerHTML = localStorage.getItem("value");

input.addEventListener("keyup", display);

//The Function
function display() {
  //error here:
  // localStoarge.setItem("value", input.value);
  console.log(localStorage.getItem("value"));

  h2.innerHTML = localStorage.getItem("value");
}

function removeItem(){
  localStoarge.removeItem('keyName');
}

function clear(){
localStorage.clear('keyName');
}




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