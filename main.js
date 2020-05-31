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
var accomplishmentInput = document.querySelector('.accomplishment-input');
var secondsInput = document.querySelector('.seconds-input');
var minutesInput = document.querySelector('.minutes-input');

studyButton.addEventListener('click', selectActivity);
meditateButton.addEventListener('click', selectActivity);
exerciseButton.addEventListener('click', selectActivity);
startActivityButton.addEventListener('click', makeActivity)


// function selectStudy(event) {
//   event.preventDefault();
//   studyImg.src = "./assets/study-active.svg";
//   meditateImg.src = "./assets/meditate.svg";
//   exerciseImg.src = "./assets/exercise.svg";
// }
//
// function selectMeditate(event) {
//   event.preventDefault();
//   meditateImg.src = "./assets/meditate-active.svg";
//   studyImg.src = "./assets/study.svg";
//   exerciseImg.src = "./assets/exercise.svg";
// }
//
// function selectExercise(event) {
//   event.preventDefault();
//   exerciseImg.src = "./assets/exercise-active.svg";
//   meditateImg.src = "./assets/meditate.svg";
//   studyImg.src = "./assets/study.svg";
// }

function selectActivity(event) {
  event.preventDefault();
  var activeButton = document.querySelector(".button.active");
  if (activeButton) {
    activeButton.classList.remove("active")
  }
  event.target.classList.add("active")
}

// var currentActivity;
// var activitiesArr = [];
// function makeActivity(event) {
//  event.preventDefault();
//  var activityInput = document.querySelector(“form”);
//  var userCategory = document.querySelector(“.button”).value;
//  var minutesInput = document.querySelector(“.minutes-input”).value;
//  var secondsInput = document.querySelector(“.seconds-input”).value;
//  currentActivity = new Activity(category, minutes, seconds);
//  activitiesArr.push(currentActivity);
//  form.reset();
//  showTimer();
// };

// function showTimer() {
// }


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
