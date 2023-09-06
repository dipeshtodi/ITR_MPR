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
    "what is the income tax slab for individual taxpayers in India?": "The income tax slabs for individual taxpayers in India vary depending on their age and income level. For the latest slabs, refer to the Income Tax Department's website.",
    "How is income tax calculated in India?": "Income tax in India is calculated based on a progressive tax rate system. The rates vary depending on your income level, with higher income being taxed at a higher rate.",
    "what is the tax treatment of income from a fixed deposit in India?": "Interest income from fixed deposits in India is taxable. It is added to your total income and taxed at your applicable income tax slab rate.",
    "how can I avail tax benefits for home loan repayment in India?": "You can claim deductions on the principal amount and interest paid on your home loan under Sections 80C and 24(b) of the Income Tax Act, respectively.",
    "what are the tax implications of investing in the stock market in India?": "Profits from stock market investments in India are subject to capital gains tax. The tax rate depends on the holding period and type of asset.",
    "what is the tax treatment of income from rental property in India?": "Income from rental property is taxable in India. You can claim deductions for expenses such as property tax, maintenance, and interest on home loans.",
    "how can I file an income tax return for a business in India?": "Businesses in India can file income tax returns using the appropriate ITR form based on their business structure. Consult a tax professional for guidance.",
    "what is a Permanent Account Number (PAN) and why is it necessary for income tax filing in India?": "A PAN is a unique 10-character alphanumeric identifier issued by the Income Tax Department. It is essential for all financial transactions and income tax filing in India.",
    "how can I avoid double taxation on my foreign income in India?": "You can avoid double taxation by utilizing the Double Taxation Avoidance Agreement (DTAA) if India has a treaty with the country where you earned income.",
    "what is the tax treatment of gifts received by an individual in India?": "Gifts received in India may be subject to tax if they exceed a certain limit. However, there are exemptions for gifts from specified relatives.",
    "what is the tax treatment of agricultural income in India?": "Agricultural income is generally exempt from income tax in India. However, it is important to maintain proper records to establish its nature.",
    "how can I check my tax refund status in India?": "You can check your tax refund status on the Income Tax Department's official website by providing your PAN and assessment year.",
    "what is the tax treatment of income from savings bank accounts in India?": "Interest income from savings bank accounts is taxable but qualifies for a deduction under Section 80TTA up to a specified limit.",
    "what is Form 26AS and why is it important for income tax filing in India?": "Form 26AS is a consolidated statement of your tax-related financial transactions, including TDS, TCS, and advance tax. It is crucial for verifying your tax liability.",
    "can I file an income tax return for a deceased person in India?": "Yes, you can file an income tax return on behalf of a deceased person. You'll need to obtain a legal heir certificate and follow the necessary procedures.",
    "what is the tax treatment of income earned by non-resident Indians (NRIs) in India?": "Income earned by NRIs in India is subject to different tax rules. Consult a tax expert for guidance on NRI taxation.",
    "what are the tax-saving options available under Section 80D for health insurance premiums in India?": "You can claim deductions for health insurance premiums paid for yourself, your spouse, children, and parents under Section 80D.",
    "how can I rectify errors in my income tax return after filing it in India?": "You can rectify errors by filing a revised return using the online portal within the specified time frame.",
    "what is the tax treatment of income from capital gains in India?": "Income from capital gains is categorized as short-term or long-term, and the tax rates vary depending on the holding period and asset type.",
    "how can I pay my income tax dues online in India?": "You can pay income tax online through the Income Tax Department's e-payment portal or authorized banks.",
    "what is the presumptive taxation scheme for small businesses in India?": "The presumptive taxation scheme is designed for small businesses with turnover below a certain threshold. It offers a simplified tax calculation method.",
    "what is the tax treatment of income from house property in India?": "Income from house property, including rental income, is taxable. You can claim deductions for home loan interest and other expenses.",
    "what is Form 16 and why is it important for income tax filing in India?": "Form 16 is a certificate issued by your employer that provides details of your salary, tax deductions, and TDS. It is essential for filing your tax return.",
    "what are the tax benefits of investing in the National Pension System (NPS) in India?": "Investing in NPS provides tax benefits under Section 80CCD(1), 80CCD(2), and 80CCD(1B) of the Income Tax Act.",
    "how can I claim a refund for excess TDS deducted from my salary in India?": "You can claim a refund for excess TDS by filing an income tax return. Ensure that your Form 26AS reflects the excess TDS deducted, and you can claim it as a refund while filing your tax return.",
};


function sendMessage() {
    const userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() === "") return;

    const chatBox = document.getElementById("chat-box");
    const userDiv = document.createElement("div");
    userDiv.classList.add("message", "sent");
    userDiv.innerText = userMessage;
    chatBox.appendChild(userDiv);

    // Check if the user's message matches a predefined question (lowercase both user input and predefined question)
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
