function calculateScore() {
    let localAccommodation = parseFloat(document.getElementById("local-accommodation").value) || 0;
    let localFood = parseFloat(document.getElementById("local-food").value) || 0;
    let localTransport = parseFloat(document.getElementById("local-transport").value) || 0;
    let localTours = parseFloat(document.getElementById("local-tours").value) || 0;
    let localShopping = parseFloat(document.getElementById("local-shopping").value) || 0;
    let totalSpent = parseFloat(document.getElementById("total-spent").value) || 0;

    if (totalSpent === 0) {
        alert("Total spent must be greater than 0.");
        return;
    }

    let weightedTotal = (localAccommodation * 0.3) + 
                        (localFood * 0.25) + 
                        (localTransport * 0.15) + 
                        (localTours * 0.2) + 
                        (localShopping * 0.1);

    let supportScore = (weightedTotal / totalSpent) * 100;
    supportScore = Math.round(supportScore);

    document.getElementById("score").textContent = supportScore;

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
