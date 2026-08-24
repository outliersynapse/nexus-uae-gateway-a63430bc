import { useEffect, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import heroImg from "@/assets/hero-uae.jpg";
import heroImg2 from "@/assets/hero-uae-2.jpg";
import heroImg3 from "@/assets/hero-uae-3.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import tradingImg from "@/assets/trading.jpg";
import marketingImg from "@/assets/marketing.jpg";
import connectImg from "@/assets/connect.jpg";
import founderAsset from "@/assets/founder-anil-datla.jpg.asset.json";

/* ------------------------------------------------------------------ Hero */

const HERO_SLIDES = [
  { src: heroImg, alt: "Premium UAE skyline at blue hour" },
  { src: heroImg2, alt: "Luxury Dubai residential towers at blue hour" },
  { src: heroImg3, alt: "Dubai waterfront luxury property skyline at dusk" },
];

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      5000,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep">
      {HERO_SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1600}
          height={1104}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === slide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/45 to-navy-deep/20" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        <div className="max-w-3xl">
          <Reveal delay={120}>
            <p className="eyebrow text-gold">
              United Arab Emirates
            </p>
            <h1 className="mt-5 text-[2rem] leading-[1.12] text-white sm:text-[2.75rem] lg:text-[3.4rem]">
              Your Gateway to Opportunities Across the UAE and Beyond
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <span className="gold-rule mt-8" />
            <p className="mt-7 max-w-2xl text-[0.975rem] leading-relaxed text-white/70">
              At AD Nexus Gateway FZ-LLC, we connect businesses, investors, property
              buyers and sellers, and brands with the right opportunities, markets,
              and growth solutions.
            </p>
            <p className="mt-6 font-serif text-xl text-gold-soft sm:text-2xl">
              Real Estate. Trading. Social Media Marketing.
              <br />
              One Powerful Gateway.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-navy-deep transition-colors duration-300 hover:bg-transparent hover:text-gold"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="border border-white/30 px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-navy-deep"
              >
                Talk to Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Verticals */

const VERTICALS = [
  {
    num: "01",
    title: "Real Estate Consultancy",
    image: realEstateImg,
    body: "Strategic real estate advisory for investors, buyers, sellers, landlords, and businesses exploring opportunities across the UAE.",
    items: [
      "Residential properties",
      "Commercial properties",
      "Villas and apartments",
      "Off-plan and ready properties",
      "Investment opportunities",
      "Property sourcing",
      "Buyer and seller representation",
      "Real estate market guidance",
      "UAE–India property opportunities",
    ],
    cta: { label: "Explore Real Estate", href: "#real-estate" },
  },
  {
    num: "02",
    title: "General Trading",
    image: tradingImg,
    body: "Connecting suppliers, businesses, and customers through reliable sourcing and trading solutions.",
    items: [
      "Product sourcing",
      "Supplier identification",
      "Buyer–seller connections",
      "Trading support",
      "Market research",
      "Procurement coordination",
      "Import and export facilitation",
      "Business-to-business opportunities",
    ],
    cta: { label: "Explore General Trading", href: "#trading" },
  },
  {
    num: "03",
    title: "Social Media Marketing",
    image: marketingImg,
    body: "Helping businesses build visibility, engage audiences, generate leads, and grow their social media presence.",
    items: [
      "Social media strategy",
      "Social media management",
      "Content strategy",
      "Creative content",
      "Video and Reels marketing",
      "Lead generation campaigns",
      "Meta advertising",
      "Marketing brand positioning",
      "Campaign management",
      "Performance-focused marketing",
    ],
    cta: { label: "Explore Social Media Marketing", href: "#marketing" },
  },
];

const DUBAI_SLIDES = [
  { src: dubaiRe1, alt: "Luxury Dubai Marina waterfront towers at golden hour" },
  { src: dubaiRe2, alt: "Luxury Dubai penthouse interior overlooking Downtown Dubai" },
  { src: dubaiRe3, alt: "Luxury Dubai waterfront villa at blue hour" },
];

export function Verticals() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % DUBAI_SLIDES.length),
      6000,
    );
    return () => window.clearInterval(id);
  }, []);

  const v = VERTICALS[0];

  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Business Verticals"
          title="Three Disciplines. One Gateway."
          intro={
            <p>
              A diversified UAE business platform built to connect people,
              products, properties and opportunities across markets.
            </p>
          }
        />

        <Reveal
          as="article"
          className="group mt-16 grid border border-border bg-background lg:grid-cols-2"
        >
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-auto lg:min-h-[520px]">
            {DUBAI_SLIDES.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                loading="lazy"
                width={1600}
                height={1100}
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[2000ms] ease-out ${
                  i === slide ? "scale-105 opacity-100" : "scale-100 opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-5 left-5 flex gap-2">
              {DUBAI_SLIDES.map((s, i) => (
                <span
                  key={s.src}
                  className={`h-px w-8 transition-colors duration-500 ${
                    i === slide ? "bg-gold" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col p-8 lg:p-14">
            <span className="font-serif text-2xl text-gold">{v.num}</span>
            <h3 className="mt-3 text-2xl text-primary lg:text-3xl">{v.title}</h3>
            <span className="gold-rule mt-5" />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {v.body}
            </p>
            <ul className="mt-7 grid gap-x-8 gap-y-2 text-[0.83rem] text-muted-foreground sm:grid-cols-2">
              {v.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                  {it}
                </li>
              ))}
            </ul>
            <a
              href={v.cta.href}
              className="link-underline mt-9 inline-block self-start text-[0.7rem] uppercase tracking-[0.2em] text-primary"
            >
              {v.cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VerticalsSecondary() {
  return (
    <section className="border-t border-border bg-background pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:pt-28">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {VERTICALS.slice(1).map((v, i) => (
            <Reveal
              key={v.num}
              delay={i * 120}
              as="article"
              className="group flex flex-col bg-background p-8 transition-colors duration-500 hover:bg-secondary lg:p-10"
            >
              <div className="mb-8 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-52 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <span className="font-serif text-2xl text-gold">{v.num}</span>
              <h3 className="mt-3 text-xl text-primary">{v.title}</h3>
              <span className="gold-rule mt-5" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
              <ul className="mt-6 grid gap-x-8 gap-y-2 text-[0.83rem] text-muted-foreground sm:grid-cols-2">
                {v.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={v.cta.href}
                className="link-underline mt-8 inline-block self-start text-[0.7rem] uppercase tracking-[0.2em] text-primary"
              >
                {v.cta.label}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ About */

const VALUES = ["Trust", "Professionalism", "Connectivity", "Innovation", "Growth"];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="About AD Nexus Gateway"
            intro={
              <>
                <p>
                  AD Nexus Gateway FZ-LLC is a UAE-based business established in Ras
                  Al Khaimah, United Arab Emirates, with a vision to connect
                  opportunities across real estate, trading, and social media marketing.
                </p>
                <p>
                  We believe modern businesses need more than individual services.
                  They need connections, market access, trusted relationships, and
                  effective execution.
                </p>
                <p>
                  AD Nexus Gateway brings these capabilities together through three
                  complementary business verticals.
                </p>
              </>
            }
          />
          <Reveal delay={120}>
            <p className="mt-8 font-serif text-lg text-primary">
              Real Estate Consultancy <span className="text-gold">|</span> General
              Trading <span className="text-gold">|</span> Social Media Marketing
            </p>
          </Reveal>
        </div>

        <div className="space-y-px bg-border">
          {[
            {
              t: "Vision",
              d: "To become a trusted gateway connecting people, businesses, products, properties, and opportunities across the UAE, India, and international markets.",
            },
            {
              t: "Mission",
              d: "To deliver connected, professional and transparent business solutions across real estate, trading and social media growth — built on relationships rather than transactions.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 120} className="bg-background p-8 lg:p-10">
              <p className="eyebrow">{b.t}</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                {b.d}
              </p>
            </Reveal>
          ))}
          <Reveal delay={240} className="bg-background p-8 lg:p-10">
            <p className="eyebrow">Values</p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {VALUES.map((v) => (
                <li key={v} className="font-serif text-lg text-primary">
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- Why */

const STRENGTHS = [
  {
    t: "UAE Market Presence",
    d: "Based in Ras Al Khaimah and positioned to explore opportunities across the Emirates and international markets.",
  },
  {
    t: "India–UAE Connectivity",
    d: "Focused on facilitating business relationships, investment opportunities, property transactions and market connections.",
  },
  {
    t: "Relationship Driven",
    d: "Focus on long-term relationships rather than one-time transactions.",
  },
  {
    t: "Market Understanding",
    d: "Continuous attention to market trends, customer requirements and emerging opportunities.",
  },
  {
    t: "Professional Approach",
    d: "Structured, transparent and professional service.",
  },
];

export function Why() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why AD Nexus Gateway" title="One Gateway. Multiple Business Solutions." />
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map((s, i) => (
            <Reveal
              key={s.t}
              delay={i * 90}
              className="bg-background p-8 transition-colors duration-500 hover:bg-secondary lg:p-10"
            >
              <span className="font-serif text-xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg text-primary">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
          <div className="hidden bg-background lg:block" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Service sections */

function ServiceBlock({
  id,
  eyebrow,
  title,
  paragraphs,
  capabilities,
  image,
  imageAlt,
  cta,
  reverse = false,
  extra,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: React.ReactNode;
  capabilities: string[];
  image: string;
  imageAlt: string;
  cta: string;
  reverse?: boolean;
  extra?: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal className="overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04] lg:h-[460px]"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} intro={paragraphs} />
            <Reveal delay={140}>
              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 border-b border-border pb-3 text-[0.87rem] text-primary/80"
                  >
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 inline-block border border-primary px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                {cta}
              </a>
            </Reveal>
          </div>
        </div>
        {extra}
      </div>
    </section>
  );
}

export function RealEstate() {
  return (
    <ServiceBlock
      id="real-estate"
      eyebrow="Real Estate Consultancy"
      title={
        <>
          Discover the Right Property.
          <br />
          Make the Right Decision.
        </>
      }
      paragraphs={
        <p>
          Considered advisory for property buyers, investors and owners exploring
          the UAE market — from residential and commercial assets to off-plan
          opportunities, supported by structured guidance at every stage.
        </p>
      }
      capabilities={[
        "Property Advisory",
        "Property Sourcing",
        "Investment Opportunities",
        "Residential Properties",
        "Commercial Properties",
        "Off-Plan Properties",
        "Buyer & Seller Support",
      ]}
      image={realEstateImg}
      imageAlt="Modern UAE residential tower and villa architecture"
      cta="Speak to a Property Consultant"
      extra={
        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2">
          <Reveal className="bg-secondary/50 p-8 lg:p-10">
            <p className="eyebrow">UAE–India Real Estate Gateway</p>
            <p className="mt-5 font-serif text-xl text-primary">
              Indian Investors <span className="text-gold">↔</span> UAE Real Estate
              Opportunities
            </p>
          </Reveal>
          <Reveal delay={120} className="bg-secondary/50 p-8 lg:p-10">
            <p className="eyebrow">Cross-Border Access</p>
            <p className="mt-5 font-serif text-xl text-primary">
              UAE Opportunities <span className="text-gold">↔</span> Indian Business
              &amp; Investment Networks
            </p>
          </Reveal>
        </div>
      }
    />
  );
}

export function Trading() {
  return (
    <ServiceBlock
      id="trading"
      eyebrow="General Trading"
      title="Connecting Products, Suppliers & Markets"
      paragraphs={
        <p>
          AD Nexus Gateway operates as a business gateway for general trading
          opportunities, connecting suppliers, buyers and business partners across
          selected markets.
        </p>
      }
      capabilities={[
        "Product Sourcing",
        "Supplier Connections",
        "Buyer Connections",
        "Market Research",
        "Procurement Support",
        "Import & Export Facilitation",
      ]}
      image={tradingImg}
      imageAlt="Container terminal at blue hour"
      cta="Discuss a Trading Requirement"
      reverse
      extra={
        <div className="mt-20 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {["The Right Product", "The Right Market", "The Right Partner", "The Right Opportunity"].map(
            (t, i) => (
              <Reveal key={t} delay={i * 90} className="bg-background p-8 text-center">
                <span className="font-serif text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-serif text-lg text-primary">{t}</p>
              </Reveal>
            ),
          )}
        </div>
      }
    />
  );
}

const FUNNEL = ["Strategy", "Content", "Distribution", "Engagement", "Leads", "Growth"];

export function Marketing() {
  return (
    <ServiceBlock
      id="marketing"
      eyebrow="Social Media Marketing"
      title={
        <>
          Build Your Brand.
          <br />
          Reach Your Audience.
          <br />
          Generate Opportunities.
        </>
      }
      paragraphs={
        <p>
          Performance-focused social media marketing that positions your brand clearly,
          reaches the right audience and converts attention into qualified business
          opportunities.
        </p>
      }
      capabilities={[
        "Social Media Strategy",
        "Content Strategy",
        "Social Media Management",
        "Creative Content",
        "Video & Reels",
        "Lead Generation",
        "Meta Advertising",
        "Marketing Brand Positioning",
        "Campaign Management",
      ]}
      image={marketingImg}
      imageAlt="Minimal content production setup"
      cta="Grow Your Business With Us"
      extra={
        <Reveal className="mt-20 flex flex-wrap items-center justify-center gap-x-5 gap-y-4 border border-border px-6 py-10">
          {FUNNEL.map((f, i) => (
            <span key={f} className="flex items-center gap-5">
              <span className="font-serif text-lg text-primary">{f}</span>
              {i < FUNNEL.length - 1 ? <span className="text-gold">→</span> : null}
            </span>
          ))}
        </Reveal>
      }
    />
  );
}

/* ----------------------------------------------------------- Who we serve */

const CLIENTS = [
  "Property Buyers",
  "Property Investors",
  "Property Owners",
  "Developers",
  "Real Estate Businesses",
  "Entrepreneurs",
  "SMEs",
  "Startups",
  "Trading Companies",
  "Suppliers",
  "Manufacturers",
  "Distributors",
  "Retail Businesses",
  "Professional Service Providers",
  "Brands Seeking Social Media Growth",
];

export function WhoWeServe() {
  return (
    <section className="border-t border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Who We Serve" title="Clients Across Markets and Sectors" />
        <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal
              key={c}
              as="li"
              delay={(i % 3) * 80}
              className="flex items-baseline gap-5 border-b border-border py-4"
            >
              <span className="font-serif text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-lg text-primary">{c}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- UAE–India */

export function Connect() {
  return (
    <section id="connect" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <img
        src={connectImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1400}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          invert
          eyebrow="UAE–India Business Connect"
          title="Two Markets. One Gateway."
          intro={
            <p>
              A structured bridge between two dynamic economies — connecting
              investors, businesses, products and brands across the UAE and India.
            </p>
          }
        />
        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Real Estate",
            "Business Connections",
            "General Trading",
            "Social Media Marketing",
            "Investment Opportunities",
          ].map((f, i) => (
            <Reveal key={f} delay={i * 90} className="bg-navy-deep p-8">
              <span className="font-serif text-lg text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.95rem] text-white">{f}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-12 text-center font-serif text-2xl text-gold-soft">
            United Arab Emirates <span className="text-white/40">↔</span> India{" "}
            <span className="text-white/40">↔</span> International Markets
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Partnerships */

const PARTNERS = [
  "Real Estate Developers",
  "Property Consultants",
  "Investors",
  "Trading Companies",
  "Manufacturers",
  "Suppliers",
  "Distributors",
  "Entrepreneurs",
  "Business Consultants",
  "Strategic Partners",
];

export function Partnerships() {
  return (
    <section id="partnerships" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Business Partnerships"
          title="Let's Build Opportunities Together"
          intro={
            <p>
              We work with organisations and individuals who value long-term
              collaboration and professional execution.
            </p>
          }
        />
        <div>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {PARTNERS.map((p, i) => (
              <Reveal
                key={p}
                as="li"
                delay={(i % 2) * 80}
                className="border-b border-border py-3.5 text-[0.9rem] text-primary/85"
              >
                {p}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <a
              href="#contact"
              className="mt-10 inline-block border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-navy-deep transition-colors duration-300 hover:bg-transparent hover:text-primary"
            >
              Become a Partner
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Process */

const STEPS = [
  { n: "01", t: "Understand", d: "We understand your requirement, objective, budget, and expectations." },
  { n: "02", t: "Research", d: "We evaluate relevant opportunities, markets, products, properties, or social media strategies." },
  { n: "03", t: "Connect", d: "We connect you with suitable businesses, properties, suppliers, buyers, sellers, or solutions." },
  { n: "04", t: "Execute", d: "We coordinate the next steps professionally and efficiently." },
  { n: "05", t: "Grow", d: "We focus on long-term relationships and sustainable business opportunities." },
];

export function Process() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="How We Work" title="A Clear, Considered Process" />
        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="relative lg:pr-4">
              <div className="flex items-center gap-4 lg:block">
                <span className="font-serif text-2xl text-gold">{s.n}</span>
                <div className="mt-0 hidden h-px w-full bg-border lg:mt-5 lg:block">
                  <span className="block h-px w-8 bg-gold" />
                </div>
                <h3 className="text-lg text-primary lg:mt-6">{s.t}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Founder */

export function Founder() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="overflow-hidden">
          <img
            src={founderAsset.url}
            alt="Anil Datla, Founder & Managing Director"
            loading="lazy"
            width={900}
            height={1100}
            className="h-[420px] w-full object-cover object-top lg:h-[560px]"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Founder & Business Leadership"
            title="Anil Datla"
            intro={
              <>
                <p className="eyebrow !text-gold">Founder &amp; Managing Director</p>
                <p>
                  Anil Datla is an entrepreneur and business professional with
                  experience across real estate, client relationships, business
                  development, strategic partnerships, and social media marketing.
                </p>
                <p>
                  As the founder of AD Nexus Gateway FZ-LLC, he is focused on
                  building a diversified UAE-based business platform connecting real
                  estate opportunities, trading relationships, and social media growth
                  solutions.
                </p>
                <p>
                  His vision is to create a trusted gateway between businesses,
                  investors, entrepreneurs, and markets across the UAE and India.
                </p>
              </>
            }
          />
          <Reveal delay={160}>
            <blockquote className="mt-10 border-l border-gold pl-6 text-xl text-primary">
              Connect. Create. Collaborate. Grow.
              <span className="eyebrow mt-3 block">Leadership Philosophy</span>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Market */

const MARKETS = [
  "Ras Al Khaimah",
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "India",
  "International Markets",
];

export function Market() {
  return (
    <section className="bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          invert
          eyebrow="Our Market"
          title="Based in the UAE. Connected to Opportunities."
          intro={<p>Ras Al Khaimah, United Arab Emirates</p>}
        />
      </div>
      <div className="mt-14 flex flex-wrap justify-center gap-x-px gap-y-0 bg-white/15">
        {MARKETS.map((m, i) => (
          <Reveal
            key={m}
            delay={i * 70}
            className="flex min-w-[10rem] flex-1 items-center justify-center bg-navy-deep px-4 py-5 text-center sm:px-6 sm:py-6"
          >
            <span className="market-location font-sans text-[0.7rem] uppercase tracking-[0.2em] text-white/80">
              {m}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- CTA */

export function PremiumCTA() {
  return (
    <section className="bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="gold-rule mx-auto" />
          <h2 className="mt-8 text-3xl leading-tight text-white sm:text-4xl">
            Your Opportunity Could Be Our Next Connection.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[0.975rem] leading-relaxed text-white/65">
            Whether you're looking to invest, buy, sell, source, trade, market, or
            build a strategic partnership, AD Nexus Gateway is ready to connect.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block border border-gold bg-gold px-9 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-navy-deep transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            Contact Us Today
          </a>
        </Reveal>
      </div>
    </section>
  );
}
