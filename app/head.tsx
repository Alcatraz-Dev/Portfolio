
export const runtime = 'edge'
export default function Head() {
  const BaseUrl = `${
     process.env.NEXT_PUBLIC_VERCEL_URL 
  }`;
  const BaseUrlOG = `${BaseUrl}/api/og?title=Your+Page+Title`;
 
  return (
    <>
      <title>Haythem Dhahri | Portfolio - Full Stack & Game Developer</title>

      <meta
        name="description"
        content="Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions."
      />
      <meta
        name="keywords"
        content="Haythem Dhahri, Full Stack Developer, Frontend Development, Backend Development, Game Development, Graphic Design, Web Developer, Software Engineer"
      />
      <link rel="canonical" href={`${BaseUrl}`} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Haythem Dhahri" />
      <meta name="publisher" content="Haythem Dhahri" />
      <html lang="en" />
      <meta
        property="og:image"
        content={BaseUrlOG}
      />


      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="./LogoImage.png" />
    </>
  );
}
