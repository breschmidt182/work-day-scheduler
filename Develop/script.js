const time_div = $("#currentDay");
time_div.text(moment().format("dddd, MMM Do YYYY"));
const textArea = $(".text");

const nineAm = $("#9am");
const tenAm = $("#10am");
const elevenAm = $("#11am");
const twelvePm = $("#12pm");
const onePm = $("#1pm");
const twoPm = $("#2pm");
const threePm = $("#3pm");
const fourPm = $("#4pm");
const fivePm = $("#5pm");

var timeArray = [
    nineAm,
    tenAm,
    elevenAm,
    twelvePm,
    onePm,
    twoPm,
    threePm,
    fourPm,
    fivePm
]

let button = $(".save-button").click(function() {
    var task = $(this).prev().val()
    var time = $(this).prev().prev().text()
    localStorage.setItem(time,task)
    console.log("saved");
});

function getFromLocalStorage() {
    textArea.text = localStorage.getItem("")
}

function init() {
    getFromLocalStorage()
    for (let i=0; i < timeArray.length; i++) {
        const timeBlock = timeArray[i];
        console.log(timeBlock);
    
        $(timeArray).children().val
        localStorage.getItem(timeArray)
}
}
init();