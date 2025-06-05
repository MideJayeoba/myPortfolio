import React from 'react';
import { useState } from 'react';
import menative from '../assets/menative.jpg';
import PopUp from '../components/popUp';

const Home = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };
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
        <button
          style={{
            padding: '0rem 1rem',
            marginTop: '1rem',
            alignSelf: 'center',
          }}
          className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2"
          onClick={togglePopUp}
        >
          leave a message
        </button>
        <PopUp isVisible={isPopUpVisible} onClose={togglePopUp} />
      </section>
    </>
  );
};

export default Home;
