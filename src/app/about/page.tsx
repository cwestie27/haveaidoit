"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const projects = [
  {
    name: "Have AI Do It",
    description:
      "This site. Free AI guides and done-for-you setup for small businesses who want to use AI without the hype.",
    link: "/",
    external: false,
  },
  {
    name: "ArborValue",
    description:
      "AI-powered tree and property valuation tools. Helping arborists and property owners get accurate assessments faster.",
    link: "https://arborvalue.com",
    external: true,
  },
  {
    name: "GrantFound",
    description:
      "AI-assisted grant discovery and writing tools. Making it easier for nonprofits and small orgs to find and win grants.",
    link: "https://grantfound.com",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400">
              About
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hey, I&apos;m Carson.
            </h1>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                By day, I work in finance. By night (and weekends, and lunch breaks), I build
                things with AI.
              </p>
              <p>
                I started Have AI Do It because I kept seeing the same problem: small business
                owners hearing about AI everywhere but having no idea where to start. The guides
                online were either too technical or too vague. So I started writing the guides I
                wished existed.
              </p>
              <p>
                My approach is simple - skip the hype, test everything, and only recommend what
                actually works. I&apos;ve tried hundreds of AI tools so you don&apos;t have to.
                The ones that make it into my guides are the ones that passed the &quot;would I
                actually use this?&quot; test.
              </p>
              <p>
                When businesses started asking me to set things up for them, I started offering
                done-for-you services. Turns out, most people don&apos;t want to become AI
                experts - they just want AI that works in their business. Fair enough.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-white/5 bg-white/[0.01] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            badge="Projects"
            title="Things I've built"
            description="A few of the AI-powered projects I've put together."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {project.external ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Card className="group h-full border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/[0.04] hover:-translate-y-1">
                      <CardContent className="flex h-full flex-col p-6">
                        <h3 className="flex items-center gap-2 text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                          {project.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Link href={project.link}>
                    <Card className="group h-full border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/[0.04] hover:-translate-y-1">
                      <CardContent className="flex h-full flex-col p-6">
                        <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-transparent p-8 text-center sm:p-16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Want AI in your business?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
                Check out the services page to see how I can help, or just drop me an email.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-indigo-600 text-white hover:bg-indigo-500">
                  <Link href="/services">
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                  <a href="mailto:carson@haveaidoit.com">Email Me</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
