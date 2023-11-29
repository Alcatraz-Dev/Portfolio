"use client";
import { RichTextComponents } from "@/components/CustomText/RichText/RichTextComponents";
import { client } from "@/lib/sanity.client";
import { TermsAndConditions } from "@/typings";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
type Props = {
  TermsAndConditions: TermsAndConditions;
};
export const revalidate = 10;
function TermsAndConditionsPage() {
  const [pageData, setPageData] = useState<TermsAndConditions>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch<TermsAndConditions[]>(
          `*[_type == "termsAndConditions"]`
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
      <div className=" w-full h-screen flex justify-center items-center text-3xl font-bold text-gray-800 dark:text-white">
        Loading...
      </div>
    ); // Loading state
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 dark:bg-zinc-800">
      <Link href="/">
        <div className=" absolute top-6 right-[-20px]   cursor-pointer items-center hover:scale-105 ease-in-out duration-300 hover:text-lime-500">
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

export default TermsAndConditionsPage;
