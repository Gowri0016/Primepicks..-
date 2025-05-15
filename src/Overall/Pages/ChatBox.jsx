import React, { useState } from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { IoIosChatbubbles } from 'react-icons/io'; // New AI icon

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: 'AI: How can I assist you today?', sender: 'ai' }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header with a unique AI icon */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-t-lg">
        <h2 className="text-lg font-semibold">Chat with AI</h2>
        <IoIosChatbubbles className="h-8 w-8 text-white" />
      </div>
      
      {/* Message container */}
      <div className="p-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input field and send button */}
      <div className="flex p-4 border-t-2 border-gray-200">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button 
          onClick={handleSend} 
          className="ml-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
