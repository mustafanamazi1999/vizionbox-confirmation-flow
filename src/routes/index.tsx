import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Star,
  Search,
  Phone,
  BarChart3,
  FileText,
  Wrench,
  Layout,
  Lock,
} from "lucide-react";
import logoAsset from "@/assets/vizionbox-logo.png.asset.json";
import { usePastHero } from "@/hooks/use-past-hero";

const TAP = { scale: 0.98 } as const;
const CARD_HOVER = {
  y: -4,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
} as const;

const CTA_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdH_EWOxKK5Vc-un0vtAlMwyAHwSkqCu5_dHdAWIk25G_iO0g/viewform";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Google Ads Audit is Confirmed | VizionBox" },
      {
        name: "description",
        content:
          "Your audit is locked in. Complete your 3-minute pre-call form so we can prepare a tailored Google Ads audit for your home service business.",
      },
    ],
  }),
  component: ConfirmationPage,
});

/* ------------------------------- Primitives ------------------------------ */

function CTAButton({
  children,
  className = "",
  full = false,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  size?: "sm" | "lg";
}) {
  const sizing = size === "sm" ? "px-5 py-2.5 text-sm" : "px-8 py-5 text-base";
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn group inline-flex ${full ? "w-full" : ""} items-center justify-center gap-2 rounded-full bg-[#E16A3D] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] ${sizing} ${className}`}
      style={{
        boxShadow:
          "0 10px 28px -8px #E16A3D, inset 0 1px 0 rgba(255,255,255,0.25)",
      }}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}

/* -------------------------------- Header --------------------------------- */

function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(2,12,18,0.7)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="https://thevizionbox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
          aria-label="VizionBox home"
        >
          <img
            src={logoAsset.url}
            alt="VizionBox"
            style={{ height: "112px", width: "auto", objectFit: "contain" }}
          />
        </a>
        <CTAButton size="sm" className="hidden sm:inline-flex">
          Complete Pre-Call Form
        </CTAButton>
        <CTAButton size="sm" className="sm:hidden">
          Pre-Call Form
        </CTAButton>
      </div>
    </header>
  );
}

/* --------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-0">
      <div className="grid-bg absolute inset-0" />
      <div
        className="absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,111,124,0.35), transparent 60%)",
        }}
      />
      <div className="orb left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Your Audit is Confirmed</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
              Your Google Ads Audit is{" "}
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
                Locked In.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#8BAFC0] sm:text-xl">
              Before the call, take 90 seconds to read what's below. It will
              make our conversation significantly more valuable for you and
              your business. Everything here was prepared specifically for home
              service businesses in your market.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex justify-center">
              <CTAButton>Complete Your Pre-Call Form</CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
      <div id="hero-sentinel" aria-hidden="true" />
    </section>
  );
}

/* --------------------------------- FOMO ---------------------------------- */

