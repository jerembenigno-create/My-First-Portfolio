// Function para i-toggle (Buksan/Isara) ang Chatbot iframe
function toggleChatbotFrame() {
    const iframe = document.getElementById('chatbotIframe');
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
    }
}

// Function para sa mga "Get a Quote" or "Submit Details" buttons sa main page
function openChatbotForInquiry() {
    const iframe = document.getElementById('chatbotIframe');
    iframe.style.display = 'block';
}