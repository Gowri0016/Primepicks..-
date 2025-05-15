import React, { useState } from 'react';

export default function CreateAcc() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(email)) newErrors.email = 'Invalid email format';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Account Created', { username, email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded" />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border rounded" />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Create Account</button>
        </form>
      </div>
    </div>
  );
}