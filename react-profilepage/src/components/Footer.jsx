import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Mide Jayeoba. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://x.com/Mide_Jayeoba?t=WYi8iGFf8-oG8JXI9wISvA&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/mide-jayeoba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/MideJayeoba" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/mide_jayeoba/profilecard/?igsh=MTI4NjQzMHlva2Nweg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://wa.me/09067333517" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
