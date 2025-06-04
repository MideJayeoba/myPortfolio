import React from 'react';
import placeholder2 from '../assets/placeholder2.png';

const New = () => {
  return (
    <>
      <nav className="rounded-lg shadow-lg p-3 bg-primary transition-all hover:bg-accent">
        <ul className="flex gap-6 justify-center text-light font-semibold">
          <li className="hover-scale hover-glow cursor-pointer">Home</li>
          <li className="hover-scale hover-glow cursor-pointer">About Me</li>
          <li className="hover-scale hover-glow cursor-pointer">Contact Me</li>
        </ul>
      </nav>
      <section className="p-4 rounded-lg shadow-lg transition-all hover-glow">
        <img className="rounded-lg shadow-lg hover-scale transition-all" src={placeholder2} alt="Mide wearing a white native attire" />
        <h1 className="text-gradient mt-3 mb-2 hover-glow">Bio about myself</h1>
        <p className="mb-3 hover-glow">
          Hi, I’m Mide Jayeoba — a full-stack developer and Computer Science student at FUTA. I build apps with Python, Django, and a love for problem-solving. Currently, I’m working on an audiobook web app combining AI and text-to-speech.
          As the PRO of ACOMS, I engage the community with strategic announcements and creativity. I also teach and compose music on the acoustic guitar, blending art and logic.
          My mantra? Build, break, learn, and improve. Let’s create something amazing!
        </p>
      </section>

      <section className="p-4 rounded-lg shadow-lg transition-all hover-glow">
        <h2 className="text-gradient mb-2">Hobbies</h2>
        <ul>
          <h3 className="mb-1">my core hobbies</h3>
          <ol className="mb-3">
            <li>Playing the guitar</li>
            <li>Reading books</li>
            <li>Listening to music</li>
            <li>Playing video games</li>
          </ol>
          <h3 className="mb-1">Other interests</h3>
          <li>Cooking</li>
          <li>Traveling</li>
          <li>Photography</li>
          <li>Writing</li>
        </ul>
      </section>

      <footer className="rounded-lg shadow-lg p-3 bg-footer text-light text-center transition-all hover:bg-accent">
        <p>
          &copy; 2025 Mide Jayeoba. All rights reserved.{' '}
          <a href="mailto:midejayeoba1@gmail.com" className="hover-glow">Email me: midejayeoba1@gmail.com</a>{' '}
          <a href="tel:+2349067333517" className="hover-glow">Call me</a>{' '}
        </p>
      </footer>
    </>
  );
};

export default New;
