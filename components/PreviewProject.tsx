"use client";
import { usePreview } from "@/lib/sanity.preview";

import ProjectsSction from "./ProjectsSection/ProjectSection";

type Props = {
  projectSection: string;
  projects: string;

};
function PreviewProject({ projectSection,projects }: Props) {
  const ProjectSection = usePreview(null, projectSection);
  const Projects = usePreview(null, projects);

  return (
    <ProjectsSction projectSection={ProjectSection}  projects={Projects} />
  );
}

export default PreviewProject;
