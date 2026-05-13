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
    <div id="contact" className="  flex gap-8 justify-center">
        <div className="bg-gray-500 backdrop-blur-lg border border-black/20 p-8 rounded-3xl shadow-2xl w-full max-w-md text-white">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Contact Me
        </h1>

        <ul className="space-y-5 text-lg">

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <a href="mailto:mirzagolamhafiz9@gmail.com" className="text-black hover:text-blue-500 transition duration-300">
              mirzagolamhafiz9@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaPhone className="text-green-400 text-2xl" />
            <a href="tel:+8801767684036" className="text-black hover:text-green-500 transition duration-300">
              +8801767684036
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaLinkedin className="text-blue-400 text-2xl" />
            <a
              href="https://www.linkedin.com/in/golam-hafiz-74038939a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              linkedin.com/in/golam-hafiz-74038939a
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaGithub className="text-gray-300 text-2xl" />
            <a
              href="https://github.com/mirzagolamhafiz9-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              github.com/mirzagolamhafiz9-hub
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaFacebook className="text-blue-500 text-2xl" />
            <a
              href="https://facebook.com/mirzagolamhafiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 transition duration-300"
            >
              facebook.com/mirzagolamhafiz
            </a>
          </li>

          <li className="flex items-center gap-4 hover:translate-x-2 transition duration-300">
            <FaLocationDot className="text-red-400 text-2xl" />
            <span className="text-black hover:text-red-500 transition duration-300 ">Dhaka, Bangladesh</span>
          </li>

        </ul>
      </div>
        
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-500 p-8 rounded-2xl w-full max-w-lg"
      >
        <h1 className="text-3xl text-white font-bold mb-6">
          Contact Me
        </h1>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 mb-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          rows="4"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}