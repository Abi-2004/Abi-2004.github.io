// Get references to the message input and send button
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

// Get a reference to the chat container
const chat = document.querySelector(".chat");

// Function to add a new message to the chat
function addMessage(text, isSent) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isSent ? "sent" : "received"}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chat.appendChild(messageDiv);
    
    // Scroll to the bottom to show the latest message
    chat.scrollTop = chat.scrollHeight;
}

// Event listener for the send button
sendButton.addEventListener("click", function () {
    const messageText = messageInput.value.trim();
    
    if (messageText !== "") {
        addMessage(messageText, true);
        // You can send the message to the server or another user here
        messageInput.value = ""; // Clear the input field
    }
});

// Event listener for the "Enter" key
messageInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendButton.click(); // Trigger the send button click event
    }
});
