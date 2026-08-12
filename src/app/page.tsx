import Header from "@/components/Header";
import ReviewsSection from "@/components/ReviewsSection";
import Stars from "@/components/Stars";
import { faqs, services, stats } from "@/lib/data";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,var(--brand-soft),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-2">
            <Stars rating={stats.averageRating} size={14} />
            <span>
              <strong className="font-semibold text-ink">{stats.averageRating}</strong>{" "}
              · {stats.totalReviews} reviews
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            RTO work in Dehradun,{" "}
            <span className="text-brand">without the queues</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
            Driving licences, vehicle registration, RC transfers, NOCs and permits —
            handled end to end by A2Z RTO Consultants. Transparent fees, doorstep
            document pickup, and updates at every step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong dark:text-bg"
            >
              Get a free consultation
            </a>
            <a
              href="#services"
              className="rounded-xl border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              Browse services
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            Mon–Sat, 9:30 am – 6:30 pm · Near RTO Office, Dehradun
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { k: `${stats.yearsInService}+`, v: "Years of experience" },
            { k: stats.casesHandled, v: "Cases completed" },
            { k: "0", v: "RTO visits needed*" },
            { k: "100%", v: "Upfront fixed pricing" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <p className="text-3xl font-semibold">{s.k}</p>
              <p className="mt-1 text-sm text-muted">{s.v}</p>
            </div>
          ))}
          <p className="col-span-2 text-xs text-muted">
            *For most documentation services. Driving tests and biometrics require a
            personal visit.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold tracking-wide text-brand uppercase">
            Our services
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything the RTO does — we handle for you
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-2xl border border-line bg-bg p-6 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-md dark:hover:shadow-none"
            >
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-xl">
                {s.icon}
              </span>
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-2">
                {s.description}
              </p>
              <ul className="space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-brand">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Tell us what you need",
      d: "Call, WhatsApp or drop by our office. We confirm the exact requirement, fee and timeline upfront.",
    },
    {
      n: "02",
      t: "We collect your documents",
      d: "Share documents digitally or we pick them up from your doorstep anywhere in Dehradun.",
    },
    {
      n: "03",
      t: "We handle the RTO",
      d: "Application filing, follow-ups, fees — all done by our team. You get status updates at every stage.",
    },
    {
      n: "04",
      t: "Delivered to your door",
      d: "Your licence, RC or certificate arrives at your address. That's it.",
    },
  ];
  return (
    <section id="process" className="scroll-mt-20 border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold tracking-wide text-brand uppercase">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Four steps, zero queues
          </h2>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-line bg-bg p-6">
              <span className="text-sm font-semibold text-brand">{s.n}</span>
              <h3 className="mt-2 mb-2 font-semibold">{s.t}</h3>
              <p className="text-sm leading-relaxed text-ink-2">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold tracking-wide text-brand uppercase">
          FAQ
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Common questions
        </h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-line bg-surface px-6 py-4 open:pb-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-muted transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-wide text-brand uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get a free consultation
          </h2>
          <p className="mt-4 max-w-md text-ink-2">
            Tell us what you need and we&apos;ll get back within a few hours with the
            exact documents required, total fee and timeline.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3">
              <dt className="font-semibold">📍 Office:</dt>
              <dd className="text-ink-2">
                Near RTO Office, Haridwar Road, Dehradun, Uttarakhand 248001
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-semibold">📞 Phone:</dt>
              <dd className="text-ink-2">+91 98765 43210</dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-semibold">✉️ Email:</dt>
              <dd className="text-ink-2">hello@a2zrtodehradun.in</dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-semibold">🕘 Hours:</dt>
              <dd className="text-ink-2">Mon–Sat, 9:30 am – 6:30 pm</dd>
            </div>
          </dl>
        </div>

        <form
          action="mailto:hello@a2zrtodehradun.in"
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-line bg-bg p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Name</span>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 outline-none transition-colors focus:border-brand"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 outline-none transition-colors focus:border-brand"
                placeholder="+91"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block font-medium">Service needed</span>
            <select
              name="service"
              className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 outline-none transition-colors focus:border-brand"
            >
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>Other / not sure</option>
            </select>
          </label>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block font-medium">Message</span>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 outline-none transition-colors focus:border-brand"
              placeholder="Briefly describe what you need help with…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong dark:text-bg"
          >
            Request a callback
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} A2Z RTO Consultants, Dehradun.</p>
        <p>
          An independent documentation-assistance service — not affiliated with the
          Government of Uttarakhand.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ReviewsSection />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
