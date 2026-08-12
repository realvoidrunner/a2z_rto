import Stars from "./Stars";
import { ratingDistribution, reviews, stats } from "@/lib/data";

function RatingDistribution() {
  const max = Math.max(...ratingDistribution.map((r) => r.count));
  return (
    <div className="space-y-2.5" role="img" aria-label="Distribution of review ratings">
      {ratingDistribution.map((r) => (
        <div key={r.stars} className="flex items-center gap-3">
          <span className="w-8 shrink-0 text-right text-sm text-ink-2">{r.stars}★</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-series-track">
            <div
              className="h-full rounded-full bg-series-1"
              style={{ width: `${(r.count / max) * 100}%` }}
            />
          </div>
          <span className="w-10 shrink-0 text-sm tabular-nums text-muted">{r.count}</span>
        </div>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-sm font-semibold tracking-wide text-brand uppercase">
          Customer reviews
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by vehicle owners across Dehradun
        </h2>
      </div>

      {/* Rating summary: stat tiles + distribution */}
      <div className="mb-10 grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-semibold">{stats.averageRating}</span>
              <div className="pb-1.5">
                <Stars rating={stats.averageRating} size={18} />
                <p className="mt-1 text-sm text-muted">
                  Based on {stats.totalReviews} reviews
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-line pt-4">
            <div>
              <p className="text-2xl font-semibold">{stats.yearsInService}+</p>
              <p className="text-sm text-muted">Years in service</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{stats.casesHandled}</p>
              <p className="text-sm text-muted">Cases handled</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium text-ink-2">Rating breakdown</p>
          <RatingDistribution />
        </div>
      </div>

      {/* Review cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-md dark:hover:shadow-none dark:hover:border-brand/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <Stars rating={r.rating} />
              <span className="text-xs text-muted">{r.date}</span>
            </div>
            <blockquote className="flex-1 text-sm leading-relaxed text-ink-2">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-sm font-semibold text-brand">
                {r.name[0]}
              </span>
              <span>
                <span className="block text-sm font-medium">{r.name}</span>
                <span className="block text-xs text-muted">{r.service}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
