import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Agar sizga dasturlash bo'yicha turli xil web saytlar yaratish yoki
          shunga o'xshash loyiha kerak bo'lsa, biz bilan bog'laning va biz
          sizning ishingizni yengillashtiramiz!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg mb-4 text-gray-700">
          Biz bilan bog'lanishning bir necha usullari mavjud:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:gulomovshohijahon32@gmail.com"
              className="text-teal-500 hover:underline"
            >
              gulomovshohijahon32@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+998908294401"
              className="text-teal-500 hover:underline"
            >
              (+99890) 829-44-01
            </a>
          </li>
        </ul>
        <p className="text-lg text-gray-700">
          Shuningdek, bizni ijtimoiy tarmoqlarda ham so'nggi yangiliklar va
          yangiliklardan xabardor bo'lishingiz mumkin:
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors duration-300"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors duration-300"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:text-teal-700 transition-colors duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
