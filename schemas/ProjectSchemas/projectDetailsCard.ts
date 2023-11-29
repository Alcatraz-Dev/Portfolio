import { defineField, defineType } from "sanity";
import {FcEngineering} from "react-icons/fc"
export default defineType({
  name: "projectsDetailsCard",
  title: "Projects Details",
  icon:FcEngineering,
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
      }),
    defineField({
        name: "projectDetailsTitleCardIcon",
        title: "Project Details Title Card Icon",
        description:
          " this is to change Project Details Title Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsStatusCardIcon",
        title: "Project Details Status Card Icon",
        description:
          " this is to change Project Details Status Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsCategoryCardIcon",
        title: "Project Details Category Card Icon",
        description:
          " this is to change Project Details Category Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsTagCardIcon",
        title: "Project Details Tag Card Icon",
        description:
          " this is to change Project Details Tag Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsCreatedDateCardIcon",
        title: "Project Details Created Date Card Icon",
        description:
          " this is to change Project Details Created Date Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsAuthorCardIcon",
        title: "Project Details Author Card Icon",
        description:
          " this is to change Project Details Author Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsAuthorBioCardIcon",
        title: "Project Details Author Bio Card Icon",
        description:
          " this is to change Project Details Author Bio Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "projectDetailsShortDescriptionCardIcon",
        title: "Project Details Short Description Card Icon",
        description:
          " this is to change Project Details Short DescriptionCard Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
     

  ],
});
