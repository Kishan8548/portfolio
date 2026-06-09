"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  KaggleIcon,
  CodeforcesIcon,
  LeetCodeIcon,
} from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const contactLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ayanokojix21",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nishchal-chandel-b043b9319/",
    icon: LinkedinIcon,
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/nishchalchandel",
    icon: KaggleIcon,
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Ayanokoji21",
    icon: CodeforcesIcon,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Ayanokoji21/",
    icon: LeetCodeIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="// contact"
          title="Let's Connect"
          description="Feel free to reach out if you want to chat about tech, collaborate on a project, or just say hi."
        />

        <FadeIn>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-8 space-y-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nishchandel21@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg font-mono text-primary transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  nishchandel21@gmail.com
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                    })}
                  >
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.name}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
