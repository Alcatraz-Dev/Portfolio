"use client";
import Image from "next/image";
import React, { useState } from "react";
import cookies from "./assets/cookies.png";
import CookieConsent from "react-cookie-consent";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
const CookieConsentPopup = () => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(true); 

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const containerStyles: React.CSSProperties = {
    position: "fixed",
    top: "47%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // centers content along the cross axis
    padding: "1rem",
    backgroundColor: "rgba(24, 24, 27, 0.8)", // semi-transparent background
    color: "white",
    borderRadius: "10px",
    zIndex: 1000,
    maxWidth: "300px",
    maxHeight:"350px",
    minWidth: "300px",
    minHeight:"350px",
    width: "80%", // responsive width
    boxSizing: "border-box",
    textAlign: "center", // centers text within the flex item
    gap: "10px", // space between flex items
  };

  const buttonStyles: React.CSSProperties = {
    position: "fixed",
    top: "82%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "background-color 0.2s",
    justifyContent: "center", // centers content along the cross axis
    padding: "0.7rem",
    backgroundColor: "#84CC16", // semi-transparent background
    color: "white",
    borderRadius: "10px",
    fontSize: "18px",
    zIndex: 1100,
    maxWidth: "300px",
    width: "80%", // responsive width
    boxSizing: "border-box",
    textAlign: "center", // centers text within the flex item
    gap: "10px", // space between flex itemscenters the button itself within the flex container
  };

  return (
    <>
    {isPopupOpen && (
      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="userConsent"
        style={containerStyles}
        buttonStyle={buttonStyles}
        expires={150}
        onAccept={() => {}}
      >
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          <Image
            src={cookies}
            width={65}
            height={65}
            alt={"cookies image"}

           
          />
          <button className="text-gray-500 hover:text-red-400" onClick={closePopup}>
            <IoMdCloseCircleOutline
              className="w-8 h-8 "
              style={{
                display: "block",
                position: "fixed",
                top: "7%",
                left: "82%",
                cursor: "pointer",
                
              }}
            />
          </button>
          <span style={{ display: "block", fontSize: "23px"  }}>Cookies</span>{" "}
          <span
            style={{ display: "block", fontSize: "16px" }}
          >
            We use cookies to enhance your experience.
          </span>
          {/* Text centering and size */}
          <span
            style={{
              display: "block",
              fontSize: "12px",
              marginTop: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              color: "#84CC16",
            }}
          >
            <Link href={"/PrivacyPolicy"}>Our Privacy Policy</Link>
          </span>
          <span
            style={{
              display: "block",
              fontSize: "12px",
              marginTop: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              color: "#84CC16",
            }}
          >
            <Link href={"/Terms&Conditions"}>Our Terms & Conditions</Link>
          </span>
        </div>
      </CookieConsent>
    )}
    </>
  );
};

export default CookieConsentPopup;
