import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
    setFilteredUsers([...users, user]);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredUsers(users);
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = users.filter((user) =>
        user.email.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredUsers(filtered);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar
          onSearch={handleSearch}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home users={filteredUsers} />} />
            <Route path="/register" element={<Register addUser={addUser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer
          className={`py-4 mt-auto ${
            isDarkMode
              ? "bg-gray-800"
              : "bg-gradient-to-r from-teal-500 to-blue-600"
          } text-white`}
        >
          <div className="container mx-auto text-center">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
