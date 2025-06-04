import React from 'react';
import menative from '../assets/menative.jpg';

const Home = () => {
  return (
    <>
      <header className="fade-in text-gradient text-center mb-3">
        <h1 className="hover-glow">Mide Jayeoba</h1>
        <p className="hover-glow">Web Developer & Musician</p>
      </header>
      <section className="home">
        <div className="slide-in-left hover-scale p-3 rounded-lg shadow-lg">
          <img
            className="imgprofile rounded-lg shadow-lg transition-all"
            src={menative}
            alt="Mide Jayeoba on a white native attire"
          />
          <h2 className="text-gradient mt-2 mb-1 hover-glow">Mide Jayeoba</h2>
          <p className="mb-3 hover-glow">Web Developer & Musician.</p>
        </div>
        <div className="profile slide-in-right p-3 rounded-lg shadow-lg hover-scale">
          <h2 className="text-gradient mb-2 hover-glow">Hello World✨😊</h2>
          <h3 className="hover-glow">Welcome to Mide Jayeoba's page</h3>
        </div>
      </section>
    </>
  );
};

export default Home;
