document.getElementById('sendBtn').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    analyzeSentiment(userInput);
});

function analyzeSentiment(text) {
    // Simulate API call to Voiceflow for sentiment analysis
    // Replace this with the actual API call
    const sentiment = Math.random() > 0.5 ? 'positive' : 'negative';
    displayResponse(sentiment);
}

function displayResponse(sentiment) {
    const avatar = document.getElementById('avatar');
    const responseBubble = document.getElementById('responseBubble');
    
    if (sentiment === 'positive') {
        avatar.src = 'happy-avatar.png';
        responseBubble.textContent = 'Thank you for your positive feedback!';
    } else {
        avatar.src = 'sad-avatar.png';
        responseBubble.textContent = 'We appreciate your feedback and will work to improve.';
    }

    responseBubble.style.display = 'block';
}
