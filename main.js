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
var descriptionWarning = document.querySelector('.description-warning');
var activeButton = document.querySelector(".button.active");
var formDisplay = document.querySelector('.new-activity-container');
var showTimer =document.querySelector('.timer-view');
var activityEncompassContainer = document.querySelector('.activity-encompass-container');
var startTimerButton = document.querySelector('.timer-start-button');
var timerDescriptionDisplay = document.querySelector('.timer-description-display');
var timerDisplay = document.querySelector('.countdown');

// var hasError = true;
var currentActivity;
var savedActivity = [];
var selectedActivity = '';
var countdown;

studyButton.addEventListener('click', selectActivity);
meditateButton.addEventListener('click', selectActivity);
exerciseButton.addEventListener('click', selectActivity);
startActivityButton.addEventListener('click', mamaFunction);
startTimerButton.addEventListener('click', startTimer);

function validateCategory() {
  if (selectedActivity === '') {
    return false;
  } else {
    return true;
  }
}

function mamaFunction(event) {
  event.preventDefault();
  if (validateCategory(event) && validateDescription(event) && validateNum(event) && validateNumSec(event)) {
  makeActivity(event);
  var totalSeconds = currentActivity.minutes * 60 + currentActivity.seconds;
  displayTimeLeft(totalSeconds);
  toggleTimer();
  displayDescription();
  }
}

function selectActivity(event) {
  // event.preventDefault();
  var activeButton = document.querySelector(".button.active");
  if (activeButton) {
    activeButton.classList.remove("active")
    selectedActivity = '';
  }
  event.target.classList.add("active")
  selectedActivity = event.target.innerText;
}

function makeActivity() {
  // event.preventDefault();
  var userCategory = document.querySelector(".button.active").innerText;
  var descriptionInput = document.querySelector('.description-input').value;
  var minutesInput = document.querySelector('.minutes-input').value;
  var secondsInput = document.querySelector('.seconds-input').value;
  currentActivity = new Activity(userCategory, descriptionInput, parseInt(minutesInput), parseInt(secondsInput));
};

function validateDescription() {
  // event.preventDefault();
  if (descriptionInput.value === '' || descriptionInput.value === undefined) {
    descriptionWarning.innerHTML = `<p class="warning-message"><img class="warning-img" src="assets/warning.svg" alt="warning img">jail for mother!</p>`
    return false;
  } else {
    descriptionWarning.innerHTML = '';
    return true;
  }
}

function validateNum() {
  // event.preventDefault();
  if (minutesInput.value.includes('e') || minutesInput.value === '' ||  parseInt(minutesInput.value) < 0) {
    warningMessage.innerHTML = `<p><img class="warning-img" src="assets/warning.svg" alt="warning img"/>Jail for a thousand years!</p>`
  return false;
  } else {
    warningMessage.innerHTML = '';
    return true;
  }
}

function validateNumSec() {
  // event.preventDefault();
  if (secondsInput.value.includes('e') || secondsInput.value === '' || parseInt(secondsInput.value) < 0) {
    warningMessage.innerHTML = `<p><img class="warning-img" src="assets/warning.svg" alt="warning img"/>FreeBird!</p>`
    return false;
  } else {
    return true;
  }
}


 function displayTimeLeft(totalSeconds) {
   var minutes = Math.floor (totalSeconds / 60);
   var remainderSeconds = totalSeconds % 60;
   var display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
   timerDisplay.innerText = display;
   showAlert(display);
 }

 function toggleTimer() {
  activityEncompassContainer.classList.toggle('hidden');
   showTimer.classList.toggle('hidden');
 }

 function startTimer() {
   currentActivity.timer()
 }

function displayDescription() {
  timerDescriptionDisplay.innerText = descriptionInput.value;
}

function showAlert(display) {
  console.log(timerDisplay.innerText);
  console.log(timerDisplay.innerText == '0:00');
  if (timerDisplay.innerText == '0:00') {
    setTimeout(function() { alert("complete"); }, 1)
  }
}
//
// Iteration 3 - Build an MVP
// STOP! Did you refactor Iteration 2? Clean up your code before moving on!
//
// The user can start the time by clicking Start.
// While timer is running, the user should see it count down by second.
// When the timer completes, an alert should appear in the browser, letting the user know that the time is up and the activity has been completed.
// NOTE: This alert is temporary and is not something we suggest using in a fully built out application.
