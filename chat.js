function sendMessage() {
    const userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() === "") return;

    const chatBox = document.getElementById("chat-box");
    const userDiv = document.createElement("div");
    userDiv.classList.add("message", "sent");
    userDiv.innerText = userMessage;
    chatBox.appendChild(userDiv);

    // You would typically send the user's message to a server for processing here.
    // For simplicity, we'll just simulate a response after a delay.
    setTimeout(function () {
        const botMessage = "I'm sorry, I can't provide income tax information in this simplified example.";
        const botDiv = document.createElement("div");
        botDiv.classList.add("message", "received");
        botDiv.innerText = botMessage;
        chatBox.appendChild(botDiv);
    }, 1000);

    document.getElementById("user-message").value = "";
}

// Define an object with predefined questions and answers
const predefinedResponses = {
    "what is income tax?": "Income tax is a tax levied on the income of individuals and businesses. It is collected by the government to fund public services.",
    "how do I file my taxes?": "To file your taxes, you can visit the official tax website or consult a tax professional.",
    "when is the tax filing deadline?": "The tax filing deadline varies by country. Check your country's tax authority website for specific dates.",
    "what are tax deductions?": "Tax deductions are expenses that you can subtract from your taxable income to reduce the amount of income subject to tax.",
    "how can I claim tax credits?": "You can claim tax credits by meeting the eligibility criteria and filling out the necessary forms during tax filing.",
    "what is the standard deduction?": "The standard deduction is a fixed amount that reduces your taxable income, and it varies by filing status and tax year.",
    "what are tax brackets?": "Tax brackets are ranges of income that are taxed at different rates. Higher income is generally taxed at a higher rate.",
    "can I e-file my taxes?": "Yes, you can e-file your taxes using tax preparation software or online services approved by your tax authority.",
    "how long should I keep my tax records?": "It's recommended to keep tax records for at least 3-7 years, depending on your country's tax laws.",
    "what is the penalty for late tax filing?": "Penalties for late tax filing vary by country and can include fines, interest, and legal action.",
};

function sendMessage() {
    const userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() === "") return;

    const chatBox = document.getElementById("chat-box");
    const userDiv = document.createElement("div");
    userDiv.classList.add("message", "sent");
    userDiv.innerText = userMessage;
    chatBox.appendChild(userDiv);

    // Check if the user's message matches a predefined question
    const lowercaseUserMessage = userMessage.toLowerCase();
    if (predefinedResponses.hasOwnProperty(lowercaseUserMessage)) {
        const botResponse = predefinedResponses[lowercaseUserMessage];
        const botDiv = document.createElement("div");
        botDiv.classList.add("message", "received");
        botDiv.innerText = botResponse;
        chatBox.appendChild(botDiv);
    } else {
        // If no predefined response matches, provide a default response
        const botMessage = "I'm sorry, I don't have the answer to that question at the moment.";
        const botDiv = document.createElement("div");
        botDiv.classList.add("message", "received");
        botDiv.innerText = botMessage;
        chatBox.appendChild(botDiv);
    }

    document.getElementById("user-message").value = "";
}
