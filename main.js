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
var logActivityButton = document.querySelector('.log-activity-button');
var createNewActivityButton = document.querySelector('.create-new-activity-button');

var savedActivities = JSON.parse(localStorage.getItem("savedActivities")) || [];
var currentActivity;
var selectedActivity = '';
var countdown;

window.onload = loadHandler();

studyButton.addEventListener('click', selectActivity);
meditateButton.addEventListener('click', selectActivity);
exerciseButton.addEventListener('click', selectActivity);
startActivityButton.addEventListener('click', mamaFunction);
startTimerButton.addEventListener('click', startTimer);
logActivityButton.addEventListener('click', logActivity);
createNewActivityButton.addEventListener('click', displayMain);

function mamaFunction(event) {
  event.preventDefault();
  if (validateCategory() && validateDescription() && validateNum() && validateNumSec()) {
    makeActivity();
    var totalSeconds = currentActivity.minutes * 60 + currentActivity.seconds;
    displayTimeLeft(totalSeconds);
    showTimer();
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

function showTimer() {
  var activityEncompassContainer = document.querySelector('.activity-encompass-container');
  var showTimer = document.querySelector('.timer-view');
  activityEncompassContainer.classList.add('hidden');
  showTimer.classList.remove('hidden');
}

function startTimer() {
  currentActivity.timer();
}

function displayDescription() {
  var timerDescriptionDisplay = document.querySelector('.timer-description-display');
  timerDescriptionDisplay.innerText = descriptionInput.value;
}

function showAlert(display) {
  console.log(timerDisplay.innerText == '00:00')
  if (timerDisplay.innerText == '00:00') {
    logActivityButton.classList.remove('hidden');
    startTimerButton.innerText = "COMPLETE!";
  }
}

function logActivity() {
  currentActivity.markComplete();
  savedActivities.push(currentActivity);
  displayLoggedActivity(currentActivity);
  displayCreateNewButton();
  currentActivity.saveToStorage();
  var pastText = document.querySelector('.past-text');
  if (pastText) {
    pastText.classList.add('hidden');
  }
}

function displayLoggedActivity(activity) {
  var activityCardContainer = document.querySelector(".past-activity-container");
  var activityTemplate = `
    <div class="activity-card" >
      <div class="card-text">
        <h4 class="card-category">${activity.category}</h4>
        <p class="card-time">${activity.minutes} MINUTES ${activity.seconds} SECONDS</p>
        <p class="card-description">${activity.description}</p>
      </div>
      <div class="card-color" data-category=${activity.category}>
      </div>
    </div>
  `;
  activityCardContainer.insertAdjacentHTML("beforeend", activityTemplate);
}

function displayCreateNewButton() {
  var showTimer = document.querySelector('.timer-view');
  showTimer.classList.add('hidden')
  createNewActivityButton.classList.remove('hidden');

}

function displayMain() {
  createNewActivityButton.classList.add('hidden');
  startTimerButton.innerText = "START!";
  var activityEncompassContainer = document.querySelector('.activity-encompass-container')
  activityEncompassContainer.classList.remove('hidden');
  resetForm();
}

function resetForm() {
  var form = document.querySelector('.activity-form')
  form.reset()
  var activeButton = document.querySelector(".button.active");
  if (activeButton) {
    activeButton.classList.remove("active")
  }
}

function loadHandler() {
  var activityCardContainer = document.querySelector(".past-activity-container");
  if (savedActivities.length > 0) {
    for (var i = 0; i < savedActivities.length; i++) {
      displayLoggedActivity(savedActivities[i])
    }
  } else {
    var pastText =`<p class="past-text">You haven't logged any activities yet.<br/>Complete the form to the left to get started!</p>`;
    activityCardContainer.insertAdjacentHTML("beforeend", pastText);
  }
}
