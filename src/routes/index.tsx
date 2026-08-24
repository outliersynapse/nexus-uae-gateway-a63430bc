import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Contact, Faq, MobileCta } from "@/components/site/ContactFaq";
import {
  About,
  Connect,
  Founder,
  Hero,
  Market,
  Marketing,
  Partnerships,
  PremiumCTA,
  Process,
  RealEstate,
  Trading,
  Verticals,
  VerticalsSecondary,
  WhoWeServe,
  Why,
} from "@/components/site/Sections";

const TITLE =
  "AD Nexus Gateway | Real Estate, Trading & Digital Marketing UAE";
const DESCRIPTION =
  "AD Nexus Gateway is a UAE-based company in Ras Al Khaimah offering real estate consultancy, general trading and social media marketing solutions across the UAE, India and international markets.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AD Nexus Gateway, AD Nexus Gateway, Real Estate Consultancy UAE, Real Estate Consultant Ras Al Khaimah, UAE Property Consultancy, Dubai Real Estate Consultancy, UAE General Trading, General Trading Company UAE, Social Media Marketing UAE, Digital Marketing UAE, UAE India Business Gateway, Property Investment UAE, UAE Business Consultancy",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "AD Nexus Gateway",
          slogan: "Connecting Opportunities. Creating Growth.",
          url: "https://www.adnexusgateway.com",
          email: "anil@adnexusgateway.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "RAKEZ Business Zone, Al Nakheel Area, P.O Box No.10055",
            addressLocality: "Ras Al Khaimah",
            addressCountry: "AE",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-14 md:pb-0">
        <Hero />
        <Verticals />
        <VerticalsSecondary />
        <About />
        <Why />
        <Connect />
        <RealEstate />
        <Trading />
        <Marketing />
        <WhoWeServe />
        <Partnerships />
        <Process />
        <Founder />
        <Market />
        <PremiumCTA />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
