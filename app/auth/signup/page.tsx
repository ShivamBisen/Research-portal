'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  // State to handle input values
  const [name, setName] = useState('');
  const [prefix, setPrefix] = useState('Mr.');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [year,setYear] = useState('')
  const [education, setEducation] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword || !education) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // If validation passes, clear errors and proceed (you can add actual signup logic here)
    setError('');
    console.log('User signed up:', { name, prefix, email, password, role, education });

    // Redirect to another page (e.g., dashboard or login)
    router.push('/login');
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>

        {/* Display error message if any */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Prefix and Name */}
          <div className="mb-4 flex gap-2">
            <div>
              <label htmlFor="prefix" className="block text-sm font-medium text-gray-700">
                Prefix
              </label>
              <select
                id="prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full mt-2 p-3 border rounded-md border-gray-300"
              >
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
                <option value="Assi Prof.">Assi Prof.</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-3 border rounded-md border-gray-300"
                required
              />
            </div>
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md border-gray-300"
            >
              <option value="student">Student</option>
              <option value="professor">Professor</option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder='use institute email (.iitkgp.ac.in)'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md border-gray-300"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md border-gray-300"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 p-3 border rounded-md border-gray-300"
              required
            />
          </div>

          <div className="mb-4">
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                id="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full mt-2 p-3 border rounded-md border-gray-300"
                placeholder="e.g. Computer Science, Biology"
                required
              />
            </div>

          {/* Education field (only for student) */}
          {role === 'student' && (
            <div className="mb-4">
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                Education Level
              </label>
              <input
                type="text"
                id="education"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full mt-2 p-3 border rounded-md border-gray-300"
                placeholder="e.g. Bachelors, Masters"
                required
              />
            </div>
            
          )}
          {role === 'student' && (
            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                type="year"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full mt-2 p-3 border rounded-md border-gray-300"
                placeholder="e.g. Bachelors, Masters"
                required
              />
            </div>
            
          )}

          {/* Professor Specific Fields */}
          
            
        

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
