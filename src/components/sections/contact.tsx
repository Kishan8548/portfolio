"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  CodeforcesIcon,
  LeetCodeIcon,
} from "@/components/ui/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const contactLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Kishan8548",
    icon: GithubIcon,
    handle: "@Kishan8548",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kishan-garhwal-122298331/",
    icon: LinkedinIcon,
    handle: "kishan-garhwal",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/kishan_455",
    icon: CodeforcesIcon,
    handle: "kishan_455",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/kishan_455/",
    icon: LeetCodeIcon,
    handle: "kishan_455",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("kishangarhwal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // In case keys aren't configured yet, provide clear instruction
      setStatus("error");
      setErrorMessage(
        "EmailJS credentials missing in .env.local. Please configure NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage("Failed to send transmission. Please email me directly or try again.");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background ambient red glow */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// contact"
          title="Let's Build Together"
          description="Have a question, a project in mind, or just want to connect? Send a message directly to my inbox."
        />

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Info & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="left">
              <Card className="border-border/50 bg-card/40 backdrop-blur-md overflow-hidden relative group hover:border-primary/40 transition-all duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />
                <CardContent className="p-6 md:p-8 space-y-6">
                  {/* Status badge */}
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Available for Opportunities
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-sans text-foreground">
                      Direct Connection
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Feel free to ping me directly for internships, freelance projects, AI/Android collaborations, or competitive programming chats.
                    </p>
                  </div>

                  {/* Copy Email Box */}
                  <div className="p-3.5 rounded-xl bg-background/60 border border-border/50 flex items-center justify-between gap-3 group/mail">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="h-9 w-9 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono uppercase text-muted-foreground">Email</p>
                        <p className="text-sm font-mono text-foreground truncate">
                          kishangarhwal@gmail.com
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      onClick={copyEmail}
                      className="text-muted-foreground hover:text-foreground hover:bg-primary/20 shrink-0"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* Gmail quick launcher */}
                  <div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=kishangarhwal@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-accent transition-colors"
                    >
                      <span>Open in Gmail</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Social Grid */}
                  <div className="pt-2 border-t border-border/40 space-y-3">
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      // find me on
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {contactLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                            className:
                              "justify-start bg-background/40 hover:bg-primary/10 hover:border-primary/50 transition-all font-mono text-xs",
                          })}
                        >
                          <link.icon className="mr-2 h-3.5 w-3.5 text-primary" />
                          <span className="truncate">{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Right Column: EmailJS Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="right">
              <Card className="border-border/50 bg-card/40 backdrop-blur-md relative overflow-hidden neon-glow">
                {/* Terminal top-bar aesthetics */}
                <div className="px-6 py-3 border-b border-border/40 bg-background/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      transmission_terminal
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-primary/80">
                    <Sparkles className="h-3 w-3" />
                    <span>email.js</span>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8">
                  {status === "success" ? (
                    <div className="py-12 px-4 text-center space-y-4">
                      <div className="mx-auto h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_oklch(0.7_0.2_140/20%)]">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold font-sans text-foreground">
                          Transmission Dispatched!
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                          Thank you for reaching out. Your message was delivered straight to my inbox, and I will reply as soon as possible.
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStatus("idle")}
                        className="mt-4 font-mono text-xs border-primary/30 hover:border-primary hover:bg-primary/10"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="user_name"
                          className="block font-mono text-xs text-muted-foreground uppercase tracking-wider"
                        >
                          // your name <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
                            <User className="h-4 w-4" />
                          </div>
                          <input
                            id="user_name"
                            name="user_name"
                            type="text"
                            required
                            placeholder="Alex Mercer"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all font-sans"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="user_email"
                          className="block font-mono text-xs text-muted-foreground uppercase tracking-wider"
                        >
                          // your email <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground/60">
                            <Mail className="h-4 w-4" />
                          </div>
                          <input
                            id="user_email"
                            name="user_email"
                            type="email"
                            required
                            placeholder="alex@example.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all font-sans"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block font-mono text-xs text-muted-foreground uppercase tracking-wider"
                        >
                          // message <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3.5 pointer-events-none text-muted-foreground/60">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Hey Kishan, I came across your portfolio and wanted to discuss a project..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all font-sans resize-y min-h-[120px]"
                          />
                        </div>
                      </div>

                      {/* Error Alert */}
                      {status === "error" && (
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-2.5 text-xs text-destructive">
                          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                          <p className="leading-relaxed font-sans">{errorMessage}</p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full relative group overflow-hidden rounded-lg bg-gradient-to-r from-primary via-accent to-primary p-[1px] font-mono text-sm font-medium transition-all duration-300 hover:shadow-[0_0_25px_oklch(0.65_0.25_20/40%)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-[7px] bg-background/90 group-hover:bg-background/70 transition-colors">
                          {status === "loading" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin text-primary" />
                              <span className="text-foreground">Encrypting & Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                              <span className="text-foreground">Dispatch Transmission</span>
                            </>
                          )}
                        </div>
                      </button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

