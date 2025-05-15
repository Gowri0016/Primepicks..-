import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 relative">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full mb-3 p-2 border rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full mb-3 p-2 border rounded" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" className="w-full mb-3 p-2 border rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full mb-3 p-2 border rounded" rows="4" required></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Message</button>
      </form>

      <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
        <MessageSquare size={24} />
      </button>

      {chatOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Chat with Us</h3>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}> <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>{msg.text}</span></div>
            ))}
          </div>
          <div className="flex p-2">
            <input type="text" className="flex-1 border rounded-lg p-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
            <button onClick={handleSend} className="ml-2 bg-blue-500 text-white rounded-lg p-2"><Send size={20} /></button>
          </div>
        </div>
      )}
    </div>
  );
}
