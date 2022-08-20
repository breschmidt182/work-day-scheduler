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


function timeOfEvent() {
	var currentTime = moment().hour();

	$(".time-block").each(function () {
		let eventTime = parseInt($(this)[0].id)
		console.log(parseInt($(this)[0].id))
		if(eventTime >= 1 && eventTime <= 5) {
			eventTime += 12
		}

		if (eventTime < currentTime) {
			$(this).addClass("past")
		}
		else if(eventTime == currentTime) {
			$(this).removeClass("past")
			$(this).addClass("present")
		}
		else {
			$(this).remove("present")
			$(this).remove("past")
			$(this).addClass("future")
		}
	})
}


// function getFromLocalStorage() {
// 	const timeAndTask = localStorage.getItem('time')
// 	$(".description") = localStorage.getItem(id)
// }

function init() {
    // getFromLocalStorage()
		timeOfEvent();
  for (let i=0; i < timeArray.length; i++) {
     const timeBlock = timeArray[i][0].id;
    //  console.log(timeBlock);
    
    // console.log(timeArray[i].children().children()[1].textContent)
		timeArray[i].children().children()[1].value = localStorage.getItem(timeBlock)
	}

	$(".save-button").click(function(event) {
		var task = $(this).prev()[0].value
		var time = $(this).prev().prev()[0].textContent
		// console.log(time)
		// console.log($(this).prev()[0].value)
		// console.log($(this).prev().prev()[0].textContent)
		localStorage.setItem(time,task);
			// console.log("saved");
	});
}


// getFromLocalStorage();
init();

