// Define the checkAnswer function
function checkAnswer() {
    // Step 1: Declare the correct answer
    let correctAnswer = "4"; // This is the correct answer to the quiz question

    // Step 2: Retrieve the user's selected answer
    // Use document.querySelector to select the checked radio button
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Step 3: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If the answers match, display a positive feedback message
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // If the answers don't match, display an incorrect feedback message
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add an event listener to the "Submit Answer" button
// Select the button by its ID "submit-answer" and attach a click event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);