"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section id="writeups" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="// writeups"
          title="What I've Written"
          description="Some notes and writeups from competitions."
        />

        <FadeIn>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:neon-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <Badge variant="secondary" className="text-xs">
                            {post.tag}
                          </Badge>
                          <span className="font-mono text-xs text-muted-foreground">
                            {post.date}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            · {post.readTime}
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
