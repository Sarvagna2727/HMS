import React, { useState } from 'react';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState(['Hello! How can I assist you today?']);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      setMessages((prevMessages) => [...prevMessages, `You: ${userMessage}`]);

      // Send the message to the backend (API)
      try {
        const response = await fetch('/chatbot/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, `Bot: ${data.response}`]);
        setUserMessage(''); // Clear input field
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatbotComponent;
