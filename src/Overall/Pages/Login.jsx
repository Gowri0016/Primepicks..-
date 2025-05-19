import React, { useState } from 'react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function LoginWithChat3D() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(email)) newErrors.email = 'Invalid email format';

    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

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
      }, 700);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md transition-transform duration-300 transform-gpu hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center">Secure Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-indigo-400" />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-indigo-400" />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-xl shadow-xl transform hover:scale-105 transition">Login</button>
        </form>
      </div>

      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-4 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </button>

      {chatOpen && (
        <div className="fixed bottom-20 right-4 bg-white p-6 rounded-xl shadow-xl w-80">
          <h3 className="text-xl font-semibold mb-4">Chat Support</h3>
          <div className="h-40 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <p key={index} className={`${msg.sender === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-700'}`}>{msg.text}</p>
            ))}
          </div>
          <div className="flex">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-2 border rounded-l-md" />
            <button onClick={handleSend} className="bg-indigo-600 text-white px-4 rounded-r-md">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}