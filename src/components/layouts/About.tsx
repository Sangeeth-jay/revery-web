import React from 'react';

type HeroProps = unknown

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Revery</h1>
        <p className="hero__subtitle">Helping Business to Grow through Digital Presence</p>
      </div>
    </section>
  );
};

export default Hero;

