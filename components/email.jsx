'use client'
import { useState } from 'react';

const email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSent(true);
      
        setName('');
        setEmail('');
        setMessage('');
        alert("Message sent Successfully")
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setSending(false);
  };

  return (
    <div className="bg-black px-4">
      <h2 className="text-3xl text-center font-bold mb-6 text-white">Contact Us</h2>
      <form onSubmit={handleSubmit} className="sm:max-w-sm mx-auto py-12 bg-black text-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 bg-[#1F1F1F] p-3 block w-full rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 bg-[#1F1F1F] block w-full p-3 rounded-md shadow-sm sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 bg-[#1F1F1F] block w-full rounded-md shadow-sm sm:text-sm"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default email;

