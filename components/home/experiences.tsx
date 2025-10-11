import { MDXRemote } from "next-mdx-remote/rsc";

import { experiences } from "./data";

function Tech({ list }: { list: string[] }) {
  return (
    <p className="df flex-wrap pb-2" role="list" aria-label="Technologies used">
      <span className="sr-only">Technologies used:</span>
      {list.map((l, i) => (
        <span
          key={i}
          className="px-2.5 py-1 text-xs text-primary/80 border rounded-lg bg-primary/5"
          role="listitem"
        >
          {l}
        </span>
      ))}
    </p>
  )
}

function Experiences() {
  return (
    <section className="p-8" id="experience">
      <h2 className="mb-4 text-4xl text-center">
        Experience
      </h2>

      <div role="list" aria-label="Work experience timeline">
        {experiences.map((ex, i) => (
          <article
            key={ex.title}
            className="revealing mb-4 sm:mb-8 max-w-7xl mx-auto rounded-2xl border relative isolate"
            role="listitem"
            itemScope
            itemType="https://schema.org/WorkExperience"
          >
            <span
              className={`timeline-line w-px ${i === experiences.length - 1 ? "[--h:90%] md:[--h:80%]" : ""} absolute top-12 -left-px bg-gradient-to-b from-border via-border to-teal-600 dark:to-teal-300 rounded-full`}
              aria-hidden="true"
            ></span>

            <header className="df justify-between flex-wrap sm:gap-4 p-4 pl-7 sticky top-20 rounded-2xl bg-secondary border shadow dark:shadow-white/10">
              <span
                className="size-5 absolute top-1/2 -left-[11px] -translate-y-1/2 bg-border dark:bg-secondary border border-accent-foreground/70 rounded-full z-[1]"
                aria-hidden="true"
              ></span>

              <div className="sm:flex-1 text-sm sm:text-base font-medium">
                <h3 className="text-base sm:text-lg" itemProp="jobTitle">
                  {ex.title}
                </h3>
                <p itemProp="employer" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">{ex.company}</span>
                </p>
              </div>

              <div className="text-xs sm:text-sm">
                <time itemProp="duration" dateTime={ex.isoTimeline}>
                  {ex.timeline}
                </time>
                <p itemProp="jobLocation" itemScope itemType="https://schema.org/Place">
                  <span itemProp="address">{ex.location}</span>
                </p>
              </div>
            </header>

            <div
              className="marked px-4 pt-2.5 sm:pt-4"
              itemProp="description"
            >
              <MDXRemote
                source={ex.descriptions}
                components={{ Tech }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiences