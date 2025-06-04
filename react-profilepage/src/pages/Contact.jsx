import React from 'react';

const Contact = () => {
  return (
    <>
      <header className="fade-in text-center mb-3">
        <h1 className="hover-glow">Contact Me</h1>
        <p className="hover-glow">I'd love to hear from you!</p>
      </header>
      <div className="contact-container rounded-lg shadow-lg p-3 hover-glow transition-all">
        <h1 className="text-gradient mb-2">Let’s Talk 👋</h1>
        <p className="mb-3 hover-glow">Have a project, idea or just want to say hi? I’d love to hear from you!</p>
        <div className="contact-form">
          <div className="contact-info hover-glow">
            <p>Email: <a href="mailto:midejayeoba1@gmail.com" className="hover-glow">midejayeoba1@gmail.com</a></p>
            <p>Phone: <a href="tel:+2349067333517" className="hover-glow">+234 906 733 3517</a></p>
            <p>Location: <a href="https://www.google.com/maps/place/Akure,+Ondo,+Nigeria" target="_blank" rel="noopener noreferrer" className="hover-glow">Akure, Ondo, Nigeria</a></p>
          </div>
          <form action="mailto:midejayeoba1@gmail.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Your Full Name" required className="rounded-lg p-2 transition-all focus:ring-2 focus:ring-indigo-500" />
            <input type="email" name="email" placeholder="Your Email Address" required className="rounded-lg p-2 transition-all focus:ring-2 focus:ring-indigo-500" />
            <textarea name="message" placeholder="Your Message Here..." required className="rounded-lg p-2 transition-all focus:ring-2 focus:ring-indigo-500"></textarea>
            <button type="submit" className="rounded-lg bg-indigo-700 hover:bg-indigo-600 transition-all p-3 mt-3 shadow-lg hover-scale">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
