export default function Head() {
  const metadata = {
    title: "HAYTHEM DHAHRI - PORTFOLIO",
    description:
    "Experienced full stack developer with a focus on frontend, backend, game development, and graphic design. Constantly striving for unique, cutting-edge solutions.",
    keywords: [
      "Portfolio",
      "Haythem Dhahri",
      "Alcatraz",
      "AlcatrazDev",
      "Alcatraz_Dev",
      "haythem-dhahri",
      "NextJs",
      "ReactJs",
      "sanity.io",
      "sanity cms",
      "freelancer",
    ],
    openGraph: {
      url: "https://haythem-dhahri.vercel.app/", // Replace with your actual portfolio URL
      title: "Haythem Dhahri | PORTFOLIO",
      description:
    "Experienced full stack developer with a focus on frontend, backend, game development, and graphic design. Constantly striving for unique, cutting-edge solutions.",
       
     
      images: [
        {
          url: "./LogoImage.png", // Replace with your actual image URL
          width: 800, // Replace with actual image width
          height: 600, // Replace with actual image height
          alt: "Logo",
          type: "image/png",
        },
      ],
      site_name: "Haythem Dhahri",
      type: "website",
      locale: "en_US", // Replace with your target audience's locale if different
     
    },
    publishedDate: new Date().toISOString().split("T")[0], // Dynamic current date
  
  };

  return (
   
    <>
      <title>Haythem Dhahri | Portfolio </title>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:site_name" content={metadata.openGraph.site_name} />
      <meta property="og:locale" content={metadata.openGraph.locale} />
      <meta
        property="og:publishedDate"
        content={metadata.publishedDate}
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/LogoImage.png" />
    </>
  );
}
