import { Contact } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import urlFor from "@/lib/urlFor";
type Props = {
  contact: Contact[];
};



const ContactSection = ({ contact }: Props) => {
  return (
    <>
      {contact?.map((formContact) => (
        <section
          key={formContact?._id}
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative section"
        >
          {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900 to-transparent rounded-full h-60 w-60 z-10 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}

          <div className="z-10">
            <h5 className="text-xl font-bold  my-2">
              {formContact?.formTitle}
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {" "}
              {formContact?.formShortDescription}
            </p>

            <div className="socials flex flex-row gap-4 mt-5 ">
              {formContact?.socials?.map((socialLinks) => (
                <Link
                  key={socialLinks?._id}
                  href={socialLinks?.socialIconUrl}
                  target={"_blank"}
                >
                  <Image
                    key={socialLinks?._id}
                    src={urlFor(socialLinks?.socialIconButtonIcon)
                      .width(500)
                      .height(500)
                      .url()}
                    alt={socialLinks?.socialIconName}
                    width={40}
                    height={40}
                    className="hover:scale-110 duration-300 transition-transform ease-in-out"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="z-10">
            <form
              className="flex flex-col"
              action={formContact?.url}
              method="POST"
              encType="multipart/form-data"
            >
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="text-[#ADB7BE] block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="text"
                  id="email"
                  required
                  className="bg-[#dedede] border-[#9d9d9d] dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                  placeholder="jacob@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="text-[#ADB7BE] block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
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
                  required
                  className="bg-[#dedede] border-[#9d9d9d] dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-400  font-medium py-2.5 px-5 rounded-lg w-full hover:scale-105 ease-in duration-300"
              >
                <span className="text-semibold">Send Message</span>
              </button>
            </form>
          </div>
        </section>
      ))}
    </>
  );
};

export default ContactSection;
