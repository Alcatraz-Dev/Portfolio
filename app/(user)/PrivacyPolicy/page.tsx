"use client";
import { RichTextComponents } from "@/components/CustomText/RichText/RichTextComponents";
import { client } from "@/lib/sanity.client";
import { PrivacyPolicy } from "@/typings";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

export const revalidate = 10;

function PrivacyPolicyPage() {
  const [pageData, setPageData] = useState<PrivacyPolicy>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch<PrivacyPolicy[]>(
          `*[_type == "privacyPolicy"]`
        );
        setPageData(result[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  if (!pageData) {
    return (
      <div className=" w-full h-screen font-mono text-lime-500 flex justify-center items-center text-xl font-bold  ">
        Privacy Policy {''}<span className="animate-pulse">...</span>
      </div>
    ); // Loading state
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 dark:bg-zinc-800">
      <Link href="/">
        <div className=" absolute top-6 right-[-20px]  cursor-pointer items-center hover:scale-105 ease-in-out duration-300 hover:text-lime-500">
          <ArrowLeftCircleIcon width={40} height={40} className="mr-10" />
        </div>
      </Link>
      <PortableText
        key={pageData?._id}
        value={pageData?.body}
        components={RichTextComponents}
      />
    </div>
  );
}

export default PrivacyPolicyPage;
