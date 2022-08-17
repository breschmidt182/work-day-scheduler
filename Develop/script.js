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



let button = $(".save-button").click(function(event) {
	var task = $(this).prev().val()
	var time = $(this).prev().prev().text()
  localStorage.setItem("task",JSON.stringify(task));
	localStorage.setItem("time",JSON.stringify(time));
	JSON.parse(localStorage.getItem("task"));
	JSON.parse(localStorage.getItem("time"));
    console.log("saved");
});

function timeOfEvent() {
	var currentTime = moment().hour();

	$(".time-block").each(function () {
		const eventTime = parseInt($(this).attr("id").split("hour")[11])

		if (eventTime < currentTime) {
			$(this).addClass("past")
		}
		else if(eventTime == currentTime) {
			$(this).removeClass("past")
			$(this).addClass("present")
		}
		else {
			$(this).remove("present")
			$(this).addClass("future")
		}
	})
}


function getFromLocalStorage() {
	const timeAndTask = localStorage.getItem('time')
	document.getElementById('9am').value = timeAndTask;
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

timeOfEvent();
getFromLocalStorage();
init();

