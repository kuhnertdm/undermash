var numScreensPassed = 0;
var active = false;
var lastKey = 'a'

function isNumeric(value) {
    return !isNaN(value) && parseInt(value) > 0;
}

function updateStatusText(value) {
    var statusText = document.getElementById("statusText");
    statusText.innerHTML = value;
}

function stopTimer() {
    active = false;
    updateStatusText("Congratulations! You passed through " + numScreensPassed + " screens of dialogue!");
    document.getElementById("reload").style = "";
}

function startTimer(mashTime) {
    setTimeout(stopTimer, mashTime*1000);
    active = true;
}

function startRequest() {
    var mashTime = document.getElementById("mashTime").value;
    if(!isNumeric(mashTime)) {
        document.getElementById("invalidTimeText").innerHTML = "Invalid time. Please enter a whole, positive number.";
        return;
    }

    // Remove prompts
    var prompt = document.getElementById("prompt");
    prompt.parentNode.removeChild(prompt);
    var button = document.getElementById("start");
    start.parentNode.removeChild(start);
    var invalidTimeText = document.getElementById("invalidTimeText");
    invalidTimeText.parentNode.removeChild(invalidTimeText);

    updateStatusText("Alright! Starting in...");

    // Start countdown
    setTimeout(updateStatusText, 1000, "3!");
    setTimeout(updateStatusText, 2000, "2!");
    setTimeout(updateStatusText, 3000, "1!");
    setTimeout(updateStatusText, 4000, "GO!");

    // Set timer
    setTimeout(startTimer, 5000, mashTime);
}

document.onkeydown = function(event) {
    event = event || window.event;
    var currentKey = event.keyCode;
    if(active && (lastKey == 16 || lastKey == 88) && (currentKey == 90 || currentKey == 13)) {
        numScreensPassed++;
    }
    lastKey = currentKey;
}