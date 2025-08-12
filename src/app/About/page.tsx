"use client";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { HeaderF } from "@/components/layouts/HeaderF";
import { HeaderM } from "@/components/layouts/HeaderM";
import { motion } from "motion/react";

const words = ["Meet", "the", "Team", "Driving", "Your", "Digital", "Success"];

const About = () => {
  return (
    <>
      <nav className="">
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </motion.div>
        <div className="hidden lg:block">
          <HeaderF />
        </div>
        <div className="sticky top-0 lg:hidden">
          <HeaderM />
        </div>
      </nav>

      <section className="w-full px-4 md:px-16 lg:px-32 flex flex-col items-center justify-around gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We are Sri Lanka’s experts in creating impactful digital solutions
          that drive your growth.
        </motion.p>
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-center">
          {words.map((word, index) => (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              key={index}
              className="inline-block mr-4 mb-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="bg-white text-[#0F072C] flex flex-row items-center justify-around gap-4 px-16 py-16 rounded-bl-4xl rounded-tr-4xl">
          <div>
            <h1 className="text-5xl font-bold text-center ">
              Who <br /> We <br /> Are
            </h1>
          </div>
          <span className="text-5xl font-bold">?</span>
          <div className="w-1/2">
            <p>
              Based in Sri Lanka, we are a passionate team dedicated to
              transforming businesses through innovative digital solutions. With
              a focus on excellence and creativity, we combine cutting-edge
              technology with strategic marketing to deliver outstanding
              results.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center h-fit justify-center gap-4 px-16">
          <div className="w-1/4 bg-white text-[#0F072C] px-4 py-6 rounded-2xl">
            <h1 className="text-xl font-bold ">Growth Pation</h1>
            <p>
              Our drive is focused on helping your business achieve its growth
              potential. We are dedicated to delivering solutions that not only
              meet your immediate needs but also support your long-term success.
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center justify-around gap-2">
            <h1 className="text-4xl font-bold text-center">
              Why work with us?
            </h1>
            <div className="bg-white text-[#0F072C] px-4 py-6 rounded-2xl">
              <h1 className="text-xl font-bold">Flexible</h1>
              <p>
                We adapt our strategies and solutions to fit your unique needs
                and challenges, ensuring that we provide tailored approaches
                that work best for your business.
              </p>
            </div>
          </div>
          <div className="w-1/4 bg-white text-[#0F072C] px-4 py-6 rounded-2xl">
            <h1 className="text-xl font-bold ">Innovative</h1>
            <p>
              We leverage the latest technology and creative strategies to
              deliver cutting-edge solutions. Our commitment to innovation
              ensures that your business benefits from the most effective and
              modern approaches available.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// export const metadata: Metadata = {
//   title: "About - Revery",
//   description: "This is the about page of the revery website.",
// };

export default About;
