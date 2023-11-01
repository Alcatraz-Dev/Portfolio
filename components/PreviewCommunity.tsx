"use client";
import { usePreview } from "@/lib/sanity.preview";
import Communitys from "./Community";

type Props = {
  Community: string;
  pargraph: string;
  buttonLink: string;
};
function PreviewCommunity({ Community, pargraph, buttonLink }: Props) {
  const communitys = usePreview(null, Community);
  const pargraphs = usePreview(null, pargraph);
  const buttons = usePreview(null, buttonLink);
  return (
    <Communitys
      community={communitys}
      pharagraph={pargraphs}
      linkButton={buttons}
    />
  );
}

export default PreviewCommunity;
