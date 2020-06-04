
class Activity {
  constructor(category, description, minutes, seconds) {
    this.id = Date.now();
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
  }

  timer() {
    var totalSeconds = (this.minutes * 60) + this.seconds;
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

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {
    var stringifiedSavedActivities = JSON.stringify(savedActivities);
    localStorage.setItem("savedActivities", stringifiedSavedActivities);
  }

}
