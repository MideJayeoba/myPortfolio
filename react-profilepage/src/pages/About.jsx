import React from 'react';
import mefun from '../assets/meent.jpg';

const About = () => {
  return (
    <>
      <header className="fade-in text-center mb-3">
        <h1 className="text-gradient hover-glow">Jayeoba Peace Olamide</h1>
        <p className="hover-glow">Software Engineer | Full-Stack Developer | Tech-Infused Musician</p>
        <img className="about rounded-lg shadow-lg hover-scale transition-all" src={mefun} alt="Profile Photo" />
        <div className="contact-info hover-glow">
          <p>Akure, Ondo, Nigeria | midejayeoba1@gmail.com | 09067333517</p>
        </div>
      </header>

      <div className="bigdiv rounded-lg shadow-lg p-3 hover-glow transition-all">
        <section className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I’m Jayeoba Peace Olamide, a frontend-focused software engineer based in Akure, Nigeria. I’m currently pursuing a degree in Computer Science at the Federal University of Technology, Akure (FUTA), with an expected graduation in 2026.

            My core strength lies in building responsive, user-friendly web applications using React, JavaScript/TypeScript, and Tailwind CSS. I’m particularly passionate about creating clean, maintainable interfaces that deliver solid user experiences.

            While my focus is on frontend development, I also have working experience with backend technologies such as Django and Flask, which allows me to collaborate effectively on full-stack projects when needed.

            Beyond code, I hold leadership roles as the Public Relations Officer of my faculty and the Deputy Governor of my academic level—experiences that have strengthened my communication and team collaboration skills.

            I'm actively seeking frontend or full-stack opportunities where I can learn, contribute, and grow in a dynamic development environment.
          </p>
        </section>

        <section className="container">
          <h2 className="section-title">Tech Stack</h2>
          <ul>
            <li>React / JavaScript / TypeScript</li>
            <li>HTML5 / CSS3 / Tailwind CSS</li>
            <li>Python (Django / Flask / Django REST Framework)</li>
            <li>PostgreSQL / SQLite</li>
            <li>Git & GitHub</li>
          </ul>
        </section>


        <section className="container projects">
          <h2 className="section-title">Projects</h2>
          <ul>
            <li><strong>Audiobook Web App</strong> – Converts PDFs into speech using Python & AI APIs. (Coming soon!)</li>
            <li><strong>Portfolio Website</strong> – A dynamic HTML profile that tells the world who I am.</li>
            <li><strong>ACOMS PR Automation</strong> – Automating news/announcement workflows for the student body.</li>
          </ul>
          Here are some of my works:
          <ul>
            <li><a href="https://brandfolio-rust.vercel.app/" target="_blank" rel="noopener noreferrer">A reponsive clone of the BrandFolio website</a></li>
            <li><a href="https://github.com/MideJayeoba/Djangolesson" target="_blank">Here is the github link to my Django project</a></li>
            <li><a href="https://profilepage-iota.vercel.app/" target="_blank" rel="noopener noreferrer">My first Built PortFolio Website</a></li>
            <li></li>
            <li></li>
          </ul>

          
        </section>

        <section className="container">
          <h2 className="section-title">Education</h2>
          <p><strong>Federal University of Technology, Akure (FUTA)</strong><br />
          B.Tech, Computer Science (Expected 2026)</p>
          <ul>
            <li>Faculty PRO (2024–present)</li>
            <li>Deputy Governor (CSC 400 level)</li>
          </ul>
        </section>

        <section className="container">
          <h2 className="section-title">Experience & Roles</h2>
          <p>Beyond code, I serve the tech community and my peers:</p>
          <ul>
            <li>Public Relations Officer – ACOMS</li>
            <li>Technical Coordinator – Student Dev Projects</li>
            <li>Team Lead – 3MTT Capstone (In Progress)</li>
          </ul>
        </section>

        <section className="container">
          <h2 className="section-title">Just for Fun 🎸</h2>
          <p>When I’m not refactoring logic or designing a backend architecture, I’m composing music, playing acoustic guitar, or organizing jam sessions. I believe music and code are both languages — and I happen to speak both fluently.</p>
        </section>
      </div>
    </>
  );
};

export default About;
