"use client";

import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
    <article className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl text-black prose-gray max-w-none prose-pre:p-0">
      <a href={`/blog/${frontmatter.slug}`} className="no-underline">
        <h1 className="cursor-pointer hover:underline">{frontmatter.title}</h1>
      </a>
      <p className="text-sm text-gray-500">Published on: {formattedDate}</p>
      <Markdown
        components={{
          code({node, inline, className, children, ...props}: {
            node: any;
            inline?: boolean;
            className?: string;
            children: React.ReactNode;
            [key: string]: any;
          }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="my-6">
                <SyntaxHighlighter
                  {...props}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="text-lg md:text-xl lg:text-2xl my-6 p-4 rounded-lg"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}

