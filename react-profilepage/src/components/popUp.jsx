import React, { useEffect } from 'react';
import '../pop.css';

export default function PopUp({ isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      // Prevent background scrolling when popUp is visible
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className='overlayStyle' role="dialog" aria-modal="true">
      <div className='modalStyle'>
        <button
          onClick={onClose}
          style={{
            color: '#4B5563',
            fontSize: '2rem',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Close form"
        >
          &times;
        </button>
        <form action="mailto:midejayeoba1@gmail.com" method="post" encType="text/plain">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="rounded-lg p-2 transition-all focus:ring-2 focus:ring-indigo-500 w-full mb-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="rounded-lg p-2 transition-all focus:ring-2 focus:ring-indigo-500 w-full mb-3"
          />
          <textarea
            name="message"
            placeholder="Your Message Here..."
            required
            className="rounded-lg p-2 transition-all focus:ring-2 focus:ring-indigo-500 w-full mb-3"
          ></textarea>
          <button
            type="submit"
            className="rounded-lg bg-indigo-700 hover:bg-indigo-600 transition-all p-3 mt-3 shadow-lg hover-scale w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
