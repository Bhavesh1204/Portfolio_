import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to backend
      await axios.post("http://localhost:5000/api/contact", { name, contactNumber });

      alert(`Thank you for reaching out, ${name}! Your form has been submitted.`);
      setName("");
      setContactNumber("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')]">
      <div className="h-full bg-white/50">
        <div className="max-w-lg mx-auto p-6 text-center">
          <h1 className="text-4xl font-bold text-black mb-6">Contact Me</h1>

          <form onSubmit={handleSubmit} className="space-y-6 border-2 border-white-300 rounded-lg p-6">
            <div>
              <label className="block text-lg text-black" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-3 border-2 border-white-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-black" htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="mt-2 p-3 border-2 border-white-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button type="submit" className="w-full p-3 bg-pink-300 text-white rounded hover:bg-pink-400 transition-colors">
              Submit
            </button>
          </form>

          {isSubmitted && <p className="text-lg text-green-600 mt-6">Your message has been sent!</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
