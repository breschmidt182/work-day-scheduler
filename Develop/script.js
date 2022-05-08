const time_div = $("#currentDay");
time_div.text(moment().format("ddd, MMM, YYYY"));

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

let textArea = $(".text");

let button = $(".save-button");

function getFromLocalStorage () {
    textArea.text = localStorage.getItem("")
}

function init() {
    getFromLocalStorage()
}

for (let i = 0; i< timeArray.length; i++) {
    const el = timeArray[i];
    $(el).on("click", function(event){
        if (event.target.className == "col-mb-2 save-button") {
            var event = $(event.target).siblings()
            var time = $(event.target).parent().attr("id")
            localStorage.setItem(time,event[i].value)
        }
    })
}