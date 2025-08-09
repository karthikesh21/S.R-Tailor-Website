function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Note: The toggleMenu function was in your original script but 'menu' was not in the HTML.
// I've kept it in case you want to add a hamburger menu later.
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu) { // Check if menu exists
    menu.classList.toggle('hidden');
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('chat-toggle');
  const chatContainer = document.getElementById('chat-container');
  const chatClose = document.getElementById('chat-close');
  const chatBox = document.getElementById('chat-box');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  // Function to add a message to the chat box
  function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Function to get a response from the bot
  function getBotResponse(userInput) {
    const lcInput = userInput.toLowerCase();

    if (lcInput.includes('hello') || lcInput.includes('hi')) {
      return "Hello! Welcome to S.R Tailors. How can I help you today? You can ask about our pricing, designs, or how to book an appointment.";
    } else if (lcInput.includes('pricing') || lcInput.includes('price') || lcInput.includes('cost')) {
      return "Our pricing is as follows:\n- Shirt Stitching: ₹699\n- Pant Stitching: ₹899\n- Shirt + Pant Combo: ₹1499";
    } else if (lcInput.includes('design') || lcInput.includes('service') || lcInput.includes('shirt') || lcInput.includes('pant')) {
      return "We create custom-fit formal shirts and pants with premium fabrics. You can see examples of our work in the 'Designs' section on our website.";
    } else if (lcInput.includes('book') || lcInput.includes('appointment')) {
      return "You can book an appointment directly through the 'Book' section on our website. Just fill in your name, and preferred date and time!";
    } else if (lcInput.includes('contact') || lcInput.includes('phone') || lcInput.includes('address')) {
      return "Our contact details are in the 'Contact' section. You can also message us directly on WhatsApp using the green icon at the bottom right of the page.";
    } else if (lcInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help with?";
    } else {
      return "I'm sorry, I didn't quite understand. Please ask about 'pricing', 'designs', 'booking', or 'contact'.";
    }
  }

  // Handle sending a message
  function handleSendMessage() {
    const userInput = chatInput.value.trim();
    if (userInput === '') return;

    addMessage(userInput, 'user');
    chatInput.value = '';

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      addMessage(botResponse, 'bot');
    }, 1000);
  }

  // Event Listeners
  chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('hidden');
    // Add a welcome message if the chat is opened and empty
    if (!chatContainer.classList.contains('hidden') && chatBox.children.length === 0) {
      setTimeout(() => {
         addMessage("Hello! I'm the S.R Tailors bot. How can I assist you?", 'bot');
      }, 500);
    }
  });

  chatClose.addEventListener('click', () => {
    chatContainer.classList.add('hidden');
  });

  chatSend.addEventListener('click', handleSendMessage);

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  });
});
// --- CHATBOT SCRIPT END ---

