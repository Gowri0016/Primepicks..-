import React, { useState } from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function LoginWithChat() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted', { email, password });
    }
  };

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Login Form */}
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-8">
        <div className="flex justify-center mb-4">
          <img src="https://via.placeholder.com/150" alt="Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          <p className="mt-2">Don't have an account? <a href="CreateAcc" className="text-blue-500 hover:underline">Create Account</a></p>
        </div>
      </div>

      {/* Chatbox Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </button>

      {/* Chatbox Popup */}
      {chatOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
            <h2 className="text-lg font-semibold">Chat with Us</h2>
            <ChatBubbleLeftIcon className="h-6 w-6" />
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex p-4">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend} className="ml-2 bg-blue-500 text-white rounded-lg p-2">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
