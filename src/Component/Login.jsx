import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
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

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Login</button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          <p className="mt-2">Don't have an account? <a href="src/Component/CreateAcc.jsx" className="text-blue-500 hover:underline">Create Account</a></p>
        </div>
      </div>
    </div>
  );
}
