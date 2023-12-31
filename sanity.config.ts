import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from "./components/CustomStudioCms/StudioNavbar";
import { getDefaultDocumentNode } from "./structure";
import { codeInput } from "@sanity/code-input";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import {theme} from  'https://themer.sanity.build/api/hues?default=424040;600&primary=94bb07;600&transparent=424040;600&positive=43d675;300&caution=fbd024;200&lightest=fdfcfc&darkest=080707'




const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const fileUrl = process.env.NEXT_PUBLIC_SANITY_FILE_URL!;

export default defineConfig({
  basePath: "/admin",
  name: "Alcatraz_Dev",
  title: "Haythem Dhahri | Portfolio",
  theme,
  projectId,
  dataset,
  fileUrl,
  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
    codeInput(),
    simplerColorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
      //logo: Logo,
    },
  },


});
