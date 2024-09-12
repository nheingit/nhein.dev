"use client";

import Markdown from "react-markdown";

export interface Frontmatter {
  title: string;
  date: string;
  slug: string;
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
    <article className="prose lg:prose-lg xl:prose-2xl text-black prose-gray max-w-none">
      <a href={`/blog/${frontmatter.slug}`} className="no-underline">
        <h1 className="cursor-pointer hover:underline">{frontmatter.title}</h1>
      </a>
      <p className="text-sm text-gray-500">Published on: {formattedDate}</p>
      <Markdown>{content}</Markdown>
    </article>
  );
}

