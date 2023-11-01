import React from "react";
import { SocialIcon } from "react-social-icons";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative section"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold  my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <SocialIcon
            url="https://github.com"
            target={"_blank"}
            bgColor="transparent"
            fgColor="#878c8f"
          />

          <SocialIcon
            url="https://linkedin.com"
            target={"_blank"}
            bgColor="transparent"
            fgColor="#878c8f"
          />
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-[#ADB7BE] block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#dedede] border-[#9d9d9d] dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-[#ADB7BE] block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#dedede] border-[#9d9d9d] dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-[#ADB7BE] block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#dedede] border-[#9d9d9d] dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-400  font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
