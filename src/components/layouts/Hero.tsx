import { FC } from "react";

type HeroProps = unknown;

const Hero: FC<HeroProps> = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center px-32">
      <div className="flex flex-col gap-4">
        <p className="text-8xl font-bold text-center">
          Crafting Unique Digital Experiences and Driving Your Business <br />
          <span className="bg-gradient-to-r from-orange-700 to-blue-600 bg-clip-text text-transparent">Growth</span>
        </p>
        <h1 className="text-xl text-center">Revery provides everything from expert advice to dedicated staffing, taking your <br /> business from idea to implementation.</h1>
      </div>
    </section>
  );
};

export default Hero;
