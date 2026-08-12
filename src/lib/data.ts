export type Service = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Driving Licence",
    description:
      "Learner's licence, permanent DL, renewals and duplicates — slot booking to delivery.",
    icon: "🪪",
    points: ["Learner & permanent DL", "Renewal & duplicate", "Test slot booking"],
  },
  {
    title: "Vehicle Registration (RC)",
    description:
      "New vehicle registration at Dehradun RTO with complete documentation support.",
    icon: "🚗",
    points: ["New RC", "Temporary registration", "Choice number assistance"],
  },
  {
    title: "RC Ownership Transfer",
    description:
      "Buying or selling a used vehicle? We handle the complete transfer of ownership.",
    icon: "🔁",
    points: ["Sale transfer", "Succession transfer", "Form 29/30 filing"],
  },
  {
    title: "NOC & Re-registration",
    description:
      "Interstate NOC, re-registration of out-of-state vehicles in Uttarakhand.",
    icon: "📄",
    points: ["Interstate NOC", "UK re-registration", "CRTV clearance"],
  },
  {
    title: "Hypothecation (HP)",
    description:
      "Add or terminate bank hypothecation on your RC after loan closure.",
    icon: "🏦",
    points: ["HP termination", "HP addition", "Bank NOC follow-up"],
  },
  {
    title: "Fitness & Permits",
    description:
      "Fitness certificates and commercial permits for taxis, goods carriers and buses.",
    icon: "✅",
    points: ["Fitness certificate", "State & national permits", "Permit renewal"],
  },
  {
    title: "International Driving Permit",
    description:
      "IDP issuance for driving abroad — valid across 150+ countries.",
    icon: "🌏",
    points: ["Same-week processing", "Document checklist", "Embassy-ready format"],
  },
  {
    title: "Duplicate RC / Corrections",
    description:
      "Lost your RC or DL? Duplicates, address changes and detail corrections.",
    icon: "🛠️",
    points: ["Duplicate RC & DL", "Address change", "Name/detail correction"],
  },
];

export type Review = {
  name: string;
  service: string;
  rating: number;
  date: string;
  text: string;
};

// Sample reviews — replace with real customer reviews.
export const reviews: Review[] = [
  {
    name: "Rohit Negi",
    service: "RC Transfer",
    rating: 5,
    date: "July 2026",
    text: "Sold my car and the ownership transfer was done without me visiting the RTO even once. Clear pricing, regular updates on WhatsApp.",
  },
  {
    name: "Priya Rawat",
    service: "Driving Licence",
    rating: 5,
    date: "June 2026",
    text: "Got my learner's and permanent licence through them. They booked the slots, prepared all documents and guided me for the test. Very smooth.",
  },
  {
    name: "Amit Chauhan",
    service: "NOC & Re-registration",
    rating: 4,
    date: "June 2026",
    text: "Moved from Delhi and needed my car re-registered in Uttarakhand. Took a little longer than promised but they handled everything end to end.",
  },
  {
    name: "Sunita Bisht",
    service: "Hypothecation Removal",
    rating: 5,
    date: "May 2026",
    text: "After closing my car loan, they removed the bank hypothecation from my RC in under two weeks. Honest and professional service.",
  },
  {
    name: "Vikram Thapa",
    service: "Fitness Certificate",
    rating: 5,
    date: "April 2026",
    text: "Run a small taxi fleet — they manage all our fitness renewals and permits. Never missed a deadline in two years.",
  },
  {
    name: "Neha Joshi",
    service: "International Driving Permit",
    rating: 4,
    date: "March 2026",
    text: "Needed an IDP urgently before travelling. Delivered in four working days. Good communication throughout.",
  },
];

export const ratingDistribution = [
  { stars: 5, count: 182 },
  { stars: 4, count: 31 },
  { stars: 3, count: 8 },
  { stars: 2, count: 3 },
  { stars: 1, count: 3 },
];

export const stats = {
  averageRating: 4.7,
  totalReviews: ratingDistribution.reduce((s, r) => s + r.count, 0),
  yearsInService: 12,
  casesHandled: "5,000+",
};

export const faqs = [
  {
    q: "Do I need to visit the RTO office myself?",
    a: "For most services — RC transfer, NOC, hypothecation, duplicates — no. We collect your documents, file the application and deliver the result. A personal visit is only needed where biometrics or a driving test is mandatory (e.g. permanent driving licence).",
  },
  {
    q: "What documents do I need for an RC transfer?",
    a: "Typically the original RC, valid insurance, PUC certificate, Form 29/30 signed by both parties, and address & ID proof of the buyer. We share an exact checklist for your case before starting.",
  },
  {
    q: "How long does a typical service take?",
    a: "Driving licence work usually completes within 1–3 weeks, RC transfers within 2–4 weeks, and NOC/re-registration within 3–6 weeks depending on the originating state. We give you a realistic timeline upfront.",
  },
  {
    q: "Are your charges fixed?",
    a: "Yes. We quote a single all-inclusive fee (government fees + service charge) before we begin. No surprises later.",
  },
];
