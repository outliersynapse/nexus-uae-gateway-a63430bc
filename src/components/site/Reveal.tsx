import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${invert ? "text-gold" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span className={`gold-rule mt-6 ${align === "center" ? "mx-auto" : ""}`} />
      {intro ? (
        <div
          className={`mt-6 space-y-4 text-[0.975rem] leading-relaxed ${
            invert ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </div>
      ) : null}
    </Reveal>
  );
}
