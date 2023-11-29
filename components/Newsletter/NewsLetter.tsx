"use client";
import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Confetti from "../FX/Confetti";

type Props = {};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com']; // Add more as needed

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(emailRegex, 'Invalid email format')
    .test('is-valid-domain', 'The email domain is not allowed', (value) => {
      const domain = value?.split('@')[1];
      return allowedDomains.includes(domain);
    }),
});

export default function NewsLetter({}: Props) {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);




  return (
    <>
      <section id="newsletter" className=" px-5 mt-5 mb-5  ">
        <div className="flex justify-center place-items-center">
          <div className="  p-5 space-x-5  space-y-5 bg-white/40  px dark:bg-zinc-700/40 shadow-md rounded-xl max-w-[800px]">
            {/* Header and description */}
            <div className="pb-2 space-y-3">
              <h1 className="text-2xl font-black sm:text-2.5xl">
                Subscribe to Newsletter!
              </h1>
              <p className="text-[#ADB7BE]">
                Receive notifications of high-quality articles about frontend
                development and other relevant topics delivered straight to your
                inbox. You will receive a monthly email from me, ensuring a
                spam-free experience.
              </p>
            </div>
          
            {/* Formik */}

            <Formik
              initialValues={{
                email: "",
              }}
              
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                
                try {
                  const response = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: values?.email,
                    }),
                  });
                  const datas = await response.json();
                  if (datas.status >= 400) {
                    setStatus(datas.status);
                    setMessage(
                      "Error joining the newsletter.Oops, something went wrong... Send me an email at alcatrazdevcontact@gmail.com and I'll add you to the list."
                    );
                    setIsVisible(false)
                    setTimeout(() => {
                      setMessage("");
                      setIsVisible(false)
                    }, 2000);
                    return;
                  }

                  setStatus(201);
                  setMessage("Thank you for subscribing my newsletter 👻.");
                  setIsVisible(true)
                  setTimeout(() => {
                    setIsVisible(false)
                    setMessage("");
                    resetForm();
                    
                  }, 4000);
               
                } catch (error) {
                  setStatus(500);
                  setMessage(
                    "Error joining the newsletter.Oops, something went wrong... Send me an email at alcatrazdevcontact@gmail.com and I'll add you to the list."
                  );
                  setTimeout(() => {
                    setMessage("");
                   
                  }, 2000);
                }
              }}
            >
             
              <Form>
                <div className="flex items-center space-x-3 ">
                  <Field
                    type="email"
                    name="email"
                    className="  px-5  w-full bg-[#dedede] border-[#9d9d9d] dark:bg-[#18191E] border dark:border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block  p-2.5"
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  <button
                    className="px-5 py-1.5 font-bold text-gray-100 transition-all bg-lime-500 hover:bg-lime-400  rounded-md  hover:scale-105 ease-in duration-300 disabled:opacity-80"
                    type="submit"
                   
                  >
                    {submitting ? "Submitting" : "Submit"}
                  </button>
                  {isVisible && <Confetti />}
                </div>
                
                {message && (
                  <p
                    className={`${
                      status !== 201 
                        ? "text-red-400 text-sm"
                        : "text-lime-500 text-sm"
                    } pt-4 font-black `}
                  >
                    {message}
                  </p>
                )}
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
