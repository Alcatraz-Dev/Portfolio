"use client";
import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./BlogList";
type Props = {
  post: string;
  pargraph: string;
  buttonLink: string;
};
function PreviewBlogList({ post, pargraph, buttonLink }: Props) {
  const posts = usePreview(null, post);
  const pargraphs = usePreview(null, pargraph);
  const buttons = usePreview(null, buttonLink);
  return <BlogList linkButton={buttons} pharagraph={pargraphs} post={posts} />;
}

export default PreviewBlogList;
