"use client";

import Markdown from "react-markdown";

interface Frontmatter {
  title: string;
  date: string;
  // Add other frontmatter fields as needed
}

interface BlogPostProps {
  content: string;
  frontmatter: Frontmatter;
}

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function BlogPost({ content, frontmatter }: BlogPostProps) {
  const formattedDate = formatDate(frontmatter.date);

  return (
    <article className="prose text-black prose-gray max-w-none">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">Published on: {formattedDate}</p>
      <Markdown>{content}</Markdown>
    </article>
  );
}

