import { defineField, defineType } from "sanity";
import {FcEngineering} from "react-icons/fc"
export default defineType({
  name: "resourcesDetailsCard",
  title: "Resources Details",
  icon:FcEngineering,
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
      }),
    defineField({
        name: "resourceDetailsTitleCardIcon",
        title: "Resource Details Title Card Icon",
        description:
          " this is to change Resource Details Title Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsStatusCardIcon",
        title: "Resource Details Status Card Icon",
        description:
          " this is to change Resource Details Status Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsCategoryCardIcon",
        title: "Resource Details Category Card Icon",
        description:
          " this is to change Resource Details Category Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsTagCardIcon",
        title: "Resource Details Tag Card Icon",
        description:
          " this is to change Resource Details Tag Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsCreatedDateCardIcon",
        title: "Resource Details Created Date Card Icon",
        description:
          " this is to change Resource Details Created Date Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsAuthorCardIcon",
        title: "Resource Details Author Card Icon",
        description:
          " this is to change Resource Details Author Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsAuthorBioCardIcon",
        title: "Resource Details Author Bio Card Icon",
        description:
          " this is to change Resource Details Author Bio Card Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "resourceDetailsShortDescriptionCardIcon",
        title: "Resource Details Short Description Card Icon",
        description:
          " this is to change Resource Details Short DescriptionCard Icon ex:STAR ICON  (png format , from svgrepo.com)",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
     

  ],
});
