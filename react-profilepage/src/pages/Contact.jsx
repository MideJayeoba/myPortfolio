import React, { useState } from 'react';
import PopUp from '../components/popUp';

const Contact = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <>
      <header className="fade-in text-center mb-3">
        <h1 className="hover-glow">Contact Me</h1>
        <p className="hover-glow">I'd love to hear from you!</p>
      </header>
      <div className="contact-container rounded-lg shadow-lg p-3 hover-glow transition-all">
        <h1 className="text-gradient mb-2">Let’s Talk 👋</h1>
        <p className="mb-3 hover-glow">Have a project, idea or just want to say hi? I’d love to hear from you!</p>
        <div className="contact-info hover-glow mb-4">
          <p>Email: <a href="mailto:midejayeoba1@gmail.com" className="hover-glow">midejayeoba1@gmail.com</a></p>
          <p>Phone: <a href="tel:+2349067333517" className="hover-glow">+234 906 733 3517</a></p>
          <p>Location: <a href="https://www.google.com/maps/place/Akure,+Ondo,+Nigeria" target="_blank" rel="noopener noreferrer" className="hover-glow">Akure, Ondo, Nigeria</a></p>
        </div>
        <button
          onClick={togglePopUp}
          className="rounded-lg bg-indigo-700 hover:bg-indigo-600 transition-all p-3 mt-3 shadow-lg hover-scale"
        >
          Message now
        </button>
        <PopUp isVisible={isPopUpVisible} onClose={togglePopUp} />
      </div>
    </>
  );
};

export default Contact;
