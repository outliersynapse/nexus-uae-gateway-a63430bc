import logo from "@/assets/ad-nexus-logo.png.asset.json";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Real Estate Consultancy", href: "#real-estate" },
  { label: "General Trading", href: "#trading" },
  { label: "Social Media Marketing", href: "#marketing" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact Us", href: "#contact" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "WhatsApp", href: "https://wa.me/" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="inline-flex bg-white px-5 py-3">
              <img
                src={logo.url}
                alt="AD Nexus Gateway FZ-LLC"
                className="h-11 w-auto"
                loading="lazy"
              />
            </div>
            <p className="mt-6 font-serif text-xl text-white">
              Connecting Opportunities. Creating Growth.
            </p>
            <p className="mt-4 text-[0.8rem] uppercase tracking-[0.14em] text-gold">
              Real Estate Consultancy | General Trading | Social Media Marketing
            </p>
            <p className="mt-6 text-sm leading-relaxed">
              Ras Al Khaimah, United Arab Emirates
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm">
              {QUICK.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Contact</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href="mailto:anil@adnexusgateway.com" className="hover:text-gold">
                  anil@adnexusgateway.com
                </a>
              </li>
              <li>
                <a href="https://www.adnexusgateway.com" className="hover:text-gold">
                  www.adnexusgateway.com
                </a>
              </li>
            </ul>
            <p className="eyebrow mt-10 text-gold">Follow</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs tracking-wide text-white/45">
          © 2026 AD Nexus Gateway FZ-LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
