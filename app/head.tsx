export default function Head() {
  const BaseUrl = `${
    process.env.NEXT_PUBLIC_VERCEL_URL || ` http://localhost:3000 `
  }`;
  const BaseUrlOG = `${`http://localhost:3000/`}api/og?title=Your+Page+Title`;
  const ogImageUrl = `${BaseUrlOG}`;
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
        content={`https://og.tailgraph.com/og
	?fontFamily=Roboto
	&title=Haythem%20Dhahri%20%7C%20Portfolio%20-%20Full%20Stack%20%26%20Game%20Developer
	&titleTailwind=font-bold%20text-4xl%20text-lime-500
	&text=Haythem%20Dhahri%2C%20an%20experienced%20Full%20Stack%20Developer%20specializing%20in%20frontend%2C%20backend%2C%20game%20development%2C%20and%20graphic%20design%2C%20delivering%20innovative%20solutions.
	&textTailwind=mt-4%20text-white%20text-center%20font-normal%20text-xs
	&logoUrl=
	&logoTailwind=h-8
	&bgUrl=
	&bgTailwind=bg-blueGray-700
	&overlay=1
	&overlayTailwind=bg-black%20opacity-60
	&footer=haythem-dhahri.vercel.com
	&footerTailwind=text-lime-400`}
      />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="./LogoImage.png" />
    </>
  );
}
