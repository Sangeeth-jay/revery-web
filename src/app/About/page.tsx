"use client";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { HeaderF } from "@/components/layouts/HeaderF";
import { HeaderM } from "@/components/layouts/HeaderM";
import BigButton from "@/components/ui/bigButton";
import { motion } from "motion/react";
import { useState } from "react";

const words = ["Meet", "the", "Team", "Driving", "Your", "Digital", "Success"];
const words2 = ["Who", "We", "Are"];
const words3 = [
  "You’ve",
  "come",
  "this",
  "far.",
  "Enough",
  "about",
  "us.",
  "Tell",
  "us",
  "about",
  "your",
  "project!",
];

const About = () => {
  const [showHeading1, setShowHeading1] = useState(false);
  const [showHeading2, setShowHeading2] = useState(false);

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

      <section className="w-full max-h-max px-8 md:px-16 lg:px-32 flex flex-col items-center justify-around gap-8">
        <div className="h-screen flex flex-col items-center justify-center gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
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
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5, scaleY: 0 }}
            animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
            transition={{ delay: words.length * 0.2, duration: 0.5 }}
            onAnimationComplete={() => setShowHeading1(true)}
            className="bg-white text-[#0F072C] w-5/6 lg:w-10/12 gap-4 px-16 py-8 rounded-bl-4xl rounded-tr-4xl"
          >
            {showHeading1 && (
              <div className="flex flex-col lg:flex-row items-center justify-around">
                {" "}
                <div>
                  <motion.h1 className="text-5xl font-bold text-center flex lg:flex-col">
                    {words2.map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: words2.length * 0.2, duration: 0.5 }}
                  className="text-5xl font-bold"
                >
                  ?
                </motion.span>
                <div className="w-full lg:w-1/2 text-center md:text-center lg:text-left">
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: words2.length * 0.2, duration: 0.5 }}
                  >
                    Based in Sri Lanka, we are a passionate team dedicated to
                    transforming businesses through innovative digital
                    solutions. With a focus on excellence and creativity, we
                    combine cutting-edge technology with strategic marketing to
                    deliver outstanding results.
                  </motion.p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          onAnimationComplete={() => setShowHeading2(true)}
          className="lg:h-screen w-full flex flex-col items-center justify-center gap-8 pb-4"
        >
          <div className="md:flex lg:flex flex-col md:flex-row lg:flex-row items-center lg:h-80 justify-center gap-4 lg:px-16 hidden">
            {showHeading2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/3 lg:w-1/4 h-full bg-white text-[#0F072C] px-4 py-6 rounded-2xl"
              >
                <h1 className="text-xl font-bold ">Growth Pation</h1>
                <p>
                  Our drive is focused on helping your business achieve its
                  growth potential. We are dedicated to delivering solutions
                  that not only meet your immediate needs but also support your
                  long-term success.
                </p>
              </motion.div>
            )}
            {showHeading2 && (
              <div className="md:w-1/3 lg:w-1/3 h-full flex flex-col items-center justify-between ">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl  w-full font-bold text-center mt-4"
                >
                  Why work with us?
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white text-[#0F072C] px-4 py-6 rounded-2xl"
                >
                  <h1 className="text-xl font-bold">Flexible</h1>
                  <p>
                    We adapt our strategies and solutions to fit your unique
                    needs and challenges, ensuring that we provide tailored
                    approaches that work best for your business.
                  </p>
                </motion.div>
              </div>
            )}
            {showHeading2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="md:w-1/3 lg:w-1/4 h-full bg-white text-[#0F072C] px-4 py-6 rounded-2xl"
              >
                <h1 className="text-xl font-bold ">Innovative</h1>
                <p>
                  We leverage the latest technology and creative strategies to
                  deliver cutting-edge solutions. Our commitment to innovation
                  ensures that your business benefits from the most effective
                  and modern approaches available.
                </p>
              </motion.div>
            )}
          </div>

          {/*Mobile */}

          <div className="md:hidden lg:hidden flex flex-col items-center justify-center gap-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl  w-full font-bold text-center mt-4"
            >
              Why work with us?
            </motion.h1>

            <div className="flex flex-col items-center justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white text-[#0F072C] px-4 py-6 rounded-2xl text-center md:hidden lg:hidden"
              >
                <h1 className="text-xl font-bold">Flexible</h1>
                <p>
                  We adapt our strategies and solutions to fit your unique needs
                  and challenges, ensuring that we provide tailored approaches
                  that work best for your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white text-[#0F072C] px-4 py-6 rounded-2xl text-center md:hidden lg:hidden"
              >
                <h1 className="text-xl font-bold">Innovative</h1>
                <p>
                  We leverage the latest technology and creative strategies to
                  deliver cutting-edge solutions. Our commitment to innovation
                  ensures that your business benefits from the most effective
                  and modern approaches available.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="bg-white text-[#0F072C] px-4 py-6 rounded-2xl text-center md:hidden lg:hidden"
              >
                <h1 className="text-xl font-bold">Growth Pation</h1>
                <p>
                  Our drive is focused on helping your business achieve its
                  growth potential. We are dedicated to delivering solutions
                  that not only meet your immediate needs but also support your
                  long-term success.
                </p>
              </motion.div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center">
            {words3.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <BigButton />
        </motion.div>
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
