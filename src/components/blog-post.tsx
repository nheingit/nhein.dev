"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Markdown from "react-markdown";

export function BlogPost({ content }: { content: string }) {
  console.log(content);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      <main className="lg:w-2/3">
        <article className="prose text-black prose-gray max-w-none">
          <Markdown>{content}</Markdown>
        </article>
      </main>
      <aside className="lg:w-1/3 space-y-6">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">About the author</h2>
          <p>
            Hi there. I'm Justin Duke: an engineer, writer, and founder. I
            currently work as the CEO of Buttondown, the best way to start and
            grow your newsletter. This site is meant equal parts playground,
            pulpit, and commonplace book; I hope you have some fun poking
            around.
          </p>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            Subscribe to my newsletter
          </h2>
          <p className="mb-4">
            Get a monthly roundup of everything I've written.
          </p>
          <form className="space-y-2">
            <Input type="email" placeholder="your@lovely.email" />
            <Button className="w-full">SUBSCRIBE!</Button>
          </form>
        </Card>
      </aside>
    </div>
  );
}

