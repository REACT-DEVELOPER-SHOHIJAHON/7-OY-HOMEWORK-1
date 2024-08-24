import React, { useState } from "react";
import { FaEnvelope, FaLock, FaBirthdayCake } from "react-icons/fa";

const Home = ({ users }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-12 bg-gray-100 min-h-screen text-gray-800">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
      Ro'yxatdan o'tgan foydalanuvchilar
      </h1>
      <div className="flex flex-wrap justify-center gap-12">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
              onClick={() => toggleExpand(index)}
              role="button"
              tabIndex={0}
              aria-expanded={expandedIndex === index}
              aria-controls={`user-${index}`}
            >
              <img
                src={`https://via.placeholder.com/400?text=User+${index + 1}`}
                alt={`Avatar of ${user.email}`}
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-gray-600 text-xl mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {user.email}
                  </h2>
                </div>
                {expandedIndex === index ? (
                  <div id={`user-${index}`} className="mt-4">
                    <div className="flex items-center mb-3">
                      <FaLock className="text-gray-600 text-lg mr-3" />
                      <p className="text-sm">
                        <span className="font-medium text-gray-600">
                          Password:
                        </span>{" "}
                        {user.password}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaBirthdayCake className="text-gray-600 text-lg mr-3" />
                      <p className="text-sm">
                        <span className="font-medium text-gray-600">Age:</span>{" "}
                        {user.age}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center mt-4">
                    <FaLock className="text-gray-600 text-lg mr-3" />
                    <p className="text-sm text-gray-600">
                      Click to reveal password
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-xl">
            No users registered yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
