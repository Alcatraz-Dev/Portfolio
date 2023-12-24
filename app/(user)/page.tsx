import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import PreviewSuspense from "@/components/PreviewSuspense";
import Technologies from "@/components/Technologies";
import PreviewTechnologies from "@/components/PreviewTechnologies";
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
import CookieConsentPopup from "@/components/CookiePopup/CookieConsentPopup";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import ArtWorkGallery from "@/components/ArtGallery/ArtWorkGallery";
import ScrollingGallery from "@/components/ArtGallery/ScrolingGallery";
import ScrolingGallery from "@/components/ArtGallery/ScrolingGallery";

const colors = [Colors];

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
       ...,project[]->,tabFilter[]->,
    }|order(_createAt desc)
`;
const projectsQuery = groq`
 *[_type == "project" ]{
..., authorBio[]->,categories[]->,projectShortDescriptionPage[]->,
  body[]->,projectDetails[]->,tags[]->
}|order(_createAt desc)
`;

const gallerySectionQuery = groq`
  *[_type == "gallerySection"]{
  ...,gallery[]->
}|order(_createAt desc)
`;
const galleryQuery = groq`
 *[_type == "gallery" ]{
..., artImage,
}|order(_createAt desc)
`;

const resourcesSectionQuery = groq`
  *[_type == 'resourceSection' ]{
       ...,resource[]->,tabFilter[]->,
    }|order(_createAt desc)
`;
const resourcesQuery = groq`
 *[_type == "resource" ]{
..., authorBio[]->,categories[]->,resourceShortDescriptionPage[]->,
  body[]->,resourceDetails[]->,tags[]->
}|order(_createAt desc)
`;
const contactQuery = groq`
  *[_type == 'contact']{
       ..., socials[]->
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
const commentQuery = groq`
*[_type == 'comment']{
  ...,
  reaction[]->,replies[]->,parentComment[]->
}|order(_createAt desc)
`;
const reactionQuery = groq`
*[_type == 'reaction']{
  ...,emoji[]->
}|order(_createAt desc)
`;
const emojiQuery = groq`
*[_type == 'emoji']{
  ...,
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
  const hero = await client.fetch(heroQuery);
  const logoCarousel = await client.fetch(logoCarouselQuery);
  const about = await client.fetch(aboutQuery);
  const skillsTab = await client.fetch(skillTabQuery);
  const socialIcon = await client.fetch(socialQuery);
  const technologies = await client.fetch(technologiesQuery);
  const resume = await client.fetch(resumeQuery);
  const projectsSection = await client.fetch(projectsSectionQuery);
  const projects = await client.fetch(projectsQuery);
  const resourcesSection = await client.fetch(resourcesSectionQuery);
  const resources = await client.fetch(resourcesQuery);
  const gallerySection = await client.fetch(gallerySectionQuery);
  const gallery = await client.fetch(galleryQuery);
  const contact = await client.fetch(contactQuery);
  const paragraph = await client.fetch(paragraphsQuery);
  const post = await client.fetch(blogQuery);
  const comments = await client.fetch(commentQuery);
  const reactions = await client.fetch(reactionQuery);
  const emojis = await client.fetch(emojiQuery);
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

      <ProjectSection projectSection={projectsSection} projects={projects} />
      <ResourceSection
        resourceSection={resourcesSection}
        resources={resources}
      />

      <ScrolingGallery />
      <ContactSection contact={contact} />
      <NewsLetter />
      <Footer />
      <CookieConsentPopup />

      {/* <Technologies pharagraph={paragraph} technologies={technologies} />
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
function previewData() {
  throw new Error("Function not implemented.");
}
