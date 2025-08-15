"use client";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { HeaderF } from "@/components/layouts/HeaderF";
import HeaderM from "@/components/layouts/HeaderM";
import { motion } from "motion/react";

const PrivacyPolicy = () => {
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

      <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-h-max px-8 md:px-16 lg:px-32 py-8 flex flex-col  justify-around gap-8 bg-white text-[#0F072C]">
        <h1 className="text-3xl font-bold text-center">
          Privacy Policy for Revery
        </h1>
        <div className="flex flex-col items-start justify-center gap-4">
          <p>
            We always ensure that the information collected from you is
            protected at all costs. This privacy policy document that we present
            to you is relevant to this website and we mention the various
            information that is collected and all the relevant steps that are
            taken to safeguard them.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            By providing us information through our forums, you signify your
            acceptance of our Privacy Policy. Revery is the sole owner of this
            website including all the information that you submit through it.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">
            What this privacy policy discloses
          </h1>
          <ul className="list-disc pl-8">
            <li className="">
              Information that we collect and how we manage them
            </li>
            <li>How do we collect your information?</li>
            <li>What do we do with your information?</li>
            <li>Third-party privacy policies</li>
            <li>GDPR Data Protection Rights</li>
            <li>Children’s information</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">
            Information that we collect and how we manage them
          </h1>
          <p>
            All information that is collected depends on your actions within the
            website. Your personal details such as your name, email, and contact
            number are retrieved for any future purposes when we need to contact
            you. In addition to this, any other analytical information required
            to improve Revery will be collected.
          </p>
          <p>
            We do not retain information more than it is necessary. We only
            store all information only until it is needed for the specific
            purposes it was collected for. This retention period may vary from
            different situations and requirements. Once the information passes
            the specific retention period, it will be securely disposed of.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">
            How do we collect your information?
          </h1>
          <ul className="list-disc p-4">
            <li className="font-semibold">Log files</li>
            <p>
              The information collected for Analytics through the website is
              known as ‘Log Files’. These files log user information when you
              visit Revery and track all actions done within the website. All
              hosting companies do this as a part of their hosting services’
              analytics. These log files include information such as demographic
              information of the user, the browser type, number of clicks,
              Internet Service Provider (ISP), and date with a timestamp of when
              the website was accessed. We follow a standard procedure when all
              this information is collected and it will only be used for the
              required purposes. The main purpose this information is collected
              is to analyze what the user does to improve the user experience of
              the website for future visitors.
            </p>
            <li className="font-semibold">Analytics</li>
            <p>
              To measure Revery Analytics we use Google Analytics. The log files
              that are collected are used by these tools to give us an idea
              about how well the website is doing and what areas could improve
              for future visitors. Such information is valuable for Revery to
              make sure all our visitors have a seamless experience within the
              website. The information collected is always protected in a
              standardized manner as both the third-party integrations and
              Code94 Labs follow all policies to protect them.
            </p>
            <li className="font-semibold">Cookies</li>
            <p>
              Cookies, also known as browser cookies, are small encrypted text
              files located in the browser directories. These files help web
              developers to navigate within a website efficiently to help
              perform certain functions. Revery does not use any cookies to get
              information from our users but as we use third-party integrations
              there can be instances where you would have to accept any cookies.
              Cookies are created when a user’s browser loads a particular
              website and the user information is stored in these to identify
              regular visitors to provide a customized experience. In addition
              to this, cookies regulate how ads, widgets, and other elements
              function on a website.
            </p>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">
            How do we collect your information?
          </h1>
          <p>
            Revery does not have any access or control over the cookies that are
            used by the third-party integrations. As we do not have any control,
            we kindly request you to refer to the respective policies of these
            third-party sources as it may include you about how their procedures
            take place. In addition to this, if needed, they too will provide
            instructions on how to opt-out from certain options.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">
            GDPR - General Data Protection Regulation
          </h1>
          <p>
            These data protection regulations allow any individual to have
            easier access to the data that is collected and helps to manage
            their own information. According to these regulations, any user has
            the right to request to access, update and remove their personal
            information when needed. The full GDPR rights for individuals
            includes 7 regulations about the information that is collected,
          </p>
          <ul className="list-disc pl-4">
            <li>
              Must be processed lawfully, fairly, and in a transparent manner.
            </li>
            <li>
              Must be collected for only specified, explicit, and legitimate
              purposes.
            </li>
            <li>Must always be the adequate amount that is needed.</li>
            <li>Must be accurate and up to date.</li>
            <li>Must not be kept any longer than necessary.</li>
            <li>
              Must be processed in a manner that ensures the security of
              personal data.
            </li>
          </ul>
          <p>
            If you have a request to make to Code94 Labs regarding any of these
            regulations, please contact us at revery@gmail.com We will respond
            to you within one month of clarification of your matter. More
            information about the GDPR Rights can be accessible
            through https://gdpr-info.eu/
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">Children’s information</h1>
          <p>
            One of the main concerns at Code94 Labs is protection for children
            while using the internet. While we encourage parents to acknowledge
            and guide childrens’ activities on the internet, Code94 Labs do not
            knowingly collect any personally identifiable information from
            anyone under the age of 13. If we become aware that we have
            collected Personal Data from anyone under the age of 13 without
            verification of parental consent, we take steps to remove that
            information from our servers
          </p>
          <p>
            As we need to rely on consent as a legal basis for processing your
            information, a child would require consent from a parent. Therefore
            we may require parent’s consent before we collect and use children’s
            information.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-2xl font-bold">Contact us</h1>
          <p>
            If you have any questions about Revery&apos;s privacy policy, please
            do not hesitate to contact us through revery@gmail.com We are open
            to any suggestions that you have!
          </p>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
