var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startActivityButton = document.querySelector('.start-activity-button');
var studyImg = document.querySelector('.study-img');
var studyActiveImg = document.querySelector('.study-active-img');
var studyButtonActive = document.querySelector('.study-button-active');
var meditateImg = document.querySelector('.meditate-img');
var meditateActiveImg = document.querySelector('.meditate-active-img');
var meditateButtonActive = document.querySelector('.meditate-button-active');
var exerciseImg = document.querySelector('.exercise-img');
var exerciseActiveImg = document.querySelector('.exercise-active-img');
var exerciseButtonActive = document.querySelector('.exercise-button-active');
var activeButton = document.querySelector(".button.active");
var descriptionInput = document.querySelector('.description-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var warningMessage = document.querySelector('.warning-message-number');
var activeButton = document.querySelector(".button.active");
var descriptionInput = document.querySelector('.description-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var descriptionWarning = document.querySelector('.description-warning');
var activeButton = document.querySelector(".button.active");

// var hasError = true;
var currentActivity;
var savedActivity = [];
var selectedActivity = '';

studyButton.addEventListener('click', selectActivity);
meditateButton.addEventListener('click', selectActivity);
exerciseButton.addEventListener('click', selectActivity);
startActivityButton.addEventListener('click', mamaFunction);

function validateCategory(event) {
  event.preventDefault();
  if (selectedActivity === '') {
    return false;
  } else {
    return true;
  }
}

function mamaFunction(event) {
  if (validateCategory(event) && validateDescription(event) && validateNum(event) && validateNumSec(event)) {
    true;
    // hasError = false;
    makeActivity(event);
  }
}

function selectActivity(event) {
  event.preventDefault();
  var activeButton = document.querySelector(".button.active");
  if (activeButton) {
    activeButton.classList.remove("active")
    selectedActivity = '';
    // validateCategory(event)
  }
  event.target.classList.add("active")
  selectedActivity = event.target.innerText;

}

function makeActivity(event) {
event.preventDefault();

var userCategory = document.querySelector(".button.active").innerText;
var descriptionInput = document.querySelector('.description-input').value;
var minutesInput = document.querySelector('.minutes-input').value;
var secondsInput = document.querySelector('.seconds-input').value;
currentActivity = new Activity(userCategory, descriptionInput, minutesInput, secondsInput);
};

function validateDescription(event) {
  event.preventDefault();
  if (descriptionInput.value === '' || descriptionInput.value === undefined) {
    descriptionWarning.innerHTML = `<p class="warning-message"><img class="warning-img" src="assets/warning.svg" alt="warning img">jail for mother!</p>`
    return false;
  } else {
    descriptionWarning.innerHTML = '';
    return true;
  }
}

function validateNum(event) {
  event.preventDefault();
  if (minutesInput.value.includes('e') || minutesInput.value === '' ||  parseInt(minutesInput.value) <= 0) {
    warningMessage.innerHTML = `<p><img class="warning-img" src="assets/warning.svg" alt="warning img"/>Jail for a thousand years!</p>`
  return false;
  } else {
    warningMessage.innerHTML = '';
    return true;
  }
}

function validateNumSec(event) {
  event.preventDefault();
  if (secondsInput.value.includes('e') || secondsInput.value === '' || parseInt(secondsInput.value) <= 0) {
    warningMessage.innerHTML = `<p><img class="warning-img" src="assets/warning.svg" alt="warning img"/>FreeBird!</p>`
    return false;
  } else {
    return true;
  }
}


var countdown;
  var timerDisplay = document.querySelector('.countdown');


  function timer(minutes, seconds) {
    var totalSeconds = (minutes * 60) + seconds;
    var now = Date.now();
    var target = now + totalSeconds * 1000;
    displayTimeLeft(totalSeconds);
    countdown = setInterval(() => {
     var secondsLeft = Math.round((target - Date.now()) / 1000);
     if (secondsLeft < 0) {
      clearInterval(countdown)
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000)
 }

 



// Form Functionality
// When an activity category is clicked on (Exercise, Meditate, or Study),
// the associated border and icon should change colors to give a visual indication that it has been selected.
// Colors are provided in comp.
//
// An input field should be provided for What would you like to accomplish during this time?,
// minutes and seconds. The minutes and seconds fields should only accept numbers.
// (Hint: more than one layer should probably be put into place to ensure this.
//   Make sure that e cannot be accepted.)
//
// A Start Activity button is provided to submit the data entered into the form.
// When the button is clicked, update your data model with an instance of the Activity class.
//
// When the Start Activity button is clicked, the user should no longer see the form,
// and instead see a timer clock. The timer clock should display the user-provided minutes and seconds,
// as well as the description. The category should not appear, but the outline of the circle
// should match the color associated with the category.
//
// If the Start Activity button is clicked before the user has entered information into all four inputs,
// the user will receive an error message, but will not lose any information that was provided.
