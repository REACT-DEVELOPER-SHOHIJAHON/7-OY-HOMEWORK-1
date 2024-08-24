import React, { useState } from "react";
import { FaEnvelope, FaLock, FaBirthdayCake } from "react-icons/fa";

const Register = ({ addUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password, age };
    addUser(newUser);
    setEmail("");
    setPassword("");
    setAge("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border border-gray-200 rounded-lg shadow-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
          Register
        </h2>

        <div className="mb-6 relative">
          <label
            className="block text-sm font-medium mb-2 text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaEnvelope className="text-gray-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-sm font-medium mb-2 text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaLock className="text-gray-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-sm font-medium mb-2 text-gray-700"
            htmlFor="age"
          >
            Age
          </label>
          <div className="relative">
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaBirthdayCake className="text-gray-500 text-xl" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
