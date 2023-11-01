import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Contact, SectionParagraph } from "@/typings";
import urlFor from "@/lib/urlFor";
type Props = {
  contact: Contact[];
  pharagraph: SectionParagraph[];
};
const Contact = ({ contact, pharagraph }: Props) => {
  const colors = [
    "bg-yellow-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-violet-500",
    "bg-orange-500",
    "bg-zinc-500",
    "bg-lime-500",
  ];
  return (
    <div id="contact" className="w-full lg:h-screen px-8">
      <div className="p-5 sm:p-10">
        <div
          className="w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200
    rounded-full"
        ></div>
        <h1 className="text-gredient-contact py-10 ">Contact</h1>
        {pharagraph?.map((ph) => (
          <div key={ph._id}>
            <p className="text-lg font-light w-72">{ph.contactParagraph}</p>
          </div>
        ))}
        {/* <h3 className="pb-4">Get In Touch</h3> */}
        <div className="grid lg:grid-cols-5 gap-8   py-10">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl bg-gray-300 dark:bg-zinc-700 rounded-xl p-4 ">
            <div className="lg:p-4 h-full ">
              <div>
                <p className="py-4 font-bold text-xl text-zinc-500">
                  Get In Touch
                </p>
              </div>
              {contact?.map((contactInfo) => (
                <div key={contactInfo._id}>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={urlFor(contactInfo.mainImage).url()}
                    alt={contactInfo.name}
                    width={600}
                    height={659}
                  />
                  <div>
                    <h1
                      className={` mt-3 py-2 text-3xl font-bold text-${contactInfo.nameColor}-500`}
                    >
                      {contactInfo.name}
                    </h1>
                    <h3
                      className={`text-${contactInfo.shortDesColor}-500 text-xl font-mono font-bod`}
                    >
                      {contactInfo.shortDescription}
                    </h3>
                    <p className="py-4 italic">{contactInfo.description}</p>
                  </div>
                  <div>
                    <p className="uppercase pt-8 font-bold">Connect With Me</p>
                    <div className="flex flex-row items-center justify-center">
                      {contactInfo?.socials.map((icons) => (
                        <div key={contactInfo._id} className="m-4">
                          <div className="mt-5  cursor-pointer hover:scale-110 ease-in duration-300">
                            <SocialIcon
                              key={icons._id}
                              url={icons.url}
                              bgColor={`${icons.bgcolor}`}
                              fgColor={`${icons.fgcolor}`}
                              style={{ width: 30, height: 30 }}
                              target={"_blank"}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-sm bg-gray-300 dark:bg-zinc-700 rounded-xl lg:p-4">
            {contact?.map((form) => (
              <div key={form._id} className="p-4">
                <form
                  action={form.url}
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase font-bold text-sm py-2">
                        {" "}
                        First Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-400  bg-slate-100 dark:bg-zinc-600"
                        type="text"
                        name="first name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase font-bold text-sm py-2">
                        Last Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex bg-slate-100 border-gray-400 dark:bg-zinc-600"
                        type="text"
                        name="last name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase font-bold text-sm py-2">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400 bg-slate-100 dark:bg-zinc-600"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase font-bold text-sm py-2">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400 bg-slate-100 dark:bg-zinc-600"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase  py-2 font-bold text-sm">
                      Message
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-400 bg-slate-100 dark:bg-zinc-600"
                      rows={10}
                      name="message"
                    ></textarea>
                  </div>
                  <button className="font-bold text-base bg-lime-600 rounded-lg w-full p-4 text-gray-100 mt-4 hover:bg-lime-500 hover:scale-105 ease-in-out duration-300 ">
                    Send Message
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="#">
            <div className="rounded-full shadow-sm shadow-gray-300  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <ChevronUpIcon
                className="text-[#5e8a00]"
                width={30}
                height={30}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
