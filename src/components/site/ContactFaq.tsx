import { useState, type FormEvent } from "react";
import { submitEnquiry } from "@/lib/contact.functions";
import { Reveal, SectionHeading } from "./Reveal";

const SERVICES = [
  "Real Estate Consultancy",
  "General Trading",
  "Social Media Marketing",
  "Business Partnership",
  "Other",
];

const FIELD =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      await submitEnquiry({
        data: {
          name: String(data.get("name") ?? ""),
          company: String(data.get("company") ?? "") || undefined,
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? "") || undefined,
          country: String(data.get("country") ?? "") || undefined,
          service: String(data.get("service") ?? "") || undefined,
          requirement: String(data.get("requirement") ?? ""),
        },
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Have an Opportunity?"
            title="Let's Connect"
            intro={
              <p>
                Whether you are looking for a property, exploring a trading
                opportunity, seeking social media marketing support, or looking for a
                strategic business partnership, we'd like to hear from you.
              </p>
            }
          />
          <Reveal delay={120} className="mt-10 space-y-8 text-sm">
            <div>
              <p className="eyebrow">Company</p>
              <p className="mt-3 font-serif text-lg text-primary">
                AD Nexus Gateway FZ-LLC
              </p>
            </div>
            <div>
              <p className="eyebrow">Address</p>
              <address className="mt-3 not-italic leading-relaxed text-muted-foreground">
                Ras Al Khaimah Economic Zone (RAKEZ)
                <br />
                RAKEZ Business Zone
                <br />
                Al Nakheel Area
                <br />
                P.O Box No.10055, Ras Al Khaimah, UAE (United Arab Emirates)
              </address>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <a
                href="mailto:anil@adnexusgateway.com"
                className="link-underline mt-3 inline-block text-primary"
              >
                anil@adnexusgateway.com
              </a>
            </div>
            <div>
              <p className="eyebrow">Website</p>
              <a
                href="https://www.adnexusgateway.com"
                className="link-underline mt-3 inline-block text-primary"
              >
                www.adnexusgateway.com
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="border border-border p-6 sm:p-10">
          <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="eyebrow">Name</span>
              <input name="name" required className={FIELD} placeholder="Your full name" />
            </label>
            <label className="block">
              <span className="eyebrow">Company Name</span>
              <input name="company" className={FIELD} placeholder="Company" />
            </label>
            <label className="block">
              <span className="eyebrow">Email Address</span>
              <input type="email" name="email" required className={FIELD} placeholder="name@company.com" />
            </label>
            <label className="block">
              <span className="eyebrow">Phone / WhatsApp</span>
              <input name="phone" className={FIELD} placeholder="+971 ..." />
            </label>
            <label className="block">
              <span className="eyebrow">Country</span>
              <input name="country" className={FIELD} placeholder="Country" />
            </label>
            <label className="block">
              <span className="eyebrow">Service Required</span>
              <select name="service" defaultValue={SERVICES[0]} className={FIELD}>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="eyebrow">Your Requirement</span>
              <textarea
                name="requirement"
                rows={5}
                required
                className={FIELD}
                placeholder="Tell us briefly about your requirement"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full border border-primary bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep sm:w-auto"
              >
                Submit Enquiry
              </button>
              {sent ? (
                <p className="mt-4 text-sm text-muted-foreground">
                  Thank you — your email client has opened with your enquiry ready to
                  send.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What is AD Nexus Gateway?",
    a: "AD Nexus Gateway is a UAE-based company established in Ras Al Khaimah, operating across three business verticals: real estate consultancy, general trading and social media marketing.",
  },
  {
    q: "Where is AD Nexus Gateway located?",
    a: "Our registered office is at Ras Al Khaimah Economic Zone (RAKEZ), RAKEZ Business Zone, Al Nakheel Area, P.O Box No.10055, Ras Al Khaimah, UAE (United Arab Emirates).",
  },
  {
    q: "What real estate services do you provide?",
    a: "Property advisory, property sourcing, investment guidance, residential and commercial properties, off-plan and ready properties, and buyer and seller support across the UAE.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with clients across the UAE, India and international markets, with a particular focus on UAE–India business and investment connectivity.",
  },
  {
    q: "Do you provide social media marketing?",
    a: "Yes. We offer social media strategy, management, content and creative production, video and Reels, Meta advertising, lead generation and campaign management.",
  },
  {
    q: "Can businesses partner with AD Nexus Gateway?",
    a: "We welcome partnerships with developers, consultants, investors, trading companies, manufacturers, suppliers, distributors, agencies and strategic partners.",
  },
  {
    q: "How can I contact AD Nexus Gateway?",
    a: "Email anil@adnexusgateway.com or submit the enquiry form on this page and our team will respond.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="insights" className="border-t border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Insights & FAQ"
          title="Questions, Answered"
        />
        <div className="mt-12 border-t border-border">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-serif text-lg text-primary">{f.q}</span>
                <span
                  className={`shrink-0 text-gold transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="py-4 text-center text-[0.68rem] uppercase tracking-[0.2em] text-primary"
      >
        WhatsApp
      </a>
      <a
        href="#contact"
        className="bg-primary py-4 text-center text-[0.68rem] uppercase tracking-[0.2em] text-primary-foreground"
      >
        Let's Connect
      </a>
    </div>
  );
}
