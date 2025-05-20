import React, { useState } from 'react';
import CreateAccPage from '../../Asset/CreateAccPage.png';
import { FcGoogle } from 'react-icons/fc';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Account Created', { username, email, password });
      // Proceed to create account...
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
    // Implement your Google Sign-In logic here
  };

  return (
    <div className="flex items-center min-h-screen bg-white">
      <img className="w-1/2 hidden md:block" src={CreateAccPage} alt="Create Account" />

      <div className="bg-white p-8 rounded w-full max-w-md mx-auto">
        <h2 className="text-3xl mb-4 text-left">Create an Account</h2>
        <p className="text-left text-gray-600 mb-6">Enter your details below</p>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border-0 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-black text-white p-2 rounded-md hover:bg-red-900 transition-colors"
          >
            Create Account
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 w-full border border-black text-black hover:text-white p-2 rounded-md hover:bg-gradient-to-r from-blue-500 to-black transition-colors"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </button>

        {/* Already have an account */}
        <p className="text-center text-xs md:text-sm mt-4">
          Already have an account?{' '}
          <a href="/Login" className="underline text-blue-500 hover:text-blue-900">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
