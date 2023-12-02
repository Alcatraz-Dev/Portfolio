import { ImageResponse } from "@vercel/og";
import { NextApiRequest, NextApiResponse } from "next";
export const config = {
  runtime: "edge",
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const title = 'Haythem Dhahri | Portfolio - Full Stack & Game Developer';
  const description = 'Haythem Dhahri, an experienced Full Stack Developer specializing in frontend, backend, game development, and graphic design, delivering innovative solutions.';
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
