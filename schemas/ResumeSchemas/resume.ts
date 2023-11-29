import { defineField, defineType } from "sanity";
import {FcSurvey} from "react-icons/fc"
export default defineType({
  name: "cv-resume",
  title: "Cv-Resume",
  icon:FcSurvey,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
        name: "assetFile",
        title: "Asset File",
        type: "file",
      }),
      defineField({
        name: "fileId",
        title: "File Id",
        type: "string",
      }),
    
   
  ],
});
