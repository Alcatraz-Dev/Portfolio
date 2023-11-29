"use client";
import {
  ClipboardDocumentCheckIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Code({ value }: any) {
  const codeString = `${value?.code.code}`;
  const [copy, SetCopy] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl min-w-[25rem] w-auto bg-[#3a404d] rounded-lg overflow-hidden scrollbar-hide">
        <div className=" flex justify-between py-1 px-4 text-white text-xs items-center">
          <p className="text-base font-mono">{value?.codeName}</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1 active:text-lime-500 hover:cursor-pointer">
              <span className="text-lg font-semibold">
                <ClipboardDocumentCheckIcon  width={20} height={20} />
              </span>
              Copied !
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1 hover:text-lime-500"
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                SetCopy(true);
                setTimeout(() => {
                  SetCopy(false);
                }, 3000);
              }}
            >
              <span className="text-lg font-bold">
                <ClipboardIcon width={20} height={20} />
              </span>
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language={value.code.language}
          style={atomOneDark}
          customStyle={{
            padding: "25px",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Code;
