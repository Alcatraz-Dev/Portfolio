import Providers from "@/components/Providers/Providers";
import "../../styles/globals.css";

import type { Metadata } from "next";
const BaseUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/`;
export const metadata: Metadata = {
  title: "Haythem Dhahri | Portfolio - Full Stack & Game Developer",
  description:
    "Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions.",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />

      <meta
        name="keywords"
        content="Haythem Dhahri, Full Stack Developer, Frontend Development, Backend Development, Game Development, Graphic Design, Web Developer, Software Engineer"
      />
      <link rel="canonical" href={`${BaseUrl}`} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Haythem Dhahri" />
      <meta name="publisher" content="Haythem Dhahri" />
      <html lang="en" />
      <meta property="og:site_name" content={`${BaseUrl}`} />
      <meta
        property="og:description"
        content="Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions."
      />
      <meta
        property="og:title"
        content="Haythem Dhahri | Portfolio - Full Stack & Game Developer"
      />
      <meta
        property="Haythem Dhahri | Portfolio - Full Stack & Game Developer:card"
        content="summary_large_image"
      />
      <meta
        property="Haythem Dhahri | Portfolio - Full Stack & Game Developer:title"
        content="Haythem Dhahri | Portfolio - Full Stack & Game Developer"
      />
      <meta
        property="Haythem Dhahri | Portfolio - Full Stack & Game Developer:description"
        content="Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions."
      />
      <meta property="og:image" content={`${BaseUrl}og-image.png`} />
      <meta
        property="Haythem Dhahri | Portfolio - Full Stack & Game Developer:image"
        content={`${BaseUrl}og-image.png`}
      />
      {/* twitter metadata */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@Haythem_Dhahri_" />
      <meta
        property="twitter:title"
        content="Haythem Dhahri | Portfolio - Full Stack & Game Developer"
      />
      <meta
        property="twitter:description"
        content="Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions."
      />
      <meta property="twitter:image" content={`${BaseUrl}og-image.png`} />
      <meta content="width=device-width, initial-scale=1" property="viewport" />
      <body>
        <Providers>
          <main className="overflow-x-hidden bg-gray-100 text-zinc-800 dark:bg-zinc-800 dark:text-white overflow-y-scroll scrollbar-hide">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
