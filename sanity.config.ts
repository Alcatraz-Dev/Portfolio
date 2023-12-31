import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import StudioNavbar from "./components/CustomStudioCms/StudioNavbar";
import { getDefaultDocumentNode } from "./structure";
import { codeInput } from "@sanity/code-input";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import {
  createTheme,
  hues,
} from "https://themer.sanity.build/api/hues?default=0ea70c&primary=aeff00";
import Logo from "./components/CustomStudioCms/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const fileUrl = process.env.NEXT_PUBLIC_SANITY_FILE_URL!;
export default defineConfig({
  basePath: "/studio",
  name: "Alcatraz_Dev",
  title: "Haythem Dhahri | Portfolio",
  theme: createTheme({ ...hues, primary: { ...hues.primary, mid: "#aeff00" } }),
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
