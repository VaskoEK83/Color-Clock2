function colorClock() {
var date = new Date();

var hours = date.getHours();
// console.log(hours);
var minutes = date.getMinutes();
var seconds = date.getSeconds();
/* console.log(hours + minutes + seconds);

console.log(hours + ':' + minutes + ':' + seconds); */

if (hours < 10) {
  hours = '0' + hours;
}

if (minutes < 10) {
  minutes = '0' + minutes;
}

if (seconds < 10) {
  seconds = '0' + seconds;
}
  
var clockFace1 = hours + ':' + minutes + '|';
document.getElementById('clock').innerHTML = clockFace1;

var clockFace2 = seconds;
document.getElementById('clockSec').innerHTML = clockFace2;  

setTimeout(function() {
  colorClock();
}, 1000);

document.body.style.background = 'red';
  
// ha csak a #clock hátterét változtatnánk meg document.getElementById('clock').style.background = 'red';

var hexColor = '#' + seconds * 2 + minutes + hours;
  
document.body.style.background = hexColor;

}

colorClock();