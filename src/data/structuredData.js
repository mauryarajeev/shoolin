// JSON-LD structured data (schema.org) for rich results in Google Search.
// Injected into <head> per-page by the useSeo hook.

const SITE_URL = "https://www.shoolinsecurityservices.com";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shoolin Security Services",
  description:
    "ISO 9001:2015 certified, PSARA licensed security agency in Dehradun, Uttarakhand. Ex-military security guards, VIP protection, mobile patrols and housekeeping services.",
  url: SITE_URL,
  telephone: ["+91-9456302658", "+91-7983760848", "+91-7906378372"],
  email: "shoolinss1965@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Krishna Vihar, 11 A, Garhi Cantt Rd, Opp RIMC Main Gate, Above Pizza Italia",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248003",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/Shoolinsecurityservices/61567327042255/",
    "https://www.instagram.com/shoolinsecurityservices/",
    "https://www.linkedin.com/company/shoolin-security-services",
  ],
  foundingYear: "1965",
  areaServed: { "@type": "State", name: "Uttarakhand" },
  priceRange: "INR",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Shoolin Security Services PSARA licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fully PSARA licensed under PSA/L/69/UK/2024/JUN/1/348.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shoolin provide 24/7 security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 24/7 coverage with a dedicated crisis management team.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Shoolin Security Services cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate across Uttarakhand, headquartered in Dehradun.",
      },
    },
    {
      "@type": "Question",
      name: "Are the security guards ex-military personnel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Guards are drawn from the Indian Armed Forces with specialized training.",
      },
    },
  ],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Security Services by Shoolin",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Security Guard Force",
        description:
          "24/7 trained ex-military security guards for commercial and institutional properties.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "VIP and Executive Protection",
        description:
          "Elite bodyguard services from Special Services Group of Uttarakhand Army.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Mobile Roving Patrols",
        description:
          "Mobile patrol teams for area monitoring and emergency response.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Lady Security Checkers",
        description:
          "Specially trained female security staff for professional screening.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Housekeeping Services",
        description:
          "Professional housekeeping and facility management for commercial establishments.",
      },
    },
  ],
};
