"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ChartNoAxesCombined, Sparkles, Workflow } from "lucide-react";

const services = [
  {
    title: "AI Automation",
    description:
      "We design systems that eliminate repetitive work, accelerate execution and create operational leverage.",
    icon: Bot,
  },
  {
    title: "Digital Experiences",
    description:
      "Premium websites and interfaces built to position your brand, increase trust and convert attention into demand.",
    icon: Sparkles,
  },
  {
    title: "Growth Systems",
    description:
      "Data-backed funnels, CRM logic and high-intent journeys that help ambitious businesses scale with clarity.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Process Design",
    description:
      "Connected workflows, better handoffs and smarter operating systems for teams that want more control.",
    icon: Workflow,
  },
];

const pillars = [
  "Premium positioning",
  "Operational clarity",
  "Scalable execution",
  "AI-first thinking",
];

export default function Home() {
  return (
    <main className="min-h-screen text-[#0b0b0b]">
      <section className="relative overflow-hidden px-6 pb-16 pt-6 md:px-10 lg:px-16">
        <div className="grid-background absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-20 flex items-center justify-between rounded-full border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-md">
            <div className="text-sm font-semibold tracking-[0.22em]">NEXUS STUDIO</div>
            <div className="hidden items-center gap-8 text-sm text-black/70 md:flex">
              <a href="#services">Services</a>
              <a href="#manifesto">Manifesto</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-black/70"
              >
                Premium AI Agency for modern brands
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl"
              >
                We build the digital layer ambitious companies need to grow faster.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg"
              >
                Nexus Studio creates premium websites, AI automations and scalable growth systems for companies that want stronger positioning, better operations and more leverage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-4 text-sm font-medium text-[#f6f3ee] transition hover:translate-y-[-1px]"
                >
                  Start a project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/80 px-6 py-4 text-sm font-medium text-black transition hover:bg-white"
                >
                  Explore services
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22 }}
              className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-black/45">Core principles</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Built for premium execution</h2>
                </div>
                <div className="rounded-2xl border border-black/10 p-3">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="grid gap-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-4 text-sm text-black/75"
                  >
                    {pillar}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-black/55">
                The focus is simple: create assets and systems that look premium, move fast and actually support growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Designed to make your company sharper, faster and more scalable.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-black/10 bg-white/80 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-black/10 bg-[#faf8f4] p-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/60">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="manifesto" className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-black/10 bg-black px-8 py-10 text-[#f6f3ee] md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-14">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">Manifesto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              We believe growth should feel intentional, not improvised.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-white/72 md:text-base">
            <p>
              Great companies do not scale by stacking random tools. They scale by building a clear digital system that turns brand, automation and execution into one coherent machine.
            </p>
            <p>
              Nexus Studio exists to create that layer. We combine premium design, AI-first thinking and operational clarity so your business can move with more precision and more presence.
            </p>
            <p>
              Less noise. More leverage. Better systems. Stronger positioning.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] border border-black/10 bg-white/80 px-8 py-10 shadow-[0_18px_60px_rgba(0,0,0,0.05)] md:flex-row md:items-center md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.24em] text-black/45">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Ready to build something that actually moves your business forward?
            </h2>
          </div>

          <a
            href="mailto:hello@nexusstudio.ai"
            className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-4 text-sm font-medium text-[#f6f3ee] transition hover:translate-y-[-1px]"
          >
            hello@nexusstudio.ai
          </a>
        </div>
      </section>
    </main>
  );
}
