function calculateScore() {
    let accommodation = document.querySelector('input[name="accommodation"]:checked').value;
    let food = document.querySelector('input[name="food"]:checked').value;
    let transport = document.querySelector('input[name="transport"]:checked').value;

    let score = 0;

    // Accommodation Scoring
    if (accommodation === "local") score += 30;
    if (accommodation === "chain") score += 10; 

    // Food Scoring
    if (food === "local") score += 30;
    if (food === "mixed") score += 20;
    if (food === "chain") score += 10;

    // Transport Scoring
    if (transport === "local") score += 30;
    if (transport === "mixed") score += 20;
    if (transport === "rental") score += 10;

    // Normalize to percentage (out of 90 total points)
    let supportScore = Math.round((score / 90) * 100);

    document.getElementById("score").textContent = supportScore + "%";
    document.getElementById("progress-bar").style.width = supportScore + "%";

    // Message feedback
    let message = "";
    if (supportScore < 30) {
        message = "Try to support more local businesses!";
    } else if (supportScore < 70) {
        message = "Good effort! You're making a difference.";
    } else {
        message = "Amazing! You're a true local economy supporter!";
    }
    document.getElementById("message").textContent = message;
}


    let feedbackMessage = "";
    if (supportScore >= 80) {
        feedbackMessage = "🌿 Amazing! You're a champion for the local economy!";
    } else if (supportScore >= 50) {
        feedbackMessage = "👍 Good job! Try to support local businesses even more!";
    } else {
        feedbackMessage = "🔴 Consider making more local choices next time!";
    }

    document.getElementById("feedback").textContent = feedbackMessage;
}