function FOMO() {
  const ads = [
    {
      headline: "Austin's #1 Plumber. Available 24/7. Call Now.",
      url: "www.rotorooter.com",
    },
    {
      headline:
        "Emergency Plumbing Repair — Free Estimates. Licensed & Insured.",
      url: "www.mrrooter.com",
    },
    {
      headline: "Top Rated Plumber Near You. Same-Day Service. Book Online.",
      url: "www.benjaminfranklinplumbing.com",
    },
  ];
  return (
    <section
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#021820" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>While You Read This</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>
              Your Competitors Are Buying the Top Spots on Google{" "}
              <span className="text-[#E16A3D]">Right Now.</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[#8BAFC0]">
              Every single day, home service businesses in your city run Google
              Ads campaigns targeting the exact customers you want. When
              someone searches "emergency plumber near me" or "HVAC repair
              Austin," the top two to four results are paid ads. Those
              businesses are getting that call. Right now, today, while you are
              reading this sentence, those calls are going to someone else.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-12">
          <p className="mb-3 text-center text-sm text-[#8BAFC0]">
            What your customers see right now when they search for your service.
          </p>
          <div
            className="mx-auto max-w-3xl overflow-hidden rounded-2xl border bg-[#032435]"
            style={{ borderColor: "#0A3A52" }}
          >
            <div className="flex items-center gap-2 border-b border-[#0A3A52] bg-[#021820] px-4 py-3">
              <Search className="h-4 w-4 text-[#8BAFC0]" />
              <span className="text-sm text-[#8BAFC0]">
                emergency plumber near me
              </span>
            </div>
            <div className="space-y-5 p-5 sm:p-7">
              {ads.map((ad) => (
                <div key={ad.url}>
                  <span className="mb-1 inline-block rounded bg-[#E16A3D]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#E16A3D]">
                    Sponsored
                  </span>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {ad.headline}
                  </h3>
                  <p className="text-sm text-[#8BAFC0]">{ad.url}</p>
                </div>
              ))}
              <div className="space-y-4 border-t border-[#0A3A52] pt-5 opacity-30 blur-[2px]">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="mb-2 h-3 w-1/2 rounded bg-white/40" />
                    <div className="h-2 w-3/4 rounded bg-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 text-center">
          <p className="text-xl font-bold text-white sm:text-2xl">
            That is not a small problem. Every day without a properly built
            campaign is real revenue going to your competitors, compounding
            every single week.
          </p>
          <p className="mt-4 text-base text-[#8BAFC0]">
            The call you just booked is the first step to changing that. Here
            is what to expect.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- What Happens ------------------------------ */

function WhatHappens() {
  const cards = [
    {
      n: "01",
      t: "Your Market",
      d: "We pull your city and niche in real time. You see what your competitors are spending, which keywords are driving calls in your area, and exactly how competitive your specific market is right now.",
    },
    {
      n: "02",
      t: "Your Setup",
      d: "We walk through your current Google presence live on screen share. Whether you are running ads already or have never run a single one, we show you specifically what is working, what is not, and what it is costing you.",
    },
    {
      n: "03",
      t: "The Path Forward",
      d: "We show you what it would take to get into those top sponsored positions, how fast it realistically happens, what a typical budget looks like for a business in your niche, and what kind of return businesses like yours are generating.",
    },
  ];
  return (
    <section
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>The Call</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>
              Here's Exactly What We Cover in 30 Minutes.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[#8BAFC0]">
              We don't show up to a discovery call with a generic slide deck.
              Before we speak, we review your current online presence, pull up
              your competitors' active Google Ads, and identify the specific
              gaps that are costing you leads in your market. You get specific
              findings about your business. Not a pitch. Not a template.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <motion.div
                whileHover={CARD_HOVER}
                whileTap={TAP}
                className="h-full rounded-2xl border bg-[#032435] p-8 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)]"
                style={{ borderColor: "#0A3A52" }}
              >
                <div className="text-6xl font-bold text-accent">
                  {c.n}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {c.t}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#8BAFC0]">
                  {c.d}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-base text-[#8BAFC0]">
            No generic advice. No recycled templates. Thirty minutes of
            specific, prepared findings about your business and your market.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Proof Bar ------------------------------- */

function ProofBar() {
  const items = [
    "847 Leads Generated This Month",
    "$34 Average Cost Per Lead",
    "4.8x Average Return on Ad Spend",
    "127 Home Service Businesses Served",
    "3-5 Days Average Time to Launch",
    "$2.1M Revenue Generated for Clients",
  ];
  const doubled = [...items, ...items];
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#006F7C" }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, #006F7C, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, #006F7C, transparent)",
        }}
      />
      <div className="marquee-track flex w-max gap-10 py-5 whitespace-nowrap">
        {doubled.map((it, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
              {it}
            </span>
            <span className="text-white/70">★</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Results -------------------------------- */

function AnimatedCPL({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (v) => `$${Math.round(v)}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [inView, mv, to]);

  return (
    <motion.span
      ref={ref}
      className="text-6xl font-bold text-brand sm:text-7xl"
    >
      {rounded}
    </motion.span>
  );
}

function Results() {
  const cards = [
    {
      emoji: "🚗",
      title: "Garage Door Repair",
      loc: "Denver, CO",
      before: 94,
      after: 27,
      calls: "48 qualified calls month one",
      spend: "$1,000/month ad spend",
      quote:
        "I used to pay $94 per lead and had no idea if they were even qualified. Now every call costs me $27 and I can see exactly where it came from.",
    },
    {
      emoji: "🏗️",
      title: "Foundation Repair",
      loc: "Atlanta, GA",
      before: 180,
      after: 52,
      calls: "29 qualified calls month one",
      spend: "$2,000/month ad spend",
      quote:
        "High-ticket jobs, real buyers, and a dashboard that shows me every single lead. We recouped the entire investment in week two.",
    },
    {
      emoji: "🧪",
      title: "Mold Remediation",
      loc: "Seattle, WA",
      before: 140,
      after: 38,
      calls: "34 qualified calls in 30 days",
      spend: "$1,500/month ad spend",
      quote:
        "Our cost per lead was $140 with our last agency. VizionBox got us to $38 in six weeks. I finally feel like I understand where every dollar goes.",
    },
    {
      emoji: "🐛",
      title: "Pest Control",
      loc: "Houston, TX",
      before: null,
      after: 23,
      calls: "41 qualified calls month one",
      spend: "$1,000/month ad spend",
      quote:
        "We had no idea what was working before. Now I have a live dashboard I check every morning. Phone has not stopped ringing.",
    },
  ];

  return (
    <section
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#021820" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>Client Results</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>
              What Happens When the System is Built Right.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[#8BAFC0]">
              These are home service businesses that were in the exact same
              position you are in right now. Here is what changed.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={CARD_HOVER}
                whileTap={TAP}
                className="h-full rounded-2xl border bg-[#032435] p-8 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)]"
                style={{ borderColor: "#0A3A52" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-3xl">{c.emoji}</div>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {c.title}
                    </h3>
                    <p className="text-sm text-[#8BAFC0]">{c.loc}</p>
                  </div>
                  <div className="text-right">
                    {c.before !== null ? (
                      <p className="text-base text-[#8BAFC0] line-through">
                        ${c.before} CPL
                      </p>
                    ) : (
                      <p className="text-xs italic text-[#8BAFC0]">
                        Zero tracking,<br />flying blind
                      </p>
                    )}
                    <AnimatedCPL from={c.before ?? c.after * 4} to={c.after} />
                    <p className="text-xs uppercase tracking-wider text-[#8BAFC0]">
                      Cost Per Lead
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#0A3A52] bg-[#021820] px-3 py-1 text-xs text-white">
                    {c.calls}
                  </span>
                  <span className="rounded-full border border-[#0A3A52] bg-[#021820] px-3 py-1 text-xs text-white">
                    {c.spend}
                  </span>
                </div>
                <p className="mt-5 border-l-2 border-accent pl-4 text-base italic text-white">
                  "{c.quote}"
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <div
            className="rounded-2xl border p-10 text-center"
            style={{
              borderColor: "#0A3A52",
              background:
                "linear-gradient(135deg, #006F7C 0%, #021820 100%)",
            }}
          >
            <h3 className="text-3xl font-bold text-white sm:text-5xl">
              <span className="text-brand">$34</span> Average Cost Per
              Lead Across All Active Campaigns
            </h3>
            <p className="mt-3 text-base text-white/80">
              Tracked, attributed, and visible in every client's live dashboard
              every single day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- System --------------------------------- */

function System() {
  const items = [
    {
      icon: Wrench,
      t: "Full Google Ads Campaign",
      d: "Built from scratch with the right keywords, structure, and targeting for your specific city and service. No generic templates.",
    },
    {
      icon: Layout,
      t: "Dedicated Landing Page",
      d: "A conversion-focused page built specifically for your campaign, designed to turn ad clicks into phone calls, not your homepage.",
    },
    {
      icon: Phone,
      t: "CallRail Call Tracking",
      d: "Every inbound call recorded, attributed to the exact keyword and ad that generated it, and visible in your dashboard in real time.",
    },
    {
      icon: BarChart3,
      t: "Live Reporting Dashboard",
      d: "A Looker Studio dashboard you can check from any device at any time. Calls, cost per lead, ad spend, and performance trends all in one place.",
    },
    {
      icon: FileText,
      t: "Weekly Performance Report",
      d: "Every Monday a performance summary lands in your inbox. Calls generated, cost per lead, what was optimized, and what is being tested next.",
    },
    {
      icon: Check,
      t: "Weekly Optimization",
      d: "Every Wednesday your campaign is reviewed and optimized. Negative keywords, bid adjustments, ad testing, and performance improvements. Every single week without you asking.",
    },
  ];
  return (
    <section className="border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>The System</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>Everything Built. Nothing Left to You.</SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[#8BAFC0]">
              When a client signs with VizionBox, here is exactly what gets
              built and managed for them from day one.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <motion.div
                whileHover={CARD_HOVER}
                whileTap={TAP}
                className="h-full rounded-2xl border bg-[#032435] p-6 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)]"
                style={{ borderColor: "#0A3A52" }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{it.t}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#8BAFC0]">
                  {it.d}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-xl font-bold text-white sm:text-2xl">
            You fill out one form. We build everything. You go live in 3 to 5
            business days. Your only job is answering the phone and closing the
            jobs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials ------------------------------ */

function Testimonials() {
  const ts = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Mike R.",
      role: "HVAC Owner, Dallas TX",
      q: "Before working with them I was spending $2,000 a month on Google Ads and had no idea what I was getting. Within the first month I had a dashboard showing me every single call and my cost per lead dropped by more than half.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Dave T.",
      role: "Roofing Contractor, Charlotte NC",
      q: "They built our landing page, set up tracking, and launched in under a week. Our phone went from quiet to ringing every day. First month we closed 6 new roofing jobs directly from the ads.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Chris L.",
      role: "Plumbing Business Owner, Phoenix AZ",
      q: "I have worked with two other agencies before. Both overpromised and disappeared. These guys send me a report every Monday and jump on a call every month. The transparency alone is worth it.",
    },
  ];
  return (
    <section
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#021820" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>Testimonials</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>
              What Home Service Business Owners Say After Month One.
            </SectionHeading>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ts.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={CARD_HOVER}
                whileTap={TAP}
                className="h-full rounded-2xl border bg-[#032435] p-8 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)]"
                style={{ borderColor: "#0A3A52", borderLeft: "3px solid #006F7C" }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-5 text-lg italic leading-relaxed text-white">
                  "{t.q}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-[#8BAFC0]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Guarantee ------------------------------- */

function Guarantee() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32">
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>The Guarantee</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <SectionHeading>We Don't Get Paid Unless You Do.</SectionHeading>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
          <div
            className="relative overflow-hidden rounded-3xl border p-8 sm:p-12"
            style={{
              borderColor: "#0A3A52",
              background:
                "linear-gradient(135deg, #006F7C 0%, #021820 100%)",
            }}
          >
            <div className="orb pointer-events-none absolute -left-32 -top-20 h-[360px] w-[360px]" />
            <div className="orb pointer-events-none absolute -right-32 -bottom-20 h-[400px] w-[400px]" style={{ animationDelay: "-4s" }} />
            <div className="relative flex flex-col items-center text-center">
              <div
                className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-brand bg-background"
                style={{ boxShadow: "0 0 40px -5px rgba(225,106,61,0.6)" }}
              >
                <ShieldCheck className="h-10 w-10 text-brand" />
              </div>
              <p className="mt-6 text-lg leading-relaxed text-white sm:text-xl">
                If your campaign is not generating a positive return on ad
                spend within the first 30 days, meaning you are making more
                from closed jobs than you are spending on ads,{" "}
                <span className="font-bold text-brand">
                  month 2 is completely free.
                </span>{" "}
                No asterisks. No conditions. No awkward conversations. We put
                this in writing in every client agreement before a single
                dollar is spent on advertising.
              </p>
              <ul className="mt-6 grid gap-3 text-left sm:grid-cols-2">
                {[
                  "Minimum $1,000 monthly ad spend directly with Google required to qualify",
                  "Guarantee terms defined clearly in writing before signing",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-6 rounded-2xl border bg-[#032435] p-8 text-center"
            style={{ borderColor: "#0A3A52" }}
          >
            <p className="text-2xl font-bold text-white sm:text-3xl">
              No long-term contracts. No lock-in.
            </p>
            <p className="mt-2 text-base text-[#8BAFC0]">
              We earn your business every single month.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton>Complete Your Pre-Call Form</CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Scarcity ------------------------------- */

function Scarcity() {
  return (
    <section
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#021820" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-[0.18em] text-white"
              style={{
                background:
                  "linear-gradient(135deg, #E16A3D 0%, #b8472a 100%)",
                boxShadow: "0 0 30px -5px rgba(225,106,61,0.6)",
              }}
            >
              <Lock className="h-3.5 w-3.5" />
              Limited Availability
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading className="mt-6">
              We Only Work With{" "}
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
                One Business Per Category Per City.
              </span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[#8BAFC0]">
              We don't take on two plumbers in Austin or two roofers in Denver.
              Once a market is claimed it is permanently closed to competitors
              in that category. The call you have booked holds your spot. We
              cannot hold it beyond that.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <div
            className="rounded-2xl border bg-[#032435] p-8 text-center"
            style={{ borderColor: "rgba(225,106,61,0.35)" }}
          >
            <p className="text-lg text-white">
              If you are reading this,{" "}
              <span className="font-bold text-[#006F7C]">
                your market has not been claimed yet.
              </span>{" "}
              But other businesses in your area are actively looking for
              exactly what you just booked.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="grid-bg absolute inset-0" />
      <div
        className="absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,111,124,0.35), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>One Last Thing Before the Call</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Complete Your Pre-Call Form.{" "}
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">It Takes 3 Minutes.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[#8BAFC0]">
              Your answers let us build a tailored audit of your specific
              business, your competitors, and your market before we get on the
              call. The more context you give us, the more specific and
              valuable the next 30 minutes will be for you. We review every
              submission before the call and come prepared with real findings.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10">
            <div className="flex justify-center">
              <div className="w-full sm:w-auto">
                <CTAButton full>Complete Your Pre-Call Form</CTAButton>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#8BAFC0]">
              Takes less than 3 minutes. Kept completely confidential. Helps us
              prepare specific findings for your business before the call.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#020C12" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start gap-2 text-left">
          <a
            href="https://thevizionbox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
            aria-label="VizionBox home"
          >
            <img
              src={logoAsset.url}
              alt="VizionBox"
              style={{ height: "112px", width: "auto", objectFit: "contain" }}
            />
          </a>
          <p className="text-sm text-[#8BAFC0]">
            Google Ads Management for Home Service Businesses
          </p>
          <div className="flex flex-col gap-0">
            <a
              href="mailto:mustafa@thevizionbox.com"
              className="text-sm text-[#8BAFC0] transition-colors hover:text-white"
            >
              mustafa@thevizionbox.com
            </a>
            <a
              href="mailto:paniz@thevizionbox.com"
              className="text-sm text-[#8BAFC0] transition-colors hover:text-white"
            >
              paniz@thevizionbox.com
            </a>
            <a
              href="https://thevizionbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8BAFC0] transition-colors hover:text-white"
            >
              thevizionbox.com
            </a>
          </div>
        </div>
        <div
          className="mt-8 border-t pt-6 text-left text-xs text-[#8BAFC0]"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p>© 2026 VizionBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page --------------------------------- */

function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#020C12] text-white">
      <Header />
      <main>
        <Hero />
        <FOMO />
        <WhatHappens />
        <ProofBar />
        <Testimonials />
        <Guarantee />
        <Scarcity />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
