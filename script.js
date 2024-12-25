const debug = false
var timezone = 1

function getnextxmas() {
if (debug) {
 console.log("current year: " + new Date().getFullYear())}

let nyeartstamp = toTimestamp(new Date().getFullYear()+1)/* - 43200 */

if (debug) {
 console.log("getting timestamp using: " + toTimestamp(new Date().getFullYear()+1)/* - 43200*/)
 console.log("next nyear timestamp: " + nyeartstamp)
 console.log("converting timezones... " + nyeartstamp + " with " + timezone)
}
let timestampOffset = 3600 * timezone
nyeartstamp = nyeartstamp - timestampOffset
if (debug) {
    console.log("Is " + nyeartstamp)
    console.log("got next date!")
   }
return nyeartstamp
}

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
}

function calculatenyearremtime() {
    let currentdate = new Date().getTime() / 1000;
    let calculated = getnextxmas() - currentdate
    return Math.round(calculated)
}

function hrf() {
    let input = calculatenyearremtime()
     sec = input
     min = Math.round(calculatenyearremtime() / 60 * 100) / 100
     hours = Math.round(min / 60 * 100) / 100
     days = Math.round(hours / 24 * 100) / 100

    if (debug) {
        console.log(sec + " " + min + " " + hours + " " + days)
    }
}

// main
var sec = 0
var min = 0
var hours = 0
var days = 0

var updatetimer = window.setInterval(function(){
    cycle()
  }, 1000);

function cycle() {
    hrf()
// document.getElementById("counterbox").textContent = "Sec: " + sec + ". Min: " + min + ". hours: " + hours + ". Days: " + days
document.getElementById("sec").textContent = sec + " sec"
document.getElementById("min").textContent = min + " min"
document.getElementById("hrs").textContent = hours + " hrs"
document.getElementById("day").textContent = days + " day"
} 