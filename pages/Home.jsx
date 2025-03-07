import React from 'react';
import AdmissionForm from '../components/AdmissionForm';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Drive into Your Future with Vignan University!</h1>
        <p>Unlock endless possibilities in science, technology, and management.</p>
      </header>

      <section id="form">
        <AdmissionForm />
      </section>
    </div>
  );
};

export default Home;
