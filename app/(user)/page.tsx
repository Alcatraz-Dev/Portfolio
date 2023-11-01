import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewSocialIcons from "@/components/PreviewSocialIcons";
import StatusPreview from "@/components/PreviewsComponents/PreviewStatus/StatusPreview";
import HeroPreview from "@/components/PreviewsComponents/PreviewHero/HeroPreview";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import Technologies from "@/components/Technologies";
import PreviewTechnologies from "@/components/PreviewTechnologies";
import About from "@/components/About";
import PreviewResume from "@/components/PreviewResume";
import Project from "@/components/Project";
import PreviewProject from "@/components/PreviewProject";
import Contact from "@/components/Contact";
import PreviewContact from "@/components/PreviewContact";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import PreviewVideo from "@/components/PreviewVideo";
import VideoList from "@/components/videoList";
import Communitys from "@/components/Community";
import PreviewCommunity from "@/components/PreviewCommunity";
import Navbar from "@/components/NavBar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ProjectSection from "@/components/ProjectsSection/ProjectSection";
import ResourceSection from "@/components/ResourceSection/ResourceSection";
import LogoCarousel from "@/components/SkillsLogoCarousel/LogoCarousel";
import Colors from "@/components/Colors/Colors";


const colors=[Colors]
const heroQuery = groq`
  *[_type == 'hero']{
       ...,status[]->
    }|order(_createAt desc)
`;
const logoCarouselQuery = groq`
  *[_type == 'logoCarousel']{
       ...,
    }|order(_createAt desc)
`;
const aboutQuery = groq`
  *[_type == 'about']{
       ...,skillsTab[]->,educationTab[]->,certificateTab[]->
    }|order(_createAt desc)
`;
const skillTabQuery = groq`
  *[_type == 'skillsTab']{
       ...,
    }|order(_createAt desc)
`;
const socialQuery = groq`
  *[_type == 'socialIcons']{
       ...,paragraph[]->
    }|order(_createAt desc)
`;
const paragraphsQuery = groq`
  *[_type == 'sectionParagraph']{
       ...,
    }|order(_createAt desc)
`;
const technologiesQuery = groq`
  *[_type == 'generalCategory']{
       ..., stacks[]->,paragraph[]->
    }|order(_createAt desc)
`;
const customButtonQuery = groq`
  *[_type == 'customButton']{
       ...,
    }|order(_createAt desc)
`;
const resumeQuery = groq`
  *[_type == 'resume']{
       ...,
    }|order(_createAt desc)
`;
const projectsSectionQuery = groq`
  *[_type == 'projectSection' ]{
       ...,project[]->
    }|order(_createAt desc)
`;
const projectsQuery = groq`
 *[_type == "project" ]{
..., authorBio[]->,categories[]->,projectShortDescriptionPage[]->,
  body[]->,projectDetails[]->,tags[]->
}|order(_createAt desc)
`;
const contactQuery = groq`
  *[_type == 'contact']{
       ..., socials[]->,paragraph[]->
    }|order(_createAt desc)
`;
const codeQuery = groq`
  *[_type == 'codeInput']{
       ..., 
    }|order(_createAt desc)
`;
const blogQuery = groq`
*[_type == 'post']{
  ...,
  author->,
  categories[]->,customButton[]->,assetFile[]->
}|order(_createAt desc)
`;
const videoQuery = groq`
*[_type == 'video']{
  ...,
  author->,
  categories[]->,customButton[]->,assetFile[]->
}|order(_createAt desc)
`;
const communityQuery = groq`
*[_type == 'community']{
  ...,
  author->,
  categories[]->,customButton[]->
}|order(_createAt desc)
`;
export const revalidate = 10;
export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={"status"}>
            <p className="text-center text-lg animate-pulse text-[#99e000]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <HeroPreview hero={heroQuery} />
        <PreviewSocialIcons socialIcons={socialQuery} />
        <PreviewTechnologies
          pargraph={paragraphsQuery}
          generalTechnologies={technologiesQuery}
        />
        <PreviewVideo
          buttonLink={customButtonQuery}
          pargraph={paragraphsQuery}
          video={videoQuery}
        />
        <PreviewResume pargraph={paragraphsQuery} resume={resumeQuery} />
        <PreviewProject
         
          projects={projectsQuery}
          projectSection={projectsSectionQuery}
        />
        <PreviewContact pargraph={paragraphsQuery} contact={contactQuery} />
        <PreviewBlogList
          buttonLink={customButtonQuery}
          pargraph={paragraphsQuery}
          post={blogQuery}
        />
        <PreviewCommunity
          buttonLink={customButtonQuery}
          pargraph={paragraphsQuery}
          Community={communityQuery}
        />
      </PreviewSuspense>
    );
  }
  const hero = await client.fetch(heroQuery);
  const logoCarousel = await client.fetch(logoCarouselQuery);
  const about = await client.fetch(aboutQuery);
  const skillsTab = await client.fetch(skillTabQuery);
  const socialIcon = await client.fetch(socialQuery);
  const technologies = await client.fetch(technologiesQuery);
  const resume = await client.fetch(resumeQuery);
  const projectsSection = await client.fetch(projectsSectionQuery);
  const projects = await client.fetch(projectsQuery);
  const contact = await client.fetch(contactQuery);
  const paragraph = await client.fetch(paragraphsQuery);
  const post = await client.fetch(blogQuery);
  const videos = await client.fetch(videoQuery);
  const buttons = await client.fetch(customButtonQuery);
  const communitys = await client.fetch(communityQuery);
  const code = await client.fetch(codeQuery);
  return (
    <>
      <Navbar />
      <HeroSection hero={hero} />
      <LogoCarousel logos={logoCarousel} />
      <AboutSection about={about} />

      <ProjectSection  projectSection={projectsSection} projects={projects}/>
      <ResourceSection />
      <ContactSection />
      <Footer />
      {/* <Header socialIcons={socialIcon} /> */}
      {/* <HomeSection pharagraph={paragraph} /> */}

      {/* <About pharagraph={paragraph} resume={resume} />
      <Technologies pharagraph={paragraph} technologies={technologies} />
      <VideoList linkButton={buttons} pharagraph={paragraph} video={videos} />
      <Project linkButton={buttons} pharagraph={paragraph} project={project} />
      <BlogList linkButton={buttons} pharagraph={paragraph} post={post} />
      <Communitys
        linkButton={buttons}
        pharagraph={paragraph}
        community={communitys}
      />
      <Contact pharagraph={paragraph} contact={contact} /> */}
    </>
  );
}
