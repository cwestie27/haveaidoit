"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Hammer,
  GraduationCap,
  HeadphonesIcon,
  Check,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: Phone,
    title: "Free Call",
    description: "We chat about your business, where you're wasting time, and where AI can help.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Hammer,
    title: "I Build It",
    description: "I set up the tools, automations, and workflows tailored to your business.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: GraduationCap,
    title: "I Train Your Team",
    description: "Your team gets hands-on training so they actually know how to use everything.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: HeadphonesIcon,
    title: "30 Days Support",
    description: "Questions come up. That's normal. I'm available for 30 days after setup.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$500",
    description: "Perfect for trying out one AI tool in your workflow.",
    features: [
      "One automation or chatbot",
      "Setup and configuration",
      "Team training session",
      "30 days email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,500",
    description: "For businesses ready to add AI across multiple workflows.",
    features: [
      "Up to 3 automations",
      "Custom chatbot setup",
      "Content workflow",
      "Team training sessions",
      "30 days priority support",
      "Workflow documentation",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "$2,500+",
    description: "Full AI audit and custom implementation for your business.",
    features: [
      "Full AI audit",
      "Custom implementation plan",
      "Unlimited automations",
      "Custom chatbot with your data",
      "Full team training",
      "60 days priority support",
      "Monthly check-in calls",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most Starter projects are done in 1-2 weeks. Growth packages take 2-4 weeks. Custom projects vary, but I'll give you a timeline during our call.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Nope. That's the whole point. I handle the technical stuff and train your team to use everything. If you can use email, you can use the tools I set up.",
  },
  {
    question: "What kind of AI tools do you set up?",
    answer:
      "Chatbots, email automation, content workflows, data analysis tools, image generation pipelines, and more. It depends on what your business actually needs.",
  },
  {
    question: "What if I'm not sure what I need?",
    answer:
      "That's what the free call is for. We'll talk about your business, figure out where AI can save you time, and I'll recommend the right plan.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. You pay for the package, I deliver the work, and you get 30 days of support. Simple.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/15">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400">
              Done-For-You Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI Setup. Done For You.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              You run your business. I&apos;ll set up the AI tools. No jargon, no fluff - just
              stuff that saves you time.
            </p>
            <Button asChild size="lg" className="mt-8 bg-indigo-600 text-white hover:bg-indigo-500">
              <a href="mailto:carson@haveaidoit.com">
                Book a Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-white/15 bg-white/[0.08] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            badge="How It Works"
            title="Four steps to AI that works"
            description="No 6-month projects. No confusing timelines. Here's how it goes."
          />
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="relative flex shrink-0 flex-col items-center">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${step.bg} ring-1 ring-white/10`}>
                      <step.icon className={`h-7 w-7 ${step.color}`} />
                    </div>
                  </div>
                  <div className="pt-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            badge="Pricing"
            title="Simple pricing. No surprises."
            description="Pick the plan that fits your business. Not sure? Book a free call and I'll help you decide."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`relative h-full border-white/15 bg-white/[0.06] backdrop-blur-sm transition-all hover:border-white/20 ${
                    plan.popular
                      ? "ring-2 ring-indigo-500/50 border-indigo-500/30"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-indigo-600 text-white">
                        <Sparkles className="mr-1 h-3 w-3" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="flex h-full flex-col p-8">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="mt-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`mt-8 w-full ${
                        plan.popular
                          ? "bg-indigo-600 text-white hover:bg-indigo-500"
                          : "border-white/20 bg-white/5 hover:bg-white/10"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <a href="mailto:carson@haveaidoit.com">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/15 bg-white/[0.08] py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            badge="FAQ"
            title="Common questions"
          />
          <div className="mt-12">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
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
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-transparent p-8 text-center sm:p-16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-600/10 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to add AI to your business?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
                Book a free call. No sales pitch, just a conversation about what could work for you.
              </p>
              <Button asChild size="lg" className="mt-8 bg-indigo-600 text-white hover:bg-indigo-500">
                <a href="mailto:carson@haveaidoit.com">
                  Book a Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
