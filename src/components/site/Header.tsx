import { useEffect, useState } from "react";
import logo from "@/assets/ad-nexus-logo-transparent.png.asset.json";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "UAE–India Connect", href: "#connect" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "Real Estate Consultancy", href: "#real-estate" },
  { label: "General Trading", href: "#trading" },
  { label: "Social Media Marketing", href: "#marketing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-royal transition-all duration-500 ${
        scrolled ? "shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center" aria-label="AD Nexus Gateway home">
          <span className="inline-flex bg-white px-3 py-1.5">
            <img
              src={logo.url}
              alt="AD Nexus Gateway FZ-LLC"
              className={`w-auto transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`}
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className="link-underline text-[0.72rem] uppercase tracking-[0.18em] text-white transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
                <div className="invisible absolute left-1/2 top-full z-10 w-64 -translate-x-1/2 translate-y-2 border border-white/10 bg-navy-deep p-2 opacity-0 shadow-[0_20px_60px_-30px_rgba(16,24,48,0.5)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {SERVICES.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 text-[0.8rem] text-white/75 transition-colors hover:bg-white/5 hover:text-gold"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.72rem] uppercase tracking-[0.18em] text-white transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="border border-gold bg-gold px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-navy-deep transition-colors duration-300 hover:bg-gold-soft hover:border-gold-soft"
          >
            Let's Connect
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] border border-white/25 xl:hidden"
        >
          <span
            className={`h-px w-5 bg-white transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span className={`h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-5 bg-white transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-royal transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/12 py-4 text-[0.78rem] uppercase tracking-[0.2em] text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="py-4">
            <p className="eyebrow text-gold">Services</p>
            {SERVICES.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="mt-3 block text-sm text-white/70"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mb-4 bg-gold px-6 py-4 text-center text-[0.7rem] uppercase tracking-[0.2em] text-navy-deep"
          >
            Let's Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
