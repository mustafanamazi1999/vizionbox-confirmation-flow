import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Search,
} from "lucide-react";
import { usePastHero } from "@/hooks/use-past-hero";

const LOGO_SRC = "/vizionbox-logo.png";

const TAP = { scale: 0.98 } as const;
const CARD_HOVER = {
  y: -5,
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
    <motion.a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`cta-btn cta-shine glow-cta group inline-flex ${full ? "w-full" : ""} items-center justify-center gap-2 rounded-full bg-[#E16A3D] font-semibold text-white transition-colors duration-300 hover:brightness-110 ${sizing} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
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
      viewport={{ once: true, margin: "-40px" }}
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
        backgroundColor: "rgba(21,28,40,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-[5px] sm:px-8 sm:py-[6px]">
        <a
          href="https://thevizionbox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
          aria-label="VizionBox home"
        >
          <img
            src={LOGO_SRC}
            alt="VizionBox"
            style={{ height: "112px", width: "auto", objectFit: "contain" }}
          />
        </a>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-shine glow-cta inline-flex items-center justify-center rounded-full bg-[#E16A3D] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Pre-Call Form
        </a>
      </div>
    </header>
  );
}

/* --------------------------------- Hero ---------------------------------- */

const HERO_EASE = [0.22, 1, 0.36, 1] as const;

const HeroReveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.99 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: HERO_EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-[10%] h-2 w-2 rounded-full bg-accent opacity-60" />
        <div className="absolute top-20 right-[15%] h-1.5 w-1.5 rounded-full bg-brand opacity-50" />
        <div className="absolute top-32 left-[20%] h-1 w-1 rounded-full bg-accent opacity-40" />
        <div className="absolute top-8 right-[25%] h-2.5 w-2.5 rounded-full bg-accent opacity-30" />
        <div className="absolute top-28 right-[8%] h-1.5 w-1.5 rounded-full bg-brand opacity-45" />
      </div>
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,111,124,0.35), transparent 60%)",
        }}
      />
      <motion.div
        className="orb absolute left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-4 mt-2 sm:px-8 sm:pb-36 md:mt-6">
        <div className="mx-auto max-w-3xl text-center">
          <HeroReveal delay={0}>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.22em] text-brand sm:text-lg">
              Congratulations
            </p>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Your Google Ads Audit
              <br />
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
                is Locked In.
              </span>
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#8BAFC0] sm:text-xl">
              Before the call, take 90 seconds to read what's below and fill
              out your pre-call form. The more we know about your business
              before we speak, the more specific and valuable our conversation
              will be.
            </p>
          </HeroReveal>
          <Reveal delay={0.1} className="mt-8 sm:mt-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-balance text-xl font-bold leading-snug text-white sm:text-2xl">
                The call you just booked is the first step to scaling your
                business
              </p>
            </div>
          </Reveal>
          <HeroReveal delay={0.4}>
            <div className="mt-6 flex justify-center pb-4 sm:pb-8">
              <CTAButton>Complete Pre-Call Form</CTAButton>
            </div>
          </HeroReveal>
        </div>
      </div>
      <div
        id="hero-sentinel"
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full"
      />
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
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        backgroundColor: "oklch(0.23 0.04 260)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute left-[15%] top-40 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(0,111,124,0.18)" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            className="pointer-events-none absolute left-1/2 -top-20 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "rgba(0,111,124,0.18)" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <Reveal><Eyebrow>While You Read This</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-[2.7rem] font-extrabold leading-[1.02] tracking-tight sm:text-[3.375rem] md:text-[3.9rem] lg:text-[79px]">
              Your Competitors Are Buying the Top Spots on Google{" "}
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
                Right Now.
              </span>
            </h2>
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
          <p className="mb-3 text-center text-sm font-semibold text-[#E16A3D]">
            What your customers see right now when they search for your service.
          </p>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card">
            <div className="flex items-center gap-2 border-b border-white/10 bg-background/60 px-4 py-3">
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
              <div className="space-y-4 border-t border-white/10 pt-5 opacity-30 blur-[2px]">
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div className="mb-2 h-3 w-1/2 rounded bg-white/40" />
                    <div className="h-2 w-3/4 rounded bg-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#E16A3D]">
            Illustrative example only
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto max-w-3xl overflow-hidden rounded-2xl border-l-4 border-accent bg-[rgba(0,111,124,0.08)] p-6 shadow-[-6px_0_24px_-6px_rgba(0,181,199,0.5)] transition-shadow duration-500 hover:shadow-[0_0_60px_-12px_rgba(225,106,61,0.7),-6px_0_24px_-6px_rgba(0,181,199,0.5)] sm:p-8"
            style={{ borderColor: "#00B5C7" }}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
              style={{ background: "#E16A3D" }}
            />
            <div
              className="orb pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "#E16A3D" }}
            />
            <p className="relative z-10 text-xl font-bold leading-relaxed text-white sm:text-2xl">
              That is not a small problem. Every day without a properly built
              campaign is real revenue going to your competitors, compounding
              every single week.
            </p>
            <p className="relative z-10 mt-4 text-base leading-relaxed text-white">
              The call you just booked is the first step to changing that.
              Here is what to expect.
            </p>
          </motion.div>
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
              findings about your business.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <motion.div
                whileHover={CARD_HOVER}
                whileTap={TAP}
                className="group h-full rounded-2xl border border-white/10 bg-card p-8 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)] active:border-accent/40 active:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)]"
              >
                <span className="inline-block text-6xl font-bold text-accent transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,111,124,0.25)] group-hover:scale-[1.35] group-hover:brightness-150 group-hover:drop-shadow-[0_0_24px_rgba(0,181,199,0.95)] group-active:scale-[1.35] group-active:brightness-150 group-active:drop-shadow-[0_0_24px_rgba(0,181,199,0.95)]">
                  {c.n}
                </span>
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
    <motion.section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#006F7C" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
    </motion.section>
  );
}


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
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        backgroundColor: "oklch(0.23 0.04 260)",
      }}
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

        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-6">
          {ts.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <motion.div
                whileHover={CARD_HOVER}
                whileTap={TAP}
                className="relative overflow-hidden rounded-3xl border border-l-4 border-white/10 border-l-accent bg-card p-10 transition-shadow duration-300 hover:border-accent/40 hover:shadow-[0_20px_60px_-20px_rgba(0,111,124,0.5)]"
              >
                <span className="pointer-events-none absolute left-6 top-2 select-none text-8xl font-black leading-none text-accent opacity-20">
                  &ldquo;
                </span>
                <div className="relative">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-5 text-xl italic leading-relaxed text-white">
                    "{t.q}"
                  </p>
                  <div className="mt-8 flex items-center justify-end gap-3">
                    <div className="text-right">
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-[#8BAFC0]">{t.role}</p>
                    </div>
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                      loading="lazy"
                    />
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
          <motion.div
            whileHover={{ y: -6, scale: 1.005 }}
            whileTap={TAP}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_30px_90px_-20px_rgba(225,106,61,0.45)] active:border-brand/60"
            style={{ background: "linear-gradient(135deg, #006F7C 0%, #021820 100%)" }}
          >
            <div className="relative p-8 sm:p-12">
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
                  spend within the first 30 days, meaning you are making less
                  from closed jobs than you are spending on ads,{" "}
                  <span className="font-bold text-brand">
                    month 2 is completely FREE.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={TAP}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="group relative mx-auto mt-6 overflow-hidden rounded-xl border border-white/10 px-6 py-5 text-center backdrop-blur-sm sm:px-8 sm:py-6"
            style={{ backgroundImage: "linear-gradient(120deg, rgba(0,111,124,0.12) 0%, rgba(0,111,124,0.06) 50%, rgba(0,111,124,0.12) 100%)" }}
          >
            <div
              className="animated-gradient absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
              style={{ backgroundImage: "linear-gradient(120deg, rgba(225,106,61,0.35), rgba(0,111,124,0.35), rgba(225,106,61,0.35))" }}
            />
            <p className="text-2xl font-bold text-white sm:text-3xl">
              No long-term contracts. No lock-in.
            </p>
            <p className="mt-2 text-base text-[#8BAFC0]">
              We earn your business every single month.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton>Complete Your Pre-Call Form</CTAButton>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Scarcity ------------------------------- */

function Scarcity() {
  return (
    <section
      className="relative overflow-hidden border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#021820" }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-destructive/60 bg-destructive/15 px-6 py-3 text-sm font-bold uppercase tracking-wider"
              style={{ color: "#ef4444", boxShadow: "0 0 30px -5px rgba(220,38,38,0.5)" }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "#ef4444" }} />
              Limited Availability
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading className="mt-6">
              We Only Work With{" "}
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
                One Business
              </span>{" "}
              Per Category Per City.
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
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={TAP}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:border-brand/60 hover:shadow-[0_20px_60px_-10px_rgba(225,106,61,0.4)] active:border-brand/60 bg-card p-8 text-center"
            style={{ borderColor: "rgba(225,106,61,0.35)" }}
          >
            <p className="text-lg text-white">
              If you are reading this,{" "}
              <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent font-bold">
                your market has not been claimed yet.
              </span>{" "}
              But other businesses in your area are actively looking for
              exactly what you just booked.
            </p>
          </motion.div>
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
      className="border-t bg-background"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
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
              src={LOGO_SRC}
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

function MobileStickyCTA({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur transition-all duration-300 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-shine glow-cta flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white"
      >
        Complete Your Pre-Call Form
      </a>
    </div>
  );
}

function ConfirmationPage() {
  const pastHero = usePastHero();
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <FOMO />
        <WhatHappens />
        <ProofBar />
        <Guarantee />
        <Scarcity />
        <FinalCTA />
        <Testimonials />
      </main>
      <Footer />
      <MobileStickyCTA visible={pastHero} />
    </div>
  );
}
