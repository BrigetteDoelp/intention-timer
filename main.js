var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var startActivityButton = document.querySelector('.start-activity-button');
var descriptionInput = document.querySelector('.description-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var warningMessage = document.querySelector('.warning-message-number');
var startTimerButton = document.querySelector('.timer-start-button');
var timerDisplay = document.querySelector('.countdown');

var currentActivity;
var savedActivity = [];
var selectedActivity = '';
var countdown;

studyButton.addEventListener('click', selectActivity);
meditateButton.addEventListener('click', selectActivity);
exerciseButton.addEventListener('click', selectActivity);
startActivityButton.addEventListener('click', mamaFunction);
startTimerButton.addEventListener('click', startTimer);

function mamaFunction(event) {
  event.preventDefault();
  if (validateCategory() && validateDescription() && validateNum() && validateNumSec()) {
    makeActivity();
    var totalSeconds = currentActivity.minutes * 60 + currentActivity.seconds;
    displayTimeLeft(totalSeconds);
    toggleTimer();
    displayDescription();
  }
}

function selectActivity(event) {
  event.preventDefault();
  var activeButton = document.querySelector(".button.active");
  if (activeButton) {
    activeButton.classList.remove("active")
    selectedActivity = '';
  }
  event.target.classList.add("active")
  selectedActivity = event.target.innerText;
}

function makeActivity() {
  var userCategory = document.querySelector(".button.active").innerText;
  currentActivity = new Activity(userCategory, descriptionInput.value, parseInt(minutesInput.value), parseInt(secondsInput.value));
}

function validateCategory() {
  if (selectedActivity === '') {
    return false;
  } else {
    return true;
  }
}

function validateDescription() {
  var descriptionWarning = document.querySelector('.description-warning');
  if (descriptionInput.value === '' || descriptionInput.value === undefined) {
    descriptionWarning.innerHTML = `<p class="warning-message"><img class="warning-img" src="assets/warning.svg" alt="warning img">jail for mother!</p>`
    return false;
  } else {
    descriptionWarning.innerHTML = '';
    return true;
  }
}

function validateNum() {
  if (minutesInput.value.includes('e') || minutesInput.value === '' ||  parseInt(minutesInput.value) < 0) {
    warningMessage.innerHTML = `<p><img class="warning-img" src="assets/warning.svg" alt="warning img"/>Jail for a thousand years!</p>`
    return false;
  } else {
    warningMessage.innerHTML = '';
    return true;
  }
}

function validateNumSec() {
  if (secondsInput.value.includes('e') || secondsInput.value === '' || parseInt(secondsInput.value) < 0) {
    warningMessage.innerHTML = `<p><img class="warning-img" src="assets/warning.svg" alt="warning img"/>FreeBird!</p>`;
    return false;
  } else {
    return true;
  }
}

function displayTimeLeft(totalSeconds) {
  var minutes = Math.floor (totalSeconds / 60);
  var remainderSeconds = totalSeconds % 60;
  var display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.innerText = display;
  showAlert(display);
}

function toggleTimer() {
  var activityEncompassContainer = document.querySelector('.activity-encompass-container');
  var showTimer = document.querySelector('.timer-view');
  activityEncompassContainer.classList.toggle('hidden');
  showTimer.classList.toggle('hidden');
}

function startTimer() {
  currentActivity.timer();
}

function displayDescription() {
  var timerDescriptionDisplay = document.querySelector('.timer-description-display');
  timerDescriptionDisplay.innerText = descriptionInput.value;
}

function showAlert(display) {
  if (timerDisplay.innerText == '00:00') {
    setTimeout(function() { alert("complete"); }, 1);
  }
}
