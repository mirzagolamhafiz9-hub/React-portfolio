import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message Sent!");
        },
        (error) => {
          alert("Failed!");
          console.log(error);
        }
      );
  };

  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row gap-8 shadow-2xl shadow-black/40"
    >
      {/* Contact Info */}
      <div className="bg-gray-500 border border-black/20 p-8 rounded-3xl shadow-2xl w-full md:w-1/2 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact Me
        </h1>

        <ul className="space-y-5 text-base md:text-lg">

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <a
              href="mailto:mirzagolamhafiz9@gmail.com"
              className="text-black hover:text-blue-500 break-all"
            >
              mirzagolamhafiz9@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaPhone className="text-green-400 text-2xl" />
            <a
              href="tel:+8801767684036"
              className="text-black hover:text-green-500"
            >
              +8801767684036
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaLinkedin className="text-blue-400 text-2xl" />
            <a
              href="https://www.linkedin.com/in/golam-hafiz-74038939a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 break-all"
            >
              LinkedIn Profile
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaGithub className="text-gray-300 text-2xl" />
            <a
              href="https://github.com/mirzagolamhafiz9-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 break-all"
            >
              GitHub Profile
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaFacebook className="text-blue-500 text-2xl" />
            <a
              href="https://facebook.com/mirzagolamhafiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 break-all"
            >
              Facebook Profile
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaLocationDot className="text-red-400 text-2xl" />
            <span className="text-black">
              Dhaka, Bangladesh
            </span>
          </li>

        </ul>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-500 p-8 rounded-3xl shadow-2xl w-full md:w-1/2"
      >
        <h1 className="text-3xl text-white font-bold mb-6 text-center">
          Send Message
        </h1>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className="w-full p-3 mb-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}