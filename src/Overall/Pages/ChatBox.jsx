import React, { useState } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ResponsiveCustomerSupportChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: 'Hello! How can I assist you today?', sender: 'ai' }]);
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chat Toggle Button */}
      <button onClick={() => setChatOpen(!chatOpen)} className="bg-blue-500 text-white p-3 rounded-full shadow-2xl hover:bg-blue-600 transition-transform transform hover:scale-105">
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </button>

      {/* Chatbox */}
      {chatOpen && (
        <div className="mt-4 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-transform transform duration-300">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-t-3xl">
            <h2 className="text-lg font-semibold">Customer Support</h2>
            <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={() => setChatOpen(false)} />
          </div>

          <div className="p-4 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg shadow-md ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex p-3 bg-gray-100 rounded-b-3xl">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="ml-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}