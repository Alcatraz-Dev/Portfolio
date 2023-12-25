import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioNavbar from "./components/CustomStudioCms/StudioNavbar";
import Logo from "./components/CustomStudioCms/Logo";
import { getDefaultDocumentNode } from "./structure";
import { codeInput } from "@sanity/code-input";
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const fileUrl = process.env.NEXT_PUBLIC_SANITY_FILE_URL!;
export default defineConfig({
  basePath: "/studio",
  name: "Alcatraz_Dev",
  title: "Haythem Dhahri | Portfolio",

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
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
